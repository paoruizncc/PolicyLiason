import { FaRegClock, FaRegFolder, FaRegUserCircle } from "react-icons/fa";

interface BlogMetaProps {
  type: "clock" | "folder" | "user";
  className?: string;
}

export default function BlogMeta({ type, className }: BlogMetaProps) {
  switch (type) {
    case "clock":
      return <FaRegClock className={className} />;
    case "folder":
      return <FaRegFolder className={className} />;
    case "user":
      return <FaRegUserCircle className={className} />;
    default:
      return null;
  }
}
