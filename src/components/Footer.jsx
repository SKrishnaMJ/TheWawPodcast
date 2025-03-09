import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://open.spotify.com/show/0TQuBhXjUOWEiEt3oFpDLO", icon: <FaSpotify /> },
  { href: "https://instagram.com/thewawpodcast", icon: <FaInstagram /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © TheWaWPodcast 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-light hover:underline md:text-right"
        >
          Last Updated: 3/9/25 4:59AM CST
        </a>

      </div>
    </footer>
  );
};

export default Footer;
