export default function NavBar({ isMobile, closeMenu }) {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <ul
      className={`text-2xl font-bold duration-200 ${
        isMobile ? "flex flex-col items-center" : "flex justify-between w-full"
      }`}
    >
      <li
        className="m-4 cursor-pointer hover:text-cyan-400"
        onClick={() => handleScroll("operative")}
      >
        Operative
      </li>
      <li
        className="m-4 cursor-pointer hover:text-cyan-400"
        onClick={() => handleScroll("crown")}
      >
        Crown
      </li>
      <li
        className="m-4 cursor-pointer hover:text-cyan-400"
        onClick={() => handleScroll("pros")}
      >
        Prosthesis
      </li>
      <li
        className="m-4 cursor-pointer hover:text-cyan-400"
        onClick={() => handleScroll("endo")}
      >
        Endodontics
      </li>
    </ul>
  );
}
