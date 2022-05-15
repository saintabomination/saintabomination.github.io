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

    case desktopActions.OPEN_WINDOW:
      return {
        ...state,
        allWindows: [
          ...state.allWindows,
          {
            id: String(Math.floor(Math.random() * 1000)),
            title: (action.payload.title ? `Window ${Math.floor(Math.random() * 1000)}` : 'a'),
            controls: true,
          },
        ],
      };

    default:
      return state;
  }
}

export default desktopReducer;
