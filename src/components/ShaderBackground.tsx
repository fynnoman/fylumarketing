'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the shader gradient to avoid SSR issues
const ShaderGradientCanvas = dynamic(
  () => import('@shadergradient/react').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);

const ShaderGradient = dynamic(
  () => import('@shadergradient/react').then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export default function ShaderBackground() {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Suspense fallback={<div style={{ background: 'linear-gradient(135deg, #5964ff 0%, #68d9fe 50%, #fcf9fb 100%)', width: '100%', height: '100%' }} />}>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            inset: 0,
          }}
          pixelDensity={1}
          fov={45}
        >
          <ShaderGradient
            control='props'
            animate='on'
            type='waterPlane'
            shader='defaults'
            bgColor1='#000000'
            bgColor2='#000000'
            color1='#5964ff'
            color2='#68d9fe'
            color3='#fcf9fb'
            uSpeed={0.1}
            uStrength={2.4}
            uDensity={1.1}
            uFrequency={5.5}
            uAmplitude={0}
            uTime={0.2}
            cDistance={13.99}
            cPolarAngle={115}
            cAzimuthAngle={180}
            cameraZoom={1}
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            rotationX={0}
            rotationY={0}
            rotationZ={235}
            lightType='3d'
            brightness={1.1}
            reflection={0.1}
            envPreset='city'
            grain='off'
            wireframe={false}
            range='disabled'
            rangeStart={0}
            rangeEnd={40}
            zoomOut={false}
          />
        </ShaderGradientCanvas>
      </Suspense>
    </div>
  );
}
