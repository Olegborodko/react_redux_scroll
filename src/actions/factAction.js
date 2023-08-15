const factSuccess = (result) => ({
  type: 'FACT_SUCCESS',
  data: result,
});

const factError = (result) => ({
  type: 'FACT_ERROR',
  data: result,
});

export const factAction = () => {
  let result = async (dispatch) => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const fact = await response.json();

      dispatch(factSuccess(fact.fact));
    } catch (error) {
      dispatch(factError(error));
    }
  }

  return result;
}