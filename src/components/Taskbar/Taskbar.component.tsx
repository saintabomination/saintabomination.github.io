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
        {String(currentTime.getHours()).padStart(2, '0')}:{String(currentTime.getMinutes()).padStart(2, '0')}
      </TaskbarModule>
    </div>
  );
}


export default Taskbar;
