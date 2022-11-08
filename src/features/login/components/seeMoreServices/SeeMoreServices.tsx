import "./seeMoreServices.scss"
import arrowDown from "../../../../_assets/arrow-down.svg"

export function SeeMoreServices() {
  return (
    <div>
      <button type="button" className="see-more">
        <img src={arrowDown} alt="Seta para baixo" />
        Ver mais
      </button>
    </div>
  )
}