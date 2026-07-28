import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

export default function AboutCart({ member }) {
  return (
    <div className="card">
      <Avatar member={member} />
      <div className="m-2">
        <Intro member={member} />
        <SkillList skills={member.skills} />
      </div>
    </div>
  );
}
