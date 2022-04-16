interface InitialStateDefaultObject {
  isStartMenuOpen: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  isStartMenuOpen: false,
};

const desktopReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default desktopReducer;
