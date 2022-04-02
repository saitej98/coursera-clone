import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux"
import { store } from "./Redux/store";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
  </BrowserRouter>,
  rootElement
);