'use client';

import { useState } from 'react';
import { Calculator, MapPin, Plane } from 'lucide-react';
import { PRICING_PER_KM, AIRPORT_TOLL_CHARGE, GOA_AIRPORTS } from '@/lib/constants';
import GoogleMapsAutocomplete from './GoogleMapsAutocomplete';

declare global {
  interface Window {
    google: {
      maps: {
        DistanceMatrixService: new () => {
          getDistanceMatrix: (request: any, callback: (response: any, status: string) => void) => void;
        };
        TravelMode: {
          DRIVING: string;
        };
        UnitSystem: {
          METRIC: number;
        };
      };
    };
  }
}

interface Location {
  lat: number;
  lng: number;
  address: string;
}

export default function PriceCalculator() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [vehicleType, setVehicleType] = useState('Sedan');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropLocation, setDropLocation] = useState<Location | null>(null);
  const [isAirportDrop, setIsAirportDrop] = useState(false);
  const [tollCharges, setTollCharges] = useState(0);

  const calculateDistance = async () => {
    if (!pickupLocation || !dropLocation) {
      alert('Please select both pickup and drop locations');
      return;
    }

    if (typeof window === 'undefined' || !window.google?.maps) {
      alert('Google Maps is not loaded. Please refresh the page.');
      return;
    }

    setIsCalculating(true);
    
    try {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [{ lat: pickupLocation.lat, lng: pickupLocation.lng }],
          destinations: [{ lat: dropLocation.lat, lng: dropLocation.lng }],
          travelMode: window.google.maps.TravelMode.DRIVING,
          unitSystem: window.google.maps.UnitSystem.METRIC,
        },
        (response: any, status: string) => {
          if (status === 'OK' && response) {
            const element = response.rows[0].elements[0];
            if (element.status === 'OK') {
              const distanceInKm = element.distance.value / 1000; // Convert meters to km
              setDistance(distanceInKm);
              
              // Check if drop location is an airport
              const dropAddress = drop.toLowerCase();
              const isAirport = GOA_AIRPORTS.some(airport => 
                dropAddress.includes(airport.toLowerCase())
              );
              setIsAirportDrop(isAirport);
              
              // Calculate toll charges
              const toll = isAirport ? AIRPORT_TOLL_CHARGE : 0;
              setTollCharges(toll);
              
              // Calculate base fare
              const pricePerKm = PRICING_PER_KM[vehicleType as keyof typeof PRICING_PER_KM] || 35;
              const baseFare = Math.round(distanceInKm * pricePerKm);
              
              // Total fare = base fare + toll charges
              const calculatedPrice = baseFare + toll;
              setEstimatedPrice(calculatedPrice);
            } else {
              alert('Unable to calculate distance. Please check the locations.');
            }
          } else {
            alert('Error calculating distance. Please try again.');
          }
          setIsCalculating(false);
        }
      );
    } catch (error) {
      console.error('Error calculating distance:', error);
      alert('Error calculating distance. Please try again.');
      setIsCalculating(false);
    }
  };

  const handlePickupChange = (value: string) => {
    setPickup(value);
    setEstimatedPrice(null);
    setDistance(null);
  };

  const handleDropChange = (value: string) => {
    setDrop(value);
    setEstimatedPrice(null);
    setDistance(null);
    setIsAirportDrop(false);
    setTollCharges(0);
  };

  const handleVehicleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVehicleType(e.target.value);
    if (distance !== null) {
      const pricePerKm = PRICING_PER_KM[e.target.value as keyof typeof PRICING_PER_KM] || 35;
      const baseFare = Math.round(distance * pricePerKm);
      const totalFare = baseFare + tollCharges;
      setEstimatedPrice(totalFare);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-xl">
          <Calculator className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-gray-900">Price Calculator</h3>
          <p className="text-gray-600 text-sm">Get instant fare estimate</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <MapPin size={16} className="mr-2 text-primary-600" />
            Pickup Location
          </label>
          <GoogleMapsAutocomplete
            value={pickup}
            onChange={handlePickupChange}
            placeholder="Enter pickup location"
            onLocationSelect={setPickupLocation}
            allowCurrentLocation={true}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <MapPin size={16} className="mr-2 text-primary-600" />
            Drop Location
          </label>
          <GoogleMapsAutocomplete
            value={drop}
            onChange={handleDropChange}
            placeholder="Enter drop location"
            onLocationSelect={setDropLocation}
            allowCurrentLocation={true}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
          <select
            value={vehicleType}
            onChange={handleVehicleTypeChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white"
          >
            <option value="Hatchback">Hatchback - ₹30/km</option>
            <option value="Sedan">Sedan - ₹35/km</option>
            <option value="SUV">SUV - ₹45/km</option>
          </select>
        </div>

        <button
          onClick={calculateDistance}
          disabled={!pickup || !drop || !pickupLocation || !dropLocation || isCalculating}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isCalculating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Calculating...</span>
            </>
          ) : (
            <span>Calculate Fare</span>
          )}
        </button>

        {estimatedPrice !== null && distance !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-2 border-primary-200">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Estimated Distance</p>
                <p className="text-2xl font-heading font-bold text-primary-700">
                  {distance.toFixed(1)} km
                </p>
              </div>

              {/* Fare Breakdown */}
              <div className="border-t border-primary-200 pt-3 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Base Fare:</span>
                  <span className="font-semibold text-gray-900">
                    ₹{PRICING_PER_KM[vehicleType as keyof typeof PRICING_PER_KM]} × {distance.toFixed(1)} km
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Base Amount:</span>
                  <span className="font-semibold text-gray-900">
                    ₹{Math.round(distance * PRICING_PER_KM[vehicleType as keyof typeof PRICING_PER_KM])}
                  </span>
                </div>
                
                {isAirportDrop && (
                  <div className="flex justify-between items-center text-sm bg-yellow-50 p-2 rounded-lg border border-yellow-200">
                    <div className="flex items-center space-x-2">
                      <Plane size={16} className="text-yellow-600" />
                      <span className="text-gray-700">Airport Toll Charge:</span>
                    </div>
                    <span className="font-semibold text-yellow-700">
                      ₹{AIRPORT_TOLL_CHARGE}
                    </span>
                  </div>
                )}
              </div>

              {/* Total Fare */}
              <div className="border-t-2 border-primary-300 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold text-lg">Total Fare:</span>
                  <span className="text-4xl font-heading font-bold text-primary-700">
                    ₹{estimatedPrice}
                  </span>
                </div>
              </div>

              {isAirportDrop && (
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-700 text-center">
                    ✈️ Airport drop detected: Toll charges included
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-2">
                *Final fare may vary based on route and traffic
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
