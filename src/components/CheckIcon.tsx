import { FaCheck } from "react-icons/fa";

interface CheckIconProps {
  className?: string;
}

export default function CheckIcon({ className }: CheckIconProps) {
  return <FaCheck className={className} />;
}
