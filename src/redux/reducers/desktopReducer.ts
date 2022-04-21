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

type Payload = {
  id: string;
  x?: number;
  y?: number;
};

const desktopReducer = (state = INITIAL_STATE, action: { type: string, payload: Payload }) => {
  switch (action.type) {
    case desktopActions.TOGGLE_START_MENU:
      return {
        ...state,
        isStartMenuOpen: !state.isStartMenuOpen,
      };

    case desktopActions.ADD_TO_WINDOW_POS:
      (action.payload as { id: string, x: number, y: number})

      return {
        ...state,
        allWindows: state.allWindows.map(
          currentWindow =>
          currentWindow.id === action.payload.id ?
            {
              ...currentWindow,
              x: currentWindow.x + (action.payload.x ?? 0),
              y: currentWindow.y + (action.payload.y ?? 0),
            } : currentWindow
        )
      };

    case desktopActions.CLOSE_WINDOW:
      return {
        ...state,
        allWindows: state.allWindows.filter(
          currentWindow =>
          currentWindow.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

export default desktopReducer;
