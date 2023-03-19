import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Navbar from './components/Navbar';
// import Router from './Router';
// import Login from './components/Login';
// import Auth from './components/Auth';
import AuthenticatePage from "./components/AuthenticatePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;

    return children;
  };

//  const AlreadyLoggedIn =  ({ children }) => {
    
//   };

function AlreadyLoggedIn ({children}) {
    if (currentUser) return <Navigate to="/" />;

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <AlreadyLoggedIn>
                <AuthenticatePage />
              </AlreadyLoggedIn>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
