import { useState, useEffect } from 'react';

import TaskbarStartButton from './TaskbarStartButton.component';
import TaskbarModule from './TaskbarModule.component';

const Taskbar = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="taskbar-wrap">
      <TaskbarStartButton />
      <TaskbarModule>
        {currentTime.getHours()}:{currentTime.getMinutes()}
      </TaskbarModule>
    </div>
  );
}


export default Taskbar;
