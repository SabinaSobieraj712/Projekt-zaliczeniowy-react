import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import "./style/style.css";
function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
