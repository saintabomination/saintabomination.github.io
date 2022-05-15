type WindowTitlebarProps = {
  text: string;
  inactive?: boolean;
  children: React.ReactNode;
};

const WindowTitlebar = ({ text, inactive, children }: WindowTitlebarProps): JSX.Element =>
  (
    <div className={`titlebar-wrap ${inactive ? 'inactive' : 'blue'}-gradient`}>
      {text ? <p className="titlebar-title">{text}</p> : null}
      {children}
    </div>
  );

WindowTitlebar.displayName = 'WindowTitlebar';

export default WindowTitlebar;
