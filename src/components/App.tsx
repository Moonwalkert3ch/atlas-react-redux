import { Provider } from "react-redux";
import { store } from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./Card";
import { NewCardForm } from "./NewCardForm";
import { List } from "./List";

function App() {
  return (

    <Provider store={store}>
      <Header />
    Hello Atlas
    <Card />
    <List />
    <NewCardForm />
    <Footer />
    </Provider>
  );
}

export default App;
