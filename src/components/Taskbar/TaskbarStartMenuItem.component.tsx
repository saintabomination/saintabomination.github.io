type TaskbarStartMenuItem = {
  icon: string;
  // eslint-disable-next-line
  handler: () => any;
  children: React.ReactNode;
};

const TaskbarStartMenuItem = ({ icon, handler, children }: TaskbarStartMenuItem): JSX.Element =>
  (
    <div className="start-menu-item" onClick={() => handler()}>
      <img className="item-icon" src={icon} alt="Item Icon" />
      <p className="item-text">{children}</p>
    </div>
  );

export default TaskbarStartMenuItem;
