import { WindowType } from '../../types/windowTypes';
import desktopActions from '../actions/desktopActions';

interface InitialStateDefaultObject {
  allWindows: WindowType[];
  isStartMenuOpen: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  allWindows: [
    { id: '0', title: 'Welcome!', controls: true, x: 40, y: 40 },
    { id: '1', title: 'Welcome!', controls: true, x: 120, y: 120 },
  ],
  isStartMenuOpen: false,
};

const desktopReducer = (state = INITIAL_STATE, action: { type: string, payload: { id: string, x: number, y: number } }) => {
  switch (action.type) {
    case desktopActions.TOGGLE_START_MENU:
      return {
        ...state,
        isStartMenuOpen: !state.isStartMenuOpen,
      };

    case desktopActions.ADD_TO_WINDOW_POS:
      return {
        ...state,
        allWindows: state.allWindows.map(
          currentWindow =>
          currentWindow.id === action.payload.id ?
            {
              ...currentWindow,
              x: currentWindow.x + action.payload.x,
              y: currentWindow.y + action.payload.y,
            } : currentWindow
        )
      };

    default:
      return state;
  }
}

export default desktopReducer;
