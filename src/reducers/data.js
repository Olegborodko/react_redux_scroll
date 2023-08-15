const dataReducer = (state = {}, action) => {
  if (action.type === 'CURRENT_ITEM_CHANGE') {
    const updatedData = {
      ...state,
      [action.id]: {
        topText: action.topText,
        bottomText: action.bottomText,
      },
    };

    return updatedData;
  }

  return state;
};

export default dataReducer;