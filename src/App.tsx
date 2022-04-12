import Desktop from './components/Desktop.component';
import Taskbar from './components/Taskbar.component';

const App = (): JSX.Element =>
  (
    <div>
      <Desktop>
        <Taskbar />
      </Desktop>
    </div>
  );

export default App;
