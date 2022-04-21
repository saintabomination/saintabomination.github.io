import { useDispatch } from 'react-redux';

import TaskbarStartMenuItem from './TaskbarStartMenuItem.component';

import desktopActions from '../../redux/actions/desktopActions';

const TaskbarStartMenu = (): JSX.Element => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    alert('Click!');
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'Window',
      },
    })
  }

  return (
    <div className="start-menu light-border">
      <div className="blue-part start-menu-gradient">
        <p className="part-text no-select">SaintAbomination</p>
      </div>
      <div className="content-part">
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
        <TaskbarStartMenuItem handler={clickHandler}>Menu Item</TaskbarStartMenuItem>
      </div>
    </div>
  );
}

export default TaskbarStartMenu;
