import { IoRocketOutline, IoPlanetOutline, IoTelescopeOutline } from "react-icons/io5";

interface FeatureIconProps {
  type: "rocket" | "planet" | "telescope";
  className?: string;
}

export default function FeatureIcon({ type, className }: FeatureIconProps) {
  switch (type) {
    case "rocket":
      return <IoRocketOutline className={className} />;
    case "planet":
      return <IoPlanetOutline className={className} />;
    case "telescope":
      return <IoTelescopeOutline className={className} />;
    default:
      return null;
  }
}
