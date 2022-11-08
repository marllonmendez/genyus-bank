import { HomeBar } from "../../../../components/homeBar/HomeBar";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { Balance } from "../../components/balance/Balance";
import { images } from "../../constants/images";
import { SeeMoreServices } from "../../components/seeMoreServices/SeeMoreServices";

import "./homePage.scss";

export const HomePage = () => {
  return (
    <div>
      <PageContainer>
          <ProcessPageLayout 
            appBar={<HomeBar />}
            header={<Balance />}
            main={
              <div id="container-services">
                <div className="card-service tranfers">
                  <img src={images.tranfers} alt="transferência" />
                  <p>Transferência</p>
                </div>
                <div className="card-service recharge">
                  <img src={images.recarga} alt="Recarga" />
                  <p>Recarga</p>
                </div>
                <div className="card-service bank-card">
                  <img src={images.card} alt="Cartão" />
                  <p>Cartão</p>
                </div>
              </div>
            }
            footer={<SeeMoreServices />}
          />
      </PageContainer>
    </div>
  )
}