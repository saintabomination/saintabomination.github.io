import { useSelector } from 'react-redux';

import Desktop from './components/Desktop.component';
import Taskbar from './components/Taskbar/Taskbar.component';
import Window from './components/Window/Window.component';

import { RootState } from './redux/rootReducer';

const App = (): JSX.Element => {
  const { allWindows } = useSelector((state: RootState) => state.desktop);

  return (
    <div>
      <Desktop>
        <Taskbar />
        {allWindows ? allWindows.map(
          currentWindow =>
          <Window key={currentWindow.id} windowData={currentWindow} />
        ) : null}
      </Desktop>
    </div>
  );
}

export default App;
