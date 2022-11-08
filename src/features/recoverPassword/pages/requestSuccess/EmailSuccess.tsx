import { ButtonWhite } from "../../../../components/buttons/white-button/ButtonWhite"
import PageContainer from "../../../../components/PageContainer"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import doneImg from "../../../../_assets/icon-success.svg"
import "./pageSuccess.scss"

export const EmailSuccess = () => {
  return (
    <PageContainer>
      <ProcessPageLayout 
        appBar={''}
        header={<img src={doneImg} alt="Icone Concluido" className="done-image"/>}
        main={
          <div className="container-success">
            <h3>Senha Alterada</h3>
            <p>para</p>
            <p>ma*******x@*****.com</p>
          </div>
        }
        footer={<ButtonWhite text="Acessar minha conta"/>}
      />
    </PageContainer>
  )
}