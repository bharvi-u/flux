import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Flux</h2>
      </div>

      <nav className="menu">
        <a href="/dashboard">🏠 Dashboard</a>

        <a href="/ai">🤖 AI Agents</a>

        <a href="/clients">👥 Clients</a>

        <a href="/portfolio">🎨 Portfolio</a>

        <a href="/settings">⚙ Settings</a>
      </nav>
    </aside>
  );
}