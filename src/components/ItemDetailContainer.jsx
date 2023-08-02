import { useEffect, useState } from "react";
import { askItem } from "../helpers/askData";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom"; 

export function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    askItem(id)
      .then((ans) => {
        setItem(ans);
      })
      .catch((error) => {
        console.log(error); 
      });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
}
