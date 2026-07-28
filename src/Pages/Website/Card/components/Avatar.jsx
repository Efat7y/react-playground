export default function Avatar({ member }) {
  return (
    <div>
      <img src={member.image} alt={member.name} className="imge" />
    </div>
  );
}
