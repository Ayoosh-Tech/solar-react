import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./search.css";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const [view, setView] = useState("list"); // 👈 toggle state

  const location = params.get("location") || "";
  const rating = params.get("rating") || "";

  // Sample data (with coordinates)
  const companies = [
    {
      name: "Abuja Solar Experts",
      rating: 4,
      location: "Abuja",
      coords: [9.0765, 7.3986],
    },
    {
      name: "GreenTech Energy",
      rating: 5,
      location: "Lagos",
      coords: [6.5244, 3.3792],
    },
  ];

  const filtered = companies.filter((c) => {
    return (
      (!location || c.location.toLowerCase().includes(location.toLowerCase())) &&
      (!rating || c.rating >= Number(rating))
    );
  });

  return (
    <div className="search-container">

      {/* FILTERS */}
      <aside className="filters">
        <input
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setParams({
              location: e.target.value,
              rating: rating,
            })
          }
        />

        <select
          value={rating}
          onChange={(e) =>
            setParams({
              location: location,
              rating: e.target.value,
            })
          }
        >
          <option value="">All Ratings</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>
      </aside>

      {/* RESULTS */}
      <main className="results">

        {/* TOGGLE BUTTON */}
        <div className="top-bar">
          <button onClick={() => setView("list")}>List View</button>
          <button onClick={() => setView("map")}>Map View</button>
        </div>

        {/* LIST VIEW */}
        {view === "list" && (
          <>
            {filtered.length === 0 && <p>No results found</p>}

            {filtered.map((c, index) => (
              <div className="filter-card" key={index}>
                <h3>{c.name}</h3>
                <p>Location: {c.location}</p>
                <p>Rating: {c.rating} ⭐</p>
              </div>
            ))}
          </>
        )}

        {/* MAP VIEW */}
        {view === "map" && (
          <MapContainer
            center={[9.0765, 7.3986]}
            zoom={6}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filtered.map((c, index) => (
              <Marker key={index} position={c.coords}>
                <Popup>
                  <strong>{c.name}</strong> <br />
                  {c.location} <br />
                  ⭐ {c.rating}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}

      </main>
    </div>
  );
}