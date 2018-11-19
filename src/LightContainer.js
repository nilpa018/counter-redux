import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch({ type: "ADDONE" }),
  removeOne: () => dispatch({ type: "REMOVEONE" }),
  addTen: () => dispatch({ type: "ADDTEN" }),
  removeTen: () => dispatch({ type: "REMOVETEN" }),
  reset: () => dispatch({ type: "RESET" }),
});

const CountComponent = ({ count, addOne, removeOne, addTen, removeTen, reset }) => (
  <div>
    <p>{count}</p>
    <button onClick={addOne}>+1</button>
    <button onClick={removeOne}>-1</button>
    <button onClick={addTen}>+10</button>
    <button onClick={removeTen}>-10</button>
    <button onClick={reset}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent);