import { Item } from "./Item";

export function ItemList({candy}){
    return(
        <div>
            <h1>New Candies</h1>
            <div>
                {candy.map((cand) => <Item candy={cand} key={cand.id}/>)}
            </div>
        </div>
    )
}