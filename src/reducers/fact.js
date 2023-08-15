const factReducer = (state = {}, action) => {

  if (action.type === 'FACT_SUCCESS' || action.type === 'FACT_ERROR') {
    return action.data;
  }

  return state;
};

export default factReducer;