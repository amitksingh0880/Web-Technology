import { Provider } from "react-redux";
import { store } from "./store";
import React, { ReactNode } from "react";

export const ReduxProvider = ({children}: {children: React.ReactNode})=>{
    return <Provider store={store}>
        {children}
    </Provider>
}