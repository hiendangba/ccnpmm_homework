// src/components/Modal.jsx
import Button from "./Button";

export default function Modal({ isOpen, title, children, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>Đóng</Button>
          {onConfirm && <Button variant="primary" onClick={onConfirm}>Xác nhận</Button>}
        </div>
      </div>
    </div>
  );
}
