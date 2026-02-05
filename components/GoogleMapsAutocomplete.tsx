'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { GOOGLE_MAPS_API_KEY } from '@/lib/constants';

interface GoogleMapsAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void;
  allowCurrentLocation?: boolean;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: any) => {
            getPlace: () => {
              formatted_address?: string;
              geometry?: {
                location: {
                  lat: () => number;
                  lng: () => number;
                };
              };
              name?: string;
            };
            addListener: (event: string, callback: () => void) => void;
          };
        };
      };
    };
  }
}

export default function GoogleMapsAutocomplete({
  value,
  onChange,
  placeholder,
  onLocationSelect,
  allowCurrentLocation = false,
}: GoogleMapsAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!inputRef.current || typeof window === 'undefined') return;

    // Wait for Google Maps to be loaded (it's loaded in layout.tsx)
    const initAutocomplete = () => {
      if (window.google?.maps?.places && inputRef.current) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: 'in' },
          fields: ['formatted_address', 'geometry', 'name'],
        });

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChange(place.formatted_address);
            if (onLocationSelect && place.geometry?.location) {
              onLocationSelect({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                address: place.formatted_address,
              });
            }
          }
        });
      }
    };

    // Check if Google Maps is already loaded
    if (window.google?.maps?.places) {
      initAutocomplete();
    } else {
      // Wait for the script to load (from layout.tsx)
      const checkGoogleMaps = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(checkGoogleMaps);
          initAutocomplete();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkGoogleMaps);
      }, 10000);
    }

    return () => {
      if (autocompleteRef.current) {
        // Cleanup if needed
        autocompleteRef.current = null;
      }
    };
  }, [onChange, onLocationSelect]);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
          );
          const data = await response.json();
          
          if (data.results && data.results[0]) {
            const address = data.results[0].formatted_address;
            onChange(address);
            if (onLocationSelect) {
              onLocationSelect({
                lat: latitude,
                lng: longitude,
                address: address,
              });
            }
          }
        } catch (error) {
          console.error('Error getting address:', error);
          onChange(`${latitude}, ${longitude}`);
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to get your location. Please enter manually.');
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-600" size={20} />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-20 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
        />
        {allowCurrentLocation && (
          <button
            type="button"
            onClick={getCurrentLocation}
            disabled={isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors disabled:opacity-50"
            title="Use current location"
          >
            <Navigation size={20} className={isLoading ? 'animate-spin' : ''} />
          </button>
        )}
      </div>
    </div>
  );
}
