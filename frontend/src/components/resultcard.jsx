export default function ResultCard({ title, items }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <ul className="list-disc pl-5">
        {items.map((item, idx) => (
          <li key={idx}>
            {Array.isArray(item) ? item.join(" — ") : item}
          </li>
        ))}
      </ul>
    </div>
  );
}
