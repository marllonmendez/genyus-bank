import { Link } from "react-router-dom"
import "../pages/SignIn/signIn.scss"

export const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="/change-password/CPF">Esqueci minha senha</Link>
      <Link to="/create">Criar conta</Link>
      <Link to="/">Ajuda</Link>
    </div>
  )
}