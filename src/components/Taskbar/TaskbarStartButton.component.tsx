import { useDispatch } from 'react-redux';

import WinLogo from '../../assets/win-logo.png';

import desktopActions from '../../redux/actions/desktopActions';

const TaskbarStartButton = (): JSX.Element => {
  const dispatch = useDispatch();
  
  return (
    <div
      className="light-border pressable start-button no-select"
      onClick= {() => {
        dispatch({
          type: desktopActions.TOGGLE_START_MENU,
        })
      }}
    >
      <img className="button-logo" src={WinLogo} alt="Windows 98 Logo" />
      <p className="button-text">Start</p>
    </div>
  );
}

export default TaskbarStartButton;
