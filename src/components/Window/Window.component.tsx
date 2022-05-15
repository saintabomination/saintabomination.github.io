import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';

import WindowTitlebar from './WindowTitlebar.component';
import WindowButtonComponent from './WindowButton.component';

import { WindowType } from '../../types/windowTypes';
import desktopActions from '../../redux/actions/desktopActions';

type WindowProps = {
  windowData: WindowType;
};

const Window = ({ windowData }: WindowProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Draggable>
      <div
        className="window-wrap"
      >
        <WindowTitlebar text={windowData.title ?? 'Window'}>
          {windowData.controls ? (
            <div className="titlebar-controls">
              <WindowButtonComponent text="_" />
              <WindowButtonComponent text="X" onClick={() => {
                dispatch({
                  type: desktopActions.CLOSE_WINDOW,
                  payload: {
                    id: windowData.id,
                  },
                });
              }} />
            </div>
          ) : null}
        </WindowTitlebar>
        <div className="window-content">
          This page is WIP.
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
