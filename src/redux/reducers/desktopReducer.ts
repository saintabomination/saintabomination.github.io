import { WindowType } from '../../types/windowTypes';
import desktopActions from '../actions/desktopActions';

interface InitialStateDefaultObject {
  allWindows: WindowType[];
  isStartMenuOpen: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  allWindows: [],
  isStartMenuOpen: false,
};

type Payload = {
  id: string;
  title?: string;
};

const desktopReducer = (state = INITIAL_STATE, action: { type: string, payload: Payload }) => {
  switch (action.type) {
    case desktopActions.TOGGLE_START_MENU:
      return {
        ...state,
        isStartMenuOpen: !state.isStartMenuOpen,
      };

    case desktopActions.CLOSE_WINDOW:
      return {
        ...state,
        allWindows: state.allWindows.filter(
          currentWindow =>
          currentWindow.id !== action.payload.id
        ),
      };

    case desktopActions.OPEN_WINDOW: {
      const newWindows = state.allWindows.map(window => { return { ...window, active: false } });

      return {
        ...state,
        allWindows: [
          ...newWindows,
          {
            id: String(Math.floor(Math.random() * 1000)),
            title: (action.payload.title ? `Window ${Math.floor(Math.random() * 1000)}` : 'a'),
            controls: true,
            active: true,
          },
        ],
      };
    }

    case desktopActions.SET_WINDOW_ACTIVE:
      return {
        ...state,
        allWindows: state.allWindows.map(
          window =>
          window.id === action.payload.id
            ? { ...window, active: true }
            : { ...window, active: false }
        ),
      };

    default:
      return state;
  }
}

export default desktopReducer;
