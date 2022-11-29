import { store } from "./store/store";
import { Provider as ReduxProvider } from "react-redux";

import Content from "./layout/content";
import Footer from "./layout/footer";
import Header from "./layout/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Header />
        <Content />
        <Footer />
      </ReduxProvider>
    </div>
  );
}

export default App;
