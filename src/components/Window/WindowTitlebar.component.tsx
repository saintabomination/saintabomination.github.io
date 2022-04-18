type WindowTitlebarProps = {
  text?: string;
  children: React.ReactNode;
};

const WindowTitlebar = ({ text, children }: WindowTitlebarProps): JSX.Element =>
  (
    <div className="titlebar-wrap blue-gradient">
      {text ? <p className="titlebar-title">{text}</p> : null}
      {children}
    </div>
  );

export default WindowTitlebar;
