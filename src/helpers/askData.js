import data from "../data/candies.json";

export function askData(){
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export function askItem(id){
    return new Promise((resolve, reject) => {
        let item = data.find((e) => e.id === id)
        if(item){
            resolve(item)
        } else {
            reject({
                error: "not found :o"
            })
        }
    })
}