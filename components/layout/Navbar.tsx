import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Flux</div>

      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>

        <Button text="Login" />
      </div>
    </nav>
  );
}