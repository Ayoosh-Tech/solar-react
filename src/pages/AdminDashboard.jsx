import { useState } from "react";
import "./admin.css";

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState([
    { customer: "Aishat", request: "5kW Solar Setup", status: "Pending" },
  ]);

  const handleAction = (index, action) => {
    const updated = [...quotes];
    updated[index].status = action;
    setQuotes(updated);
  };

  return (
    
    <div className="admin-dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Company Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Quotes</li>
          <li>Products</li>
          <li>Calendar</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main1">

        <h1>Admin Dashboard</h1>

        {/* Profile Progress */}
        <section className="admin-card">
          <h2>Profile Completion</h2>
          <div className="progress-bar">
            <div className="progress1" style={{ width: "60%" }}>
              60%
            </div>
          </div>
        </section>

        {/* Quotes Table */}
        <section className="admin-card">
          <h2>Incoming Quotes</h2>
       <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Request</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {quotes.map((q, index) => (
                <tr key={index}>
                  <td>{q.customer}</td>
                  <td>{q.request}</td>
                  <td>{q.status}</td>
                  <td>
                    <button
                      className="accept"
                      onClick={() => handleAction(index, "Accepted")}
                    >
                      Accept
                    </button>

                    <button
                      className="decline"
                      onClick={() => handleAction(index, "Declined")}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>

        {/* Bar Chart */}
        <section className="admin-card">
          <h2>Weekly Quotes</h2>

          <div className="bar-chart">
            <div className="bar" style={{ height: "50%" }}>Mon</div>
            <div className="bar" style={{ height: "80%" }}>Tue</div>
            <div className="bar" style={{ height: "30%" }}>Wed</div>
            <div className="bar" style={{ height: "70%" }}>Thu</div>
            <div className="bar" style={{ height: "90%" }}>Fri</div>
          </div>
        </section>

        {/* Calendar */}
        <section className="admin-card">
          <h2>Installation Calendar</h2>
          <p>Next Installation: Friday - Abuja Site</p>
        </section>

      </main>
    </div>
    
  );
}