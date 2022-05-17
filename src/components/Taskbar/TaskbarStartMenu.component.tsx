import { useDispatch } from 'react-redux';

import TaskbarStartMenuItem from './TaskbarStartMenuItem.component';

import desktopActions from '../../redux/actions/desktopActions';

import MemoryIcon from '../../assets/memory-icon.png';
import DefragmentationIcon from '../../assets/defragmentation-icon.png';
import PrinterIcon from '../../assets/printer-icon.png';
import ComputerIcon from '../../assets/computer-icon.png';
import TextIcon from '../../assets/text-icon.png';
import TreeIcon from '../../assets/tree-icon.png';
import NetworkIcon from '../../assets/network-icon.png';

const TaskbarStartMenu = (): JSX.Element => {
  const dispatch = useDispatch();

  const clickHandler = () => {
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
        <TaskbarStartMenuItem icon={MemoryIcon} handler={clickHandler}>About me</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={DefragmentationIcon} handler={clickHandler}>My work</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={PrinterIcon} handler={clickHandler}>Services</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={ComputerIcon} handler={clickHandler}>Technologies</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={TextIcon} handler={clickHandler}>Testimonials</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={TreeIcon} handler={clickHandler}>Minesweeper</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={NetworkIcon} handler={clickHandler}>Contact</TaskbarStartMenuItem>
      </div>
    </div>
  );
}

export default TaskbarStartMenu;
