import { Link } from "react-router-dom";
import "./buttonWhite.scss"

interface ButtonProps{
  text: string;
  widthButton?: number;
}

export function ButtonWhite({ text, widthButton }: ButtonProps) {
  const style = {
    width: widthButton
  } 

  return (
    <Link to="/">
      <button type="submit" className="white-btn" style={style}>{text}</button>
    </Link> 
  )
}