import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, Suspense, useState } from "react";
import type { Points as PointsType } from "three";

// Stars
const Stars = ({ count }: { count: number }) => {
  const ref = useRef<PointsType | null>(null);
  // For each star (x, y, z per point)
  const [sphere] = useState(
    () => random.inSphere(new Float32Array(count * 3), { radius: 1.2 }) as Float32Array,
  );

  // Rotate multiple stars
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points */}
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        {/* Each point material */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Stars Canvas
const StarsCanvas = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        {/* Show stars if not fallback */}
        <Suspense fallback={null}>
          <Stars count={isMobile ? 1200 : 2000} />
        </Suspense>

        {/* preload all */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
