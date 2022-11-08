import PageContainer from "../../../../components/PageContainer";
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { AppBar } from "../../../../components/appBar/AppBar";
import { RecoverPasswordHeader } from "../../components/RecoverPasswordHeader";
import { BackButton } from "../../../../components/buttons/BackButton";
import sendImg from "../../../../_assets/password-card.svg"
import { Link } from "react-router-dom";
import "./requestPassword.scss"

export function RequestPassword() {
  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar />}
        header={<RecoverPasswordHeader />}
        main={
          <>
            <h4 className="headings-standard">Solicitar senha temporária</h4>
            <p className="paragraph-standard">Essas são as formas disponíveis para envio da senha temporária.</p>

            <div className="options-container">
              <Link to="não sei por enquanto ">
                <div className="option-box">
                  <p>Receber por SMS</p>
                  <p>(85) 9 9***-**47</p>
                </div>
                <img src={sendImg} alt="escolher essa opção" />
              </Link>
              <Link to="não sei por enquanto">
                <div className="option-box">
                  <p>Receber por E-mail</p>
                  <p>ma*********x@gmail.com</p>
                </div>
                <img src={sendImg} alt="escolher essa opção" />
              </Link>
            </div>
          </>
        }
        footer={
          <ProcessPageFooter buttonBack={<BackButton/>}/>
        }
      />
    </PageContainer>
  )
}