import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className=" absolute w-full flex justify-between items-center bg-transparent  h-[80px] z-10 shadow-lg px-4">
      <img
        src="/images/logo.svg"
        alt="Logo"
        className=" h-[55%] md:h-[80%] aspect-video"
      />

      <ul className="flex items-center gap-4">
        <li className="jura">
          <Link to={"/"}>HOME</Link>
        </li>
        <li className="jura">
          <Link to={"about"}>ABOUT</Link>
        </li>
        <li className="jura">
          <Link to={"contact"}>CONTACT</Link>
        </li>
        <li className="jura">
          <Link to={"/"}>LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
