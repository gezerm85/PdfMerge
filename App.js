import Router from "./src/navigation/Router";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
