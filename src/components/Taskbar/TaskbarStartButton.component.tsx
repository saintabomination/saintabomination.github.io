import WinLogo from '../../assets/win-logo.png';

const TaskbarStartButton = (): JSX.Element =>
  (
    <div className="start-button no-select">
      <img className="button-logo" src={WinLogo} alt="Windows 98 Logo" />
      <p className="button-text">Start</p>
    </div>
  );

export default TaskbarStartButton;
