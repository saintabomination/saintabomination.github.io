import { WindowType } from '../../types/windowTypes';
import desktopActions from '../actions/desktopActions';

interface InitialStateDefaultObject {
  allWindows: WindowType[];
  isStartMenuOpen: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  allWindows: [
    { id: '0', title: 'Welcome!', controls: true, x: 40, y: 40 },
    { id: '0', title: 'Welcome!', controls: true, x: 120, y: 120 },
  ],
  isStartMenuOpen: false,
};

const desktopReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    case desktopActions.TOGGLE_START_MENU:
      return {
        ...state,
        isStartMenuOpen: !state.isStartMenuOpen,
      };

    default:
      return state;
  }
}

export default desktopReducer;
