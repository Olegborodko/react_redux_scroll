const currentItemReducer = (state = {}, action) => {

  console.log('action ==>', action);

  if (action.type === 'CURRENT_ITEM_CHANGE') {
    return {
      id: action.id,
      topText: action.topText,
      bottomText: action.bottomText,
    };
  }

  return state;
};

export default currentItemReducer;