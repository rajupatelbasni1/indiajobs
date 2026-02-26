import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <a href="https://www.facebook.com/profile.php?id=61557179514637&mibextid=ZbWKwL" target="_blank" className="hover:text-blue-600">
        <FaFacebookF />
      </a>

      <a href="https://www.instagram.com/indiajobs.in" target="_blank" className="hover:text-pink-500">
        <FaInstagram />
      </a>

      <a href="https://whatsapp.com/channel/0029VaQULuy8V0tjaqNf7U1I" target="_blank" className="hover:text-green-500">
        <FaWhatsapp />
      </a>

      <a href="https://t.me/indiajobs_in/" target="_blank" className="hover:text-blue-500">
        <FaTelegramPlane />
      </a>

      <a href="https://youtube.com" target="_blank" className="hover:text-red-600">
        <FaYoutube />
      </a>
    </div>
  );
}