type TaskbarModuleProps = {
  children: React.ReactNode;
};

const TaskbarModule = ({ children }: TaskbarModuleProps): JSX.Element =>
  (
    <div className="taskbar-module">
      {children}
    </div>
  );

export default TaskbarModule;
