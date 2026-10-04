import { Tilt } from "react-tilt";

import { useIsTouch } from "../../utils/hooks";

type SmoothTiltProps = {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
};

// Subtle tilt on mouse devices; plain container on touch screens (tilt there just feels jumpy)
export const SmoothTilt = ({ children, className, max = 12, scale = 1.02 }: SmoothTiltProps) => {
  const isTouch = useIsTouch();

  if (isTouch) return <div className={className}>{children}</div>;

  return (
    <Tilt
      options={{ max, scale, speed: 600, transition: true, easing: "cubic-bezier(.22,1,.36,1)" }}
      className={className}
    >
      {children}
    </Tilt>
  );
};
