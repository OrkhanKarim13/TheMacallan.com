import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider>
);
