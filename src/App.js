import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import Rootlayouts from "./components/leyouts/Rootlayouts";
import Home from "./pages/Home";
import Contract from "./pages/Contract";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route index element={<Home />}></Route>
      <Route path="/contract"  element={<Contract />}></Route>
      
    </Route>
  )
);
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Tamim 100
        </p>
        <h2>TAmim add</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  return <RouterProvider router={router} />

}

export default App;
