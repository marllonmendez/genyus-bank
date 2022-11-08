interface ButtonProps{
  text: string;
  widthButton?: number;
}

function Button({ text, widthButton }: ButtonProps) {
  const style = {
    width: widthButton
  } 
  
  return (
    <button type="submit" id="button" style={style}>{text}</button>
  )
};

export default Button;