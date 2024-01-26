import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import './Style.scss'
export const Home = () => {
    // const [parem] = useSearchParams("id", "data");
    // const [obj, setobj] = useState(JSON.parse(parem.get("data")));
    const [obj,setobj]=useState(JSON.parse(localStorage.getItem("det")))
    console.log(obj)

    return (
        <div className="det-sec">
            <div className="container">
                <div className="det-row">
                    <div className="det-col">
                        <div className="det-card img-card">
                            <img src={obj.img} alt="pic" />
                        </div>
                    </div>
                    <div className="det-col">
                        <div className="det-card">
                            <span>{obj.brand}</span>
                            <h4>{obj.name} 1 kg</h4>
                            <h4>Price :{obj.price} <span> ( {obj.price} / kg)</span></h4>
                            <p>You Save : {obj.offer}</p>
                            <div className="btn-row">
                                <div className="btn1">
                                    <button>Add to basket</button>
                                </div>
                                <div className="btn2">
                                    <button>save for later</button>
                                </div>
                            </div>
                            <h4>Pack sizes</h4>
                            <div className="extra">
                                {obj.weight.map((e,i)=>{
                                    return(
                                        <div key={i} className="extra-col">
                                            <div className="extra-card">
                                            <div>
                                                 <p>{e.kg}</p>
                                            </div>
                                            <div>
                                                <li>{e.price}</li>
                                                <span>{e.offer}</span>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}