import { AppBar } from "../../../../components/appBar/AppBar";
import { BackButton } from "../../../../components/buttons/BackButton";
import { NextButton } from "../../../../components/buttons/NextButton";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { AgreementText } from "../../components/agreementText/AgreementText";

import "./contractPermission.scss"

export function ContractPermission() {
  return (
    <PageContainer>
      <ProcessPageLayout 
        appBar={<AppBar />}
        header={<AgreementText />}
        main={
          <div className="div-input">
            <input type="radio" id="radio-btn"/>
            <label htmlFor="radio-btn">Eu estou de acordo com todos os termos</label>
          </div>
        }
        footer={
          <ProcessPageFooter buttonBack={<BackButton />} buttonNext={<NextButton />} />
        }
      />
    </PageContainer>
  )
}