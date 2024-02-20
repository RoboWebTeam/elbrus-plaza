import React, { useEffect, useState } from "react";
import "./App.css";
import "./assets/contact-form-chunk.view.css";
import "./assets/core.css";
//import "./assets/main.css";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/additional.css";
import "./assets/header.css";
import "./assets/ssr.css";
import "./assets/style.css";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/AboutUs";
import Accommodation from "./pages/Accommodation";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import EditRoom from "./pages/EditRoom";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentRecomendation from "./pages/PaymentRecomendation";
import Service from "./pages/Service";
function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localAuthToken = localStorage.getItem("authToken");
    if (localToken === localAuthToken) setToken(localToken);
  }, []);

  return (
    <div className="App" id="app">
      <div id="page-home" className="page">
        <Router>
          <Routes>
            <Route path="/">
              <Route
                index={true}
                path=""
                element={<Dashboard token={token} setToken={setToken} />}
              />
              <Route
                path="/about"
                element={<AboutUs token={token} setToken={setToken} />}
              />
              <Route
                path="/accommodation"
                element={<Accommodation token={token} setToken={setToken} />}
              />
              <Route
                path="/services-facilities"
                element={<Service token={token} setToken={setToken} />}
              />
              <Route
                path="/gallery"
                element={<Gallery token={token} setToken={setToken} />}
              />
              <Route
                path="/contacts"
                element={<Contact token={token} setToken={setToken} />}
              />
              <Route
                path="/edit/:id"
                element={<EditRoom token={token} setToken={setToken} />}
              />
              <Route
                path="/login"
                element={<Login token={token} setToken={setToken} />}
              />
              <Route
                path="/accommodation/Payment/:id"
                element={<Payment token={token} setToken={setToken} />}
              />
              <Route
                path="/paymentRecomendation"
                element={
                  <PaymentRecomendation token={token} setToken={setToken} />
                }
              />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
