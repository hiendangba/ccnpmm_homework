// src/components/Input.jsx
export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border px-3 py-2 rounded w-full"
    />
  );
}
