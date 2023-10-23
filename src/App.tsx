import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { AppRoutes } from "./routes/routes";
// import TodoApp from "./Components/TodoApp/TodoApp";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
