import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";

import "./App.css";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <ReduxProvider store={store}>
        <Header />
        <Content />
        <Footer />
      </ReduxProvider>
    </div>
  );
}

export default App;
