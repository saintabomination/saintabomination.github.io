import { forwardRef } from 'react';

type WindowTitlebarProps = {
  text: string;
  children: React.ReactNode;
};

const WindowTitlebar = forwardRef<HTMLDivElement, WindowTitlebarProps>((props, ref): JSX.Element =>
  (
    <div className="titlebar-wrap blue-gradient" ref={ref}>
      {props.text ? <p className="titlebar-title">{props.text}</p> : null}
      {props.children}
    </div>
  ));

WindowTitlebar.displayName = 'WindowTitlebar';

export default WindowTitlebar;
