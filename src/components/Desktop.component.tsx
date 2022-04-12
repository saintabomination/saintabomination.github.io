type DesktopProps = {
  children: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps): JSX.Element =>
  (
    <div className="desktop-wrap">
      {children}
    </div>
  );

export default Desktop;
