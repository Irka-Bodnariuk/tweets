import { Btn } from "./Button.styled";

const Button = ({ children, onClick, follow }) => {
  return (
    <Btn type="button" onClick={onClick} follow={follow}>
      {children}
    </Btn>
  );
};

export default Button;
