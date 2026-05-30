import { useState } from "react";
import "./CompareCompanies.css";

const companies = [
  {
    name: "SolarTech",
    price: "₦2M - ₦5M",
    rating: "4.8",
    location: "Abuja",
  },
  {
    name: "Green Energy",
    price: "₦1.5M - ₦4M",
    rating: "4.5",
    location: "Lagos",
  },
];

const CompareCompanies = () => {
  return (
    <main className="compare-companies">
    <div className="compare">
      <h2>Compare Companies</h2>

      <table style={{ border: "1px solid #333", cellPadding: "50px", cellSpacing: "50px" }}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Price Range</th>
            <th>Rating</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.price}</td>
              <td>{company.rating}</td>
              <td>{company.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
  );
};

export default CompareCompanies;