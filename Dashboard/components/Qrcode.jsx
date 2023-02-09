import React from 'react';
import { useQRCode } from 'next-qrcode';

function Qrcode() {
  const { Canvas } = useQRCode();

  return (
    <div style={{float:"right"}}>
    <Canvas
      text={'https://mano-portfolio.vercel.app'}
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />
    </div>
  );
}

export default Qrcode;