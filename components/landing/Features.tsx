import styles from "./Features.module.css";

const features = [
  {
    icon: "🤖",
    title: "AI Agents",
    description: "Generate proposals, emails, content, and business advice using AI."
  },
  {
    icon: "📈",
    title: "Market Research",
    description: "Analyze competitors, discover trends, and identify high-paying niches."
  },
  {
    icon: "🌐",
    title: "Portfolio Builder",
    description: "Create stunning portfolio websites using AI in just a few minutes."
  },
  {
    icon: "👥",
    title: "Client CRM",
    description: "Manage clients, leads, and projects from one organized dashboard."
  },
  {
    icon: "📄",
    title: "Proposal Generator",
    description: "Create professional proposals that help you win more freelance projects."
  },
  {
    icon: "💰",
    title: "Business Analytics",
    description: "Track earnings, expenses, productivity, and business growth."
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.heading}>
        <h2>Everything You Need to Grow</h2>
        <p>
          Flux combines AI, business management, and marketing tools into one
          powerful platform for freelancers.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}