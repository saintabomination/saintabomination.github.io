import Desktop from './components/Desktop.component';
import Taskbar from './components/Taskbar/Taskbar.component';
import Window from './components/Window/Window.component';

const App = (): JSX.Element =>
  (
    <div>
      <Desktop>
        <Taskbar />
        <Window />
      </Desktop>
    </div>
  );

export default App;
