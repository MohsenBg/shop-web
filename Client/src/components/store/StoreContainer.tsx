import React from "react";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";

const StoreContainer = ({ children }: any) => {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
};

export default StoreContainer;
