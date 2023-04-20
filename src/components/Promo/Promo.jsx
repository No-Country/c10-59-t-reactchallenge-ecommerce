import "./Promo.css";
import promoSVG from "../../assets/iconos/promo-icon.svg";

const Promo = ({ isDetail }) => {
  return (
    <div className={`promo-container ${isDetail && "promo-container-detail"}`} >
        <img src={promoSVG} alt="promo" />
        <span>50%</span>
    </div>
  )
}

export default Promo