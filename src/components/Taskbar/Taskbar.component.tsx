import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TaskbarStartButton from './TaskbarStartButton.component';
import TaskbarStartMenu from './TaskbarStartMenu.component';
import TaskbarModule from './TaskbarModule.component';

import { RootState } from '../../redux/rootReducer';

const Taskbar = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { isStartMenuOpen } = useSelector((state: RootState) => state.desktop);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="taskbar-wrap">
      <TaskbarStartButton />
      {isStartMenuOpen ? <TaskbarStartMenu /> : null}
      <TaskbarModule>
        {String(currentTime.getHours()).padStart(2, '0')}:{String(currentTime.getMinutes()).padStart(2, '0')}
      </TaskbarModule>
    </div>
  );
}


export default Taskbar;
