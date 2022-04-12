import Desktop from './components/Desktop.component';
import Taskbar from './components/Taskbar.component';
import Window from './components/Window.component';

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
