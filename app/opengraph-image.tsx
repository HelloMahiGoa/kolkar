import { ImageResponse } from 'next/og';

export const alt = 'Kolkar Taxi - Taxi Service in Goa';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #00bcd4 0%, #ff9800 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>🚕</div>
        <div>Kolkar Taxi</div>
        <div style={{ fontSize: 40, marginTop: 20, opacity: 0.9 }}>
          Best Taxi Service in Goa
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
