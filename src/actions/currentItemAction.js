export const currentItemAction = (id, topText, bottomText) => {
  let result = (dispatch) => {
    dispatch({
      type: 'CURRENT_ITEM_CHANGE',
      id,
      topText,
      bottomText
    });
  }

  return result;
}