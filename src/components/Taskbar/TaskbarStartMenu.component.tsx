import TaskbarStartMenuItem from "./TaskbarStartMenuItem.component";

const TaskbarStartMenu = (): JSX.Element =>
  (
    <div className="start-menu light-border">
      <div className="blue-part start-menu-gradient">
        <p className="part-text no-select">SaintAbomination</p>
      </div>
      <div className="content-part">
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem>Menu Item</TaskbarStartMenuItem>
      </div>
    </div>
  );

export default TaskbarStartMenu;
