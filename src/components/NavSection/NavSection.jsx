import "./NavSection.css";
import { useNavigate } from "react-router";
import SVG from "../../assets/iconos/back-yellow.svg"

const NavSection = ({ title, category }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className={`nav-section-container ${category && `nav-section-container-${category}`}`}>
      <img src={SVG} onClick={goBack}/>
      <div className="nav-section-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default NavSection;
