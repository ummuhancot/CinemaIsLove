export default function StatsCard({ title, value, color }) {
  return (
    <div className={`card text-center border-${color} shadow`}>
      <div className={`card-body text-${color}`}>
        <h3>{value}</h3>
        <p className="fw-bold">{title}</p>
      </div>
    </div>
  );
}
