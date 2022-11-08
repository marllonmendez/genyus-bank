import whitePersonImg from "../../_assets/person-white.svg"
import configImg from "../../_assets/config-icon.svg"
import "./homeBar.scss"

export const HomeBar = () => {
  return (
    <div id="container">
      <img src={whitePersonImg} alt="perfil" className="perfil"/>
      <img src={configImg} alt="perfil" className="config"/>
    </div>
  )
}