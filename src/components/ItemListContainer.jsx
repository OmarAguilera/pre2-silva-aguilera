import { useEffect, useState } from "react";
import { askData } from "../helpers/askData";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export function ItemListContainer(props){
    const [candies, setCandies] = useState([]);
    const {categoryId} = useParams()
    
    useEffect(() => {
        askData()
        .then((ans)=> {
            if(categoryId){
                setCandies(ans.filter((item) => item.category === categoryId))
            } else {
                console.log(ans)
                setCandies(ans)
            }
        })
    }, [categoryId])

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemList candy={candies}/>
        </div>
    )
}