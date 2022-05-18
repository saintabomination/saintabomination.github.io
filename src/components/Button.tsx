type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps): JSX.Element =>
  (
    <button className="button light-border pressable">
      {children}
    </button>
  );

export default Button;
