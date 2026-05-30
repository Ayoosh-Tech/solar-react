import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import './App.css';
import Login from './Login';
import QuoteRequest from './pages/QuoteRequest';
import CompanyProfile from './pages/CompanyProfile';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Search from './pages/Search';
import SolarCalculator from './pages/SolarCalculator';
import CompareCompanies from './pages/CompareCompanies';
import Register from './Register';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';




function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="hero">
        <h2>{t("heroTitle")}</h2>
        <p>{t("heroText")}</p>
        <button>{t("explore")}</button>
        <div className="language-switcher">
        <button  onClick={() => i18n.changeLanguage("en")}>
        English
      </button>

      <button  onClick={() => i18n.changeLanguage("ha")}>
        Hausa
      </button>
      </div>
      </section>

      <section className="companies">
        <h2>Top Solar Companies</h2>

        <div className="card-container">
          <div className="card">
            <h3>SolarTech</h3>
            <p>⭐ 4.8</p>
            <p>Installation, Maintenance</p>
          </div>

          <div className="card">
            <h3>SunPower NG</h3>
            <p>⭐ 4.2</p>
            <p>Panels, Installation</p>
          </div>

          <div className="card">
            <h3>GreenLight Solar</h3>
            <p>⭐ 4.7</p>
            <p>Commercial Solutions</p>
          </div>
        </div>
      </section>
    </>
  );
}

//export default function App() {
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);
  const handleOverlayClick = () => setMenuOpen(false);

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">SolarLink</h1>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/quote" onClick={handleNavClick}>Quote</NavLink>
          <NavLink to="/company" onClick={handleNavClick}>Company</NavLink>
          <NavLink to="/dashboard" onClick={handleNavClick}>Dashboard</NavLink>
          <NavLink to="/admin" onClick={handleNavClick}>Admin</NavLink>
          <NavLink to="/search" onClick={handleNavClick}>Search</NavLink>
          <NavLink to="/calculator" onClick={handleNavClick}>Calculator</NavLink>
          <NavLink to="/compare" onClick={handleNavClick}>Compare</NavLink>
          <NavLink to="/login" onClick={handleNavClick}>Login</NavLink>
          <NavLink to="/register" className="btn" onClick={handleNavClick}>
            Register
          </NavLink>
        </nav>
      </header>

      {/* OVERLAY - closes menu when clicked */}
      {menuOpen && (
        <div className="menu-overlay" onClick={handleOverlayClick}></div>
      )}
      
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quote" element={<QuoteRequest />} />
        <Route path="/company" element={<CompanyProfile />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/calculator" element={<SolarCalculator />} />
        <Route path="/compare" element={<CompareCompanies />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2026 SolarLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
