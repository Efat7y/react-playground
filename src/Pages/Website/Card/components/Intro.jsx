export default function Intro({ member }) {
  return (
    <div className="content">
      <h1 className="text-2xl">{member.name}</h1>
      <p>{member.bio}</p>
    </div>
  );
}
