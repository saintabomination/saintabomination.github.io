import desktopActions from '../actions/desktopActions';

interface InitialStateDefaultObject {
  isStartMenuOpen: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
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
