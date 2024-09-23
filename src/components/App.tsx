import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Board } from "./Board";



function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Header />
    <Board />
    <Footer />
    </PersistGate>
    </Provider>
  );
}

export default App;
