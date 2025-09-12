import Button from "./Button";

export default function Card({ title, description, price, image, onAddToCart }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
      {image && <img src={image} alt={title} className="h-40 w-full object-cover" />}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-primary font-bold">${price}</span>
          <Button onClick={onAddToCart}>Thêm vào giỏ</Button>
        </div>
      </div>
    </div>
  );
}
