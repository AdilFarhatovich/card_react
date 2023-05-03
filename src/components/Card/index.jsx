import React from "react"
import './Card.css'
export const Card = ({data}) => {

// 1-case
//     if(data.color){
//         return <div className="card" style={{background:data.color}}>
//             {data.title}
//         </div>
//     }else{
//         return <div className="card" style={{backgroundImage:`url(${data.img})`}}>
//             {data.title}
//         </div>
//     }
// }

switch(data.color){
    case null:
    return(
         <div className="card" style={{backgroundImage: `url(${data.img})`}}>
        {data.title}
    </div>
    )
default:
    return( <div className="card" style={{backgroundColor:data.color}}>
        {data.title}
    </div>
    )
}

}