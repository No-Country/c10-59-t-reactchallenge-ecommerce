import "../helpers/helper.css";
import check from "../../assets/iconos/icon-check-green.svg";
import { Link } from "react-router-dom";

const CardEncantado = () => {
  return (
    <div className="Card__done">
      <img className="verified" src={check} alt="Check" />{" "}
      <p className="card__p">
        <span>¡Encantado de</span> <br /> conocerte¡
      </p>
      <button className="btn__card">
        <Link to="/">INICIO</Link>
      </button>
    </div>
  );
};

export default CardEncantado;
