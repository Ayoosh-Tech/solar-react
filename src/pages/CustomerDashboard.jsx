import { useState } from "react";
import "./dashboard.css";

export default function CustomerDashboard() {
  const [quotes] = useState([
    { id: 1, name: "Solar Installation - 5kW", company: "SolarTech Nigeria", status: "Pending", date: "2026-05-10" },
    { id: 2, name: "Battery Upgrade", company: "Bright Solar Ltd", status: "Accepted", date: "2026-05-08" },
    { id: 3, name: "System Maintenance", company: "GreenLight Solar", status: "Installed", date: "2026-04-20" },
  ]);

  const [savedCompanies] = useState([
    { id: 1, name: "Bright Solar Ltd", rating: 4.7, location: "Lagos" },
    { id: 2, name: "GreenLight Solar", rating: 4.7, location: "Abuja" },
    { id: 3, name: "SolarTech Nigeria", rating: 4.8, location: "Lagos" },
  ]);

  const [notifications] = useState([
    { id: 1, message: "Your quote is under review", time: "2 hours ago", type: "info" },
    { id: 2, message: "New message from installer", time: "5 hours ago", type: "message" },
    { id: 3, message: "Quote accepted! Click to proceed", time: "1 day ago", type: "success" },
  ]);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "badge pending";
      case "accepted":
        return "badge accepted";
      case "declined":
        return "badge declined";
      case "in review":
        return "badge review";
      case "installed":
        return "badge installed";
      default:
        return "badge";
    }
  };

  const stats = [
    { label: "Total Quotes", value: quotes.length, icon: "📋" },
    { label: "Accepted", value: quotes.filter(q => q.status === "Accepted").length, icon: "✅" },
    { label: "Pending", value: quotes.filter(q => q.status === "Pending").length, icon: "⏳" },
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>SolarLink</h2>
        <ul>
          <li className="active">📊 Dashboard</li>
          <li>📄 Quotes</li>
          <li>❤️ Saved Companies</li>
          <li>🔔 Notifications</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main">

        <h1>Welcome Back 👋</h1>

        {/* Stats Cards */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <span className="stat-icon">{stat.icon}</span>
              <div>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <section className="main-card">
          <h2>📋 Active Quotes</h2>

          {quotes.map((q) => (
            <div className="quote-item" key={q.id}>
              <div className="quote-info">
                <h4>{q.name}</h4>
                <p className="quote-company">from {q.company}</p>
                <small className="quote-date">{q.date}</small>
              </div>
              <div className="quote-actions">
                <span className={getStatusClass(q.status)}>
                  {q.status}
                </span>
                <button className="action-btn">View</button>
              </div>
            </div>
          ))}

        </section>

        {/* Saved Companies */}
        <section className="main-card">
          <h2>❤️ Saved Companies</h2>
          <div className="companies-grid">
            {savedCompanies.map((company) => (
              <div className="company-card" key={company.id}>
                <h4>{company.name}</h4>
                <div className="company-meta">
                  <span className="rating">⭐ {company.rating}</span>
                  <span className="location">📍 {company.location}</span>
                </div>
                <button className="company-btn">View Profile</button>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section className="main-card">
          <h2>🔔 Notifications</h2>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div className={`notification-item ${notif.type}`} key={notif.id}>
                <div className="notif-content">
                  <p>{notif.message}</p>
                  <small className="notif-time">{notif.time}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}