import { AppBar } from "../../../../components/appBar/AppBar"
import PageContainer from "../../../../components/PageContainer"
import { ProcessDescriptionHeader } from "../../../../components/header/ProccessDescriptionHeader"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"

import "./cardSolicitar.scss"
import logo from "../../../../_assets/card-logo.svg"
import cardLogo from "../../../../_assets/card-visa.png"
import cardCircuits from "../../../../_assets/card-circuits.svg"
import Button from "../../../../components/buttons/Button"
import { Link } from "react-router-dom"

export const CardSolicitar = () => {
  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar/>}
        header={
          <ProcessDescriptionHeader
            subtitle = "Peça o seu cartão"
          />
        }
        main={
          <div id="card">
            <img src={cardCircuits} alt="circuitos" className="img card-circuits"/>
            <img src={cardLogo} alt="Visa" className="img card-visa"/>
            <img src={logo} alt="Logo Genyus" className="img card-logo"/>
            <div className="card-font client-data">
              <p>xxxx xxxx xxxx xxxx</p>
              <div className="card-font client-date-data">
                <span>Validade</span>
                <p>XX/XX</p>
              </div>

              <p>xxxxxx xxxxxx xxxxxx</p>
            </div>
          </div>
        }
        footer={
          <div className="button-card">
              <Link to="/card-address"> 
                <Button text="Pedir"/>
              </Link>
          </div>
        }
      />
    </PageContainer>
  )
}