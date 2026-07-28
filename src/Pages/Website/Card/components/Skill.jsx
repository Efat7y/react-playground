export default function Skill({ skill }) {
  return (
    <span
      className="skills"
      style={{
        backgroundColor: skill.color,
      }}
    >
      {skill.name}
    </span>
  );
}
