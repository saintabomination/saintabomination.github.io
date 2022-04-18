import WindowTitlebar from './WindowTitlebar.component';
import WindowButtonComponent from './WindowButton.component';

type WindowProps = {
  controls?: boolean;
};

const Window = ({ controls = true }: WindowProps): JSX.Element =>
  (
    <div className="window-wrap">
      <WindowTitlebar>
        {controls ? (
          <div className="titlebar-controls">
            <WindowButtonComponent text="_" />
            <WindowButtonComponent text="X" />
          </div>
        ) : null}
      </WindowTitlebar>
      <div className="window-content">
        This page is WIP.
      </div>
    </div>
  );

export default Window;
