import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import WindowTitlebar from './WindowTitlebar.component';
import WindowButtonComponent from './WindowButton.component';

import { WindowType } from '../../types/windowTypes';
import desktopActions from '../../redux/actions/desktopActions';

type WindowProps = {
  windowData: WindowType;
};

const Window = ({ windowData }: WindowProps): JSX.Element => {
  const windowTitlebarRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleDrag = (e: any) => {
    dispatch({
      type: desktopActions.ADD_TO_WINDOW_POS,
      payload: {
        id: windowData.id,
        x: e.movementX,
        y: e.movementY,
      },
    });
  }

  useEffect(() => {
    windowTitlebarRef.current && windowTitlebarRef.current.addEventListener('mousedown', () => {
      windowTitlebarRef.current && windowTitlebarRef.current.addEventListener('mousemove', (e: any) => handleDrag(e));
    });

    document.addEventListener('mouseup', () => {
      windowTitlebarRef.current && windowTitlebarRef.current.removeEventListener('mousemove', handleDrag);
      console.log('a');
    });
  }, []);

  return (
    <div
      className="window-wrap"
      style={{
        left: windowData.x,
        top: windowData.y,
      }}
    >
      <WindowTitlebar text={windowData.title ?? 'Window'} ref={windowTitlebarRef}>
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
}

export default Window;
