import { CartProvider } from "./context/CartContext";
import useCart from "./hooks/useCart";
import CartList from "./components/CartList";
import Button from "./components/Button";

function ProductDemo() {
  const { addItem } = useCart();

  const sampleProducts = [
    {
      id: 1,
      name: "Giày Sneaker",
      price: 1200000,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftamanh.net%2Fcach-phoi-do-voi-giay-nam-mau-trang.html%3Fsrsltid%3DAfmBOoqjydYm-3KQr2Clr6oCeBu4FOM-Msg5QfHSWy38_knC82PFddbp&psig=AOvVaw3BnX2gdxVEyxy7DCeHkXa3&ust=1757754152202000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCH1NXu0o8DFQAAAAAdAAAAABAV",
      quantity: 1,
    },
    {
      id: 2,
      name: "Áo Thun",
      price: 250000,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maisononline.vn%2Fblogs%2Fbi-quyet%2Fcach-phoi-do-voi-giay-sneaker-danh-cho-ca-nam-va-nu-hot-nhat%3Fsrsltid%3DAfmBOor24VkchYIpht6JhgRcFgZ5NOdETp7_a_OvrUInH4VhNDd5aKWB&psig=AOvVaw3BnX2gdxVEyxy7DCeHkXa3&ust=1757754152202000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCH1NXu0o8DFQAAAAAdAAAAABAf",
      quantity: 1,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Sản phẩm</h2>
      {sampleProducts.map((p) => (
        <div key={p.id} className="flex items-center gap-3 border p-3 rounded">
          <img src={p.image} alt={p.name} className="w-16 h-16 rounded" />
          <div className="flex-1">
            <h3 className="font-semibold">{p.name}</h3>
            <p>{p.price.toLocaleString()} VNĐ</p>
          </div>
          <Button onClick={() => addItem(p)}>Thêm vào giỏ</Button>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <ProductDemo />
        <h2 className="text-xl font-bold">Giỏ hàng</h2>
        <CartList />
      </div>
    </CartProvider>
  );
}
