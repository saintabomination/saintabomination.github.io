type WindowButtonComponentProps = {
  text?: string;
  [x:string]: any;
};

const WindowButtonComponent = ({ text, ...otherProps }: WindowButtonComponentProps): JSX.Element =>
  (
    <div className="window-button light-border pressable no-select" {...otherProps}>
      {text}
    </div>
  );

export default WindowButtonComponent;
