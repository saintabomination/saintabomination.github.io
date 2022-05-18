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

  const openAboutMe = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'About me',
      },
    });
  }

  const openMywork = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'My work',
      },
    });
  }

  const openServices = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'Services',
      },
    });
  }

  const openTechnologies = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'Technologies',
      },
    });
  }

  const openTestimonials = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'Testimonials',
      },
    });
  }

  const openMinesweeper = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'Minesweeper',
      },
    });
  }

  const openContact = () => {
    dispatch({
      type: desktopActions.TOGGLE_START_MENU,
    });
    dispatch({
      type: desktopActions.OPEN_WINDOW,
      payload: {
        title: 'Contact',
      },
    });
  }

  return (
    <div className="start-menu light-border">
      <div className="blue-part start-menu-gradient">
        <p className="part-text no-select">SaintAbomination</p>
      </div>
      <div className="content-part">
        <TaskbarStartMenuItem icon={MemoryIcon} handler={openAboutMe}>About me</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={DefragmentationIcon} handler={openMywork}>My work</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={PrinterIcon} handler={openServices}>Services</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={ComputerIcon} handler={openTechnologies}>Technologies</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={TextIcon} handler={openTestimonials}>Testimonials</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={TreeIcon} handler={openMinesweeper}>Minesweeper</TaskbarStartMenuItem>
        <TaskbarStartMenuItem icon={NetworkIcon} handler={openContact}>Contact</TaskbarStartMenuItem>
      </div>
    </div>
  );
}

export default TaskbarStartMenu;
