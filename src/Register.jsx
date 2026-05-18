import './App.css';

export default function Register() {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <select>
          <option value="">Select Role</option>
          <option>Customer</option>
          <option>Company</option>
          <option>Wholesaler</option>
        </select>

        <button>Register</button>

  
      </div>
    </div>
  );
}
