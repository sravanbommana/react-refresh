import { ThemeProvider } from "react-bootstrap";
import "./App.css";
import Alpha from "./components/Alpha";
import Beta from "./components/Beta";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Alpha />
        <Beta />
      </ThemeProvider>
    </div>
  );
}

export default App;
