import { AppBar } from "../../../../components/appBar/AppBar";
import { BackButton } from "../../../../components/buttons/BackButton";
import { NextButton } from "../../../../components/buttons/NextButton";
import PageContainer from "../../../../components/PageContainer"
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import ProcessPageLayout from "../../../../components/ProcessPageLayout"
import './cardAddress.scss';

function CardAddress() {
  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar />}
        main={
          <div>
            <div className="address-section">
              <div className="card-deliver">
                <h1>Para onde o cartão será entregue?</h1>
                <input className="input-address" type="text" placeholder="R. Verde 44, 97 Jangurussu, Fortaleza - Ce" />
              </div>
              <div className="card-passwd">
                <h1>Crie uma senha para seu cartão</h1>
                <input className="input-passwd" type="password" maxLength={4} />
              </div>
              <div className="card-personalize">
                <h1>Deseja personalizar seu cartão?</h1>
                <div className="radio">
                  <div>
                    <input type="radio" name="radio-btn" id="btn-yes" />
                    <label htmlFor="btn-yes">Sim</label>
                  </div>
                  <div>
                    <input type="radio" name="radio-btn" id="btn-no" />
                    <label htmlFor="btn-no">Não</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-img">
              <button>Escolha uma imagem</button>
            </div>
          </div>
        }
        footer={
          <ProcessPageFooter buttonNext={<NextButton />} buttonBack={<BackButton />} />
        } />
    </PageContainer>
  )
};

export default CardAddress;