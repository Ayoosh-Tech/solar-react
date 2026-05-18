import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './Login';
import QuoteRequest from './pages/QuoteRequest';
import CompanyProfile from './pages/CompanyProfile';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Search from './pages/Search';
import Register from './Register';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Powering Solar Access Across Nigeria</h2>
        <p>Find trusted solar companies and compare services easily</p>
        <button>Explore Companies</button>
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

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">SolarLink</h1>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quote">Quote</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register" className="btn">
            Register
          </NavLink>
        </nav>
      </header>

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
      </Routes>

      <footer className="footer">
        <p>&copy; 2026 SolarLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
