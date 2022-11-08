import "./balance.scss"
import visible from "../../../../_assets/show-balance.png"

export const Balance = () => {
  return (
    <div id="balance-container">
      <p>Olá, Marlon Mendes</p>
      <p className="text-saldo">Seu saldo</p>
      <div>
        <p className="saldo">
          <span>R$</span>
          728.986,34
        </p>
        <button>
          <img src={visible} alt="esconder saldo" />
          Esconder <br />saldo
        </button>
      </div>
      <div className="btn-position">
        <button className="extract">Extrato</button>
      </div>
    </div>
  )
}