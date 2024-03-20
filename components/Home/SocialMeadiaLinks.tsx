import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialMeadiaLinks = () => {
  return (
    <div className="flex justify-center gap-1 opacity-100 z-50">
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <FacebookIcon />
      </div>
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <LinkedInIcon />
      </div>
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <TwitterIcon />
      </div>
      <div className="p-3 bg-black hover:bg-[#5d4314] text-white opacity-100">
        <WhatsAppIcon />
      </div>
    </div>
  );
};

export default SocialMeadiaLinks;
