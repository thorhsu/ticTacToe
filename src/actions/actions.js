function mapStateToProps(state) {
  return state;
}


function mapDispatchToProps(dispatch) {
  return {
    setMark: function (row, column) {
      dispatch({
        type: 'setMark',
        row,
        column,
      });
    },

  };
}
export { mapDispatchToProps, mapStateToProps };
