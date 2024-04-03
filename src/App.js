import "./App.css";
import { increment, decrement } from "./actions";
import counter from "./reducers/counter";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);
  
  return (
    <div className="container">
      <div className="add-to-cart-container">
        <h3>Add to Cart</h3>
        <a onClick={() => dispatch(decrement())}><span>-</span></a>
        <p className="value" type="text">{state}</p>
        <a onClick={() => dispatch(increment())}><span>+</span></a>
      </div>
    </div>
  );
}

export default App;
