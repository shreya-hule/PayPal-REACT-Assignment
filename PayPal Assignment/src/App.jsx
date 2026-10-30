
import './App.css';

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="brand" aria-label="PayPal home">
        <img
          src="//www.paypalobjects.com/webstatic/icon/pp258.png"
          alt="PayPal"
        />
      </a>

      <nav className="nav-links">
        <a href="#personal">Personal <span>⌄</span></a>
        <a href="#business">Business <span>⌄</span></a>
        <a href="#partners">Partners <span>⌄</span></a>
        <a href="#useful-info">Useful Info <span>⌄</span></a>
      </nav>

      <div className="nav-buttons">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="hero" id="business">
      <div className="account-toggle">
        <button className="toggle-option">Personal</button>
        <button className="toggle-option active">Business</button>
      </div>

      <h1>PayPal Open</h1>

      <h2>One platform for your business needs</h2>

      <p>
        PayPal Open unifies your PayPal business solutions to help you
        get paid, get growing, and get ahead.
      </p>

      <div className="hero-buttons">
        <button className="signup-button">Sign Up</button>
        <button className="contact-button">Contact Sales</button>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
