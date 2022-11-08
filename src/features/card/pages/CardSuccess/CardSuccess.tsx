import PageContainer from "../../../../components/PageContainer"
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import card from "../../../../_assets/card-white.svg"
import "./cardSuccess.scss"

export const CardSuccess = () => {
  return (
    <PageContainer>
      <ProcessPageLayout 
        main={
          <div className="cardSuccess-container" >
            <img src={card} alt="cartão branco" />
            <h1>Sucesso!</h1>
            <h2>Cartão Solicitado</h2>
            <button className="btn-success">OK</button>
          </div>
        }
      />
    </PageContainer>
  )
}