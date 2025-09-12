// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
}
