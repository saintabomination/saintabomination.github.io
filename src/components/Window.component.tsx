import Titlebar from './Titlebar.component';

const Window = (): JSX.Element =>
  (
    <div className="window-wrap">
      <Titlebar />
      <div className="window-content">
        This page is WIP.
      </div>
    </div>
  );

export default Window;
