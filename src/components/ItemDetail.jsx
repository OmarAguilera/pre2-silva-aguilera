import { ItemCount } from "./ItemCount";

export function ItemDetail({ item }) {
  const onAdd = (quantity) => {
    alert("Compraste " + quantity + " productos");
  };

  return (
    <div>
      <div className="item2">
        <h1>{item.product_name}</h1>
        <img src={item.photo} alt={item.product_name} />
        <p>${item.price}</p>
        <p>flavor: {item.flavor}</p>
        <p>calories: {item.calories}</p>
        <p>Expiration date: {item.expiration_date}</p>
      </div>
      <ItemCount initial={1} stock={item.quantity_in_stock} onAdd={onAdd} />
    </div> 
  )
}