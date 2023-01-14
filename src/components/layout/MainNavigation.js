import Logo from "../../assets/shared/logo.svg";
import burgerIcon from "../../assets/shared/icon-hamburger.svg";

const MainNavigation = function () {
  return (
    <header>
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>

      <nav>
        <button>
          <img src={burgerIcon} alt="" />
        </button>

        <ul>
          <li>
            <a href="#">
              <span>00</span> Home
            </a>
          </li>

          <li>
            <a href="#">
              <span>01</span> Destination
            </a>
          </li>

          <li>
            <a href="#">
              <span>02</span> Crew
            </a>
          </li>

          <li>
            <a href="#">
              <span>03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
