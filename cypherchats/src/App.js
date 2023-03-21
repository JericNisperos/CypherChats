import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AuthenticatePage from "./components/AuthenticatePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;

    return children;
  };

  function AlreadyLoggedIn({ children }) {
    if (currentUser) return <Navigate to="/" />;

    return children;
  }

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
