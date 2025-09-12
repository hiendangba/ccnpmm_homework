import Button from "./Button";

export default function Modal({ isOpen, title, children, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Nội dung */}
        <div className="mb-4">{children}</div>

        {/* Footer có 2 nút */}
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Đóng
          </Button>
          {onConfirm && (
            <Button variant="primary" onClick={onConfirm}>
              Xác nhận
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
