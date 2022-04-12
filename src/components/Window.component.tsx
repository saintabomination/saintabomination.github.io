import Titlebar from './Titlebar.component';

const Window = (): JSX.Element =>
  (
    <div className="window-wrap">
      <Titlebar />
      <div className="window-content">
        Window
      </div>
    </div>
  );

export default Window;
