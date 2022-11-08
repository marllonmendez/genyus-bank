import SignIn from "../../features/login/pages/SignIn/SignIn";
import { SignInRoutes } from "../../features/login/constants/routes";
import { CardRoutes } from "../../features/card/constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardSolicitar } from "../../features/card/pages/CardSolicitar/CardSolicitar";
import CardAddress from "../../features/card/pages/CardEntrega/CardAddress";
import { CardSuccess } from "../../features/card/pages/CardSuccess/CardSuccess";
import { HomePage } from "../../features/login/pages/Home/HomePage";
import { RecoverPasswordRoutes } from "../../features/recoverPassword/constants/routes";
import { ClientCPF } from "../../features/recoverPassword/pages/informCPF/ClientCPF";
import { RequestPassword } from "../../features/recoverPassword/pages/requestPassword/RequestPassword";
import { EmailSuccess } from "../../features/recoverPassword/pages/requestSuccess/EmailSuccess";
import { SMSSuccess } from "../../features/recoverPassword/pages/requestSuccess/SMSSuccess";
import { SignUpRoutes } from "../../features/signUp/constants/routes";
import { CreateAccount } from "../../features/signUp/pages/createAccount/CreateAccount";
import { ContractPermission } from "../../features/signUp/pages/contractTerms/ContractPermission";
import { SignUpConcluded } from "../../features/signUp/pages/signUpConcluded/SignUpConcluded";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={SignInRoutes.signIn}
          element={<SignIn />}
        />

        <Route
          path={SignInRoutes.homePage}
          element={<HomePage />}
        />


        <Route
          path={CardRoutes.card}
          element={<CardSolicitar />}
        />

        <Route
          path={CardRoutes.cardDeliver}
          element={<CardAddress />}
        />
        <Route
          path={CardRoutes.cardDeliverSuccess}
          element={<CardSuccess />}
        />
        <Route
          path={CardRoutes.cardDeliverSuccess}
          element={<CardSuccess />}
        />


        <Route
          path={RecoverPasswordRoutes.clientCPF}
          element={<ClientCPF />}
        /> 
        <Route
          path={RecoverPasswordRoutes.requestPassword}
          element={<RequestPassword />}
        /> 
        <Route
          path={RecoverPasswordRoutes.requestSuccessSMS}
          element={<SMSSuccess />}
          />
        <Route
          path={RecoverPasswordRoutes.requestSuccessEmail}
          element={<EmailSuccess />}
        />

        <Route
          path={SignUpRoutes.createAccount}
          element={<CreateAccount />}
        />
        <Route
          path={SignUpRoutes.clientPermission}
          element={<ContractPermission />}
        />
        <Route
          path={SignUpRoutes.accountConcluded}
          element={<SignUpConcluded />}
        />
      </Routes>
    </BrowserRouter>
  )
}