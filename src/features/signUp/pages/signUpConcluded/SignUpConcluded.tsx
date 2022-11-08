import { AppBar } from "../../../../components/appBar/AppBar";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";

import "./signUpConcluded.scss";

export function SignUpConcluded() {
  return (
    <PageContainer>
      <ProcessPageLayout 
        appBar={<AppBar />}
        header={''}
        main={
          <div className="text-concluded">
            <p>Parabéns, sua conta Genyus foi aberta. Para mais detalhes acesse o seu e-mail.</p>
            <p>Ao clicar no botão <strong>Fechar</strong> você voltara para a página de login e já pode começar a mexer na sua conta, basta colocar seu <strong>CPF</strong> e <strong>SENHA</strong> informados anteriormente.</p>
          </div>
        }
        footer={''}
      />
    </PageContainer>
  )
}