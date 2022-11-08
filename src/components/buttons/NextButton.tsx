import "./buttons.scss"
import arrowRight from "../../_assets/arrow-right.svg"

export const NextButton = () => {
  return (
    <button type="submit" className="btn buttons">Próximo <img src={arrowRight} alt="seta diereita" /></button>
  )
}