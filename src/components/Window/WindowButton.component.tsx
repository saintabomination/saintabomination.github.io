type WindowButtonComponentProps = {
  text?: string;
};

const WindowButtonComponent = ({ text }: WindowButtonComponentProps): JSX.Element =>
  (
    <div className="window-button light-border pressable no-select">
      {text}
    </div>
  );

export default WindowButtonComponent;
