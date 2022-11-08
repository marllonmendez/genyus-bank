import React from "react"
import "./buttons.scss"
import arrowLeft from "../../_assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const history = useNavigate();

  return (
    <button className="btn buttons" onClick={() => history(-1)}><img src={arrowLeft} alt="seta esquerda" /> Voltar</button>
  )
}