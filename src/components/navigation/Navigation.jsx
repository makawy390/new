import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { BsJournalBookmarkFill } from "react-icons/bs";
import "./nav.css";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="list-navigation">
        <li>
          <NavLink to="/">
            <AiTwotoneHome />
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/about">
            <FaCircleUser />
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/skills">
            <BsJournalBookmarkFill />
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/portfolio">
            <BiSolidContact />
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/contact">
            <FcContacts />
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
