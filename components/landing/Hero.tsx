import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Build Your Freelance Business
        <br />
        with AI
      </h1>

      <p>
        AI websites, client management,
        market research, proposals,
        invoicing, analytics and much more.
      </p>

      <div className="hero-buttons">
        <Button text="Get Started" />

        <Button
          text="Watch Demo"
          variant="secondary"
        />
      </div>
    </section>
  );
}