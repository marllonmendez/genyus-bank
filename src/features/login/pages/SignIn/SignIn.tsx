import { AppBar } from "../../../../components/appBar/AppBar";
import { ProcessDescriptionHeader } from "../../../../components/header/ProccessDescriptionHeader";
import PageContainer from "../../../../components/PageContainer";
import ProcessPageLayout from "../../../../components/ProcessPageLayout";
import { Greetings } from "../../components/greetings/Greetings";
import Button from "../../../../components/buttons/Button";
import ProcessPageFooter from "../../../../components/ProcessPageFooter";
import { FooterLinks } from "../../components/FooterLinks";

import "./signIn.scss"
import { images } from "../../constants/images"

import InputMask from "react-input-mask";


function SignIn() {
  return (
    <div>
      <PageContainer>
        <ProcessPageLayout
          appBar={<AppBar arg={false}/>}
          header={
            <ProcessDescriptionHeader component={<Greetings />}/>
          }
          main={
            <form action="/home">
              <div className="cpf-container">
                <label htmlFor="input-cpf">CPF</label>
                <div>
                  <img src={images.person} alt="perfil" />
                  <InputMask
                    mask="999.999.999-99"
                    placeholder="000-000-000.00"
                    required
                    name="cpf"
                  />
                   
                  <img src={images.confirmed} alt="ok" />
                </div>
              </div>
              <div className="password-container">
                <label htmlFor="input-password">Senha</label>
                <div>
                  <img src={images.lock} alt="senha" />
                  <input 
                    placeholder="Sua senha" 
                    type="password" 
                    name="password" 
                    id="input-password"
                    required
                  />
                  <img src={images.visible} alt="visivel" />
                </div>
              </div>
              
              <div className="lembre-de-mim">
                <p>Lembre de mim</p>
                <ul className="tg-list">
                  <li className="tg-list-item">
                    <input type="checkbox" defaultChecked id="cb4" className="tgl tgl-flat" />
                    <label htmlFor="cb4" className="tgl-btn"></label>
                  </li>
                </ul>
              </div>

              <div>
                <Button text="Entrar" widthButton={288}/>
              </div>
            </form>
          }
          footer={
            <ProcessPageFooter>
              <FooterLinks />
            </ProcessPageFooter> 
          }
        />
      </PageContainer>
    
    </div>
    )
  }
  
  export default SignIn;