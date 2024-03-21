import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function ContactLinks() {
  return (
    <section className="flex items-center gap-8">
      <a href="https://github.com/RelancioBorgesDev" target="_blank">
        <FaGithub size={54} />
      </a>
      <a href="https://www.linkedin.com/in/relancio-borges-4716a620b/" target="_blank">
        <FaLinkedin size={54} />
      </a>
    </section>
  );
}
