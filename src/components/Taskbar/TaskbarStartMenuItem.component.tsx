import ItemIcon from '../../assets/menu-item-icon.png';

type TaskbarStartMenuItem = {
  children: React.ReactNode;
};

const TaskbarStartMenuItem = ({ children }: TaskbarStartMenuItem): JSX.Element =>
  (
    <div className="start-menu-item">
      <img className="item-icon" src={ItemIcon} alt="Item Icon" />
      <p className="item-text">{children}</p>
    </div>
  );

export default TaskbarStartMenuItem;
