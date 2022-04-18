import WindowTitlebar from './WindowTitlebar.component';
import WindowButtonComponent from './WindowButton.component';

import { WindowType } from '../../types/windowTypes';

type WindowProps = {
  windowData: WindowType;
};

const Window = ({ windowData }: WindowProps): JSX.Element =>
  (
    <div className="window-wrap">
      <WindowTitlebar text={windowData.title ?? 'Window'}>
        {windowData.controls ? (
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
