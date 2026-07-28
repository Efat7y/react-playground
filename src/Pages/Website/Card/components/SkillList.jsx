import Skill from "./Skill";

export default function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
