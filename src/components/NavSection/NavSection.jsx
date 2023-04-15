import "./NavSection.css";
import { useNavigate } from "react-router";
import SVG from "../../assets/iconos/back-yellow.svg"

const NavSection = ({ title }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="nav-section-container">
      <img src={SVG} onClick={goBack}/>
      <div className="nav-section-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default NavSection;
