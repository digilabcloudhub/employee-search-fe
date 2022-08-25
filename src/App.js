import { employees } from "./employees";
import FetchData from "./components/FetchData";
import Dept from "./components/Dept";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dept">Department</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/fetchdata">Fetch Data</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />;
            <Route path="home" element={<Home />} />
            <Route path="dept" element={<Dept data={employees} />} />
            <Route path="search" element={<Search item={employees} />} />
            <Route path="fetchdata" element={<FetchData />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
