// src/components/CartList.jsx
import useCart from "../hooks/useCart";
import Button from "./Button";

export default function CartList() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) return <p>🛒 Giỏ hàng trống.</p>;

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border rounded p-3 gap-3"
        >
          {/* Hình ảnh */}
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />

          {/* Thông tin */}
          <div className="flex-1">
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-600">
              {item.price.toLocaleString()} VNĐ
            </p>
          </div>

          {/* Số lượng + nút xóa */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
              className="border rounded px-2 w-16"
            />
            <Button variant="danger" onClick={() => removeItem(item.id)}>
              Xóa
            </Button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4">
        <p className="font-bold">
          Tổng:{" "}
          {items
            .reduce((sum, i) => sum + i.price * i.quantity, 0)
            .toLocaleString()}{" "}
          VNĐ
        </p>
        <Button variant="secondary" onClick={clearCart}>
          Xóa toàn bộ
        </Button>
      </div>
    </div>
  );
}
