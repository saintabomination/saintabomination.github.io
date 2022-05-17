import { v4 as uuid } from 'uuid';

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
            id: uuid(),
            title: (action.payload.title ?? 'Window'),
            controls: true,
            active: true,
            depth: state.allWindows.length > 0 ? Math.max(...state.allWindows.map(window => window.depth)) + 1 : 0,
          },
        ],
      };
    }

    case desktopActions.SET_WINDOW_ACTIVE: {
      const sortedWindows = state.allWindows.sort((win1, win2) => win1.depth - win2.depth).reverse();
      const maxWindowDepth = sortedWindows[0].depth;

      return {
        ...state,
        isStartMenuOpen: false,
        allWindows: state.allWindows.map(
          (window, index) =>
          window.id === action.payload.id
            ? {
              ...window,
              active: true,
              depth: maxWindowDepth,
            }
            : {
              ...window,
              active: false,
              depth: window.depth > state.allWindows.filter(window => window.id === action.payload.id)[0].depth
                ? state.allWindows[index].depth - 1
                : window.depth
            }
        ),
      };
    }

    default:
      return state;
  }
}

export default desktopReducer;
