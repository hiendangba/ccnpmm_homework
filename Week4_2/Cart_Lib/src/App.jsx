import Card from "./components/ui/Card";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center text-primary">🛒 Demo Cart UI</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card
          title="Sản phẩm A"
          description="Mô tả ngắn gọn sản phẩm A"
          price={29.99}
          image="https://th.bing.com/th/id/OIP.3KAR7CT_p9C0zp6NpM-BDQHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          onAddToCart={() => setOpen(true)}
        />
        <Card
          title="Sản phẩm B"
          description="Mô tả ngắn gọn sản phẩm B"
          price={49.99}
          image="https://th.bing.com/th/id/OIP.1apFQzIMncjSHt9yi5SvfQHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          onAddToCart={() => setOpen(true)}
        />
        <Card
          title="Sản phẩm C"
          description="Mô tả ngắn gọn sản phẩm C"
          price={19.99}
          image="https://th.bing.com/th/id/OIP.DCuEhCQni-rlaJccr_bCrAHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          onAddToCart={() => setOpen(true)}
        />
      </div>
        <Modal
        isOpen={open}
        title="Thêm vào giỏ hàng"
        onClose={() => setOpen(false)}
        onConfirm={() => {
            alert("✅ Đã thêm vào giỏ hàng!");
            setOpen(false);
        }}
        >
        <Input label="Số lượng" type="number" defaultValue={1} />
        </Modal>
    </div>
  );
}
