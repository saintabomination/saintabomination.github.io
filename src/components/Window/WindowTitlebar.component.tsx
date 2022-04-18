type WindowTitlebarProps = {
  children: React.ReactNode;
};

const WindowTitlebar = ({ children }: WindowTitlebarProps): JSX.Element =>
  (
    <div className="titlebar-wrap blue-gradient">
      <p className="titlebar-title">Window</p>
      {children}
    </div>
  );

export default WindowTitlebar;
