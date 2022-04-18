import ItemIcon from '../../assets/menu-item-icon.png';

type TaskbarStartMenuItem = {
  // eslint-disable-next-line
  handler: () => any;
  children: React.ReactNode;
};

const TaskbarStartMenuItem = ({ handler, children }: TaskbarStartMenuItem): JSX.Element =>
  (
    <div className="start-menu-item" onClick={() => handler()}>
      <img className="item-icon" src={ItemIcon} alt="Item Icon" />
      <p className="item-text">{children}</p>
    </div>
  );

export default TaskbarStartMenuItem;
