import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import WithoutCancelDemo from "./components/Ratting/Ratting";

function App() {
  return (
    <Provider store={store}>
      <WithoutCancelDemo />
    </Provider>
  );
}

export default App;
