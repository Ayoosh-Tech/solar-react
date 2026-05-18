import "./App.css";

export default function Login() {
  return(
    <div className="form-wrapper">
        <div className="form-container">
            <h2>Login</h2>

            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
        </div>
    </div>
  );
}