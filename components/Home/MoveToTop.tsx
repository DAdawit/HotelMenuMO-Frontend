import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
const MoveToTop = () => {
  return (
    <Link
      href="#Nav"
      className="flex items-center justify-center flex-col w-14 h-14 rounded-full fixed bottom-7 right-4 bg-bgButton text-white"
    >
      <ArrowUpwardIcon />
    </Link>
  );
};

export default MoveToTop;
