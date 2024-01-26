import React from "react";
import {  useNavigate } from "react-router-dom";
import './Style.scss'
// let arr = [{ id: 1,weight:[{kg:250,price:40}], name: "Capsicum - Green (Loose)", brand: "Fresho", price: "₹" + 101.47, img: "https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80" },{ id: 2, name: "Carrot - Orange (Loose)", brand: "Fresho", price: "₹" + 64, img: "https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80" },{ id: 3, name: "Cauliflower", brand: "Fresho", price: "₹" + 20.5, img: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-1920,q=80" },{ id: 4, name: "Coriander Leaves", brand: "Fresho", price: "₹" + 81.03, img: "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-1920,q=80" }];
export const Login = () => {
    let nav = useNavigate();
    // const login=()=>{
    //     nav('/?no=01&name=login')
    // }
    // let arr=[{id:1,c1:{pimg:"",brand:"",name:"",weight:[{kg:250,price:50},{kg:500,price:90}],details:[{tit:"About the Product",details:""}]}},]
    let arr = [{ id: 1,offer:"27% OFF",
        weight:[{kg:"1 kg",price:"₹ 82.49",offer:"27% OFF"},{kg:"250 g ",price:"₹ 21.17",offer:"27% OFF"},{kg:"500 g",price:"₹ 29",offer:"55% OFF"},{kg:"3 kg",price:"",offer:""}],
        details:[{title:"About the Product",def:''},{title:"Benefits",def:""},{title:"Storage and Uses",def:""},{title:"Other Product Info",def:""}],
        name: "Capsicum - Green (Loose)",
        brand: "Fresho",
        price: "₹" + 82.49,
        img: "https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80" 
    },
    { id: 2,offer:"33% OFF",
    weight:[{kg:"1 kg",price:"₹ 151.11",offer:"33% OFF"},{kg:"250 g",price:"₹ 21.17",offer:"27% OFF"},{kg:"500 g",price:"₹ 40.15",offer:"27% OFF"},{kg:"5 kg",price:"",offer:""}],
    details:[{title:"About the Product",def:""},{title:"Benefits",def:""},{title:"Storage and Uses",def:""},{title:"Other Product Info",def:""}],
    name: "Carrot - Orange (Loose)",
    brand: "Fresho",
    price: "₹" + 64,
    img: "https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80" 
    },
    { id: 3,offer:"53% OFF",
    // weight:[{kg:250,price:30},{kg:500,price:55},{kg:1+"kg",price:100}],
    weight:[{kg:"",price:"",offer:""}],
    details:[{title:"About the Product",def:""},{title:"Benefits",def:""},{title:"Storage and Uses",def:""},{title:"Other Product Info",def:""}],
    name: "Cauliflower",
    brand: "Fresho",
    price: "₹" + 20.5,
    img: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-1920,q=80" 
    },
    { id: 4,offer:"27% OFF",
    weight:[{kg:"1 kg",price:"₹ 71.54",offer:"27% OFF"},{kg:"500 g",price:"₹ 36.5",offer:"27% OFF"},{kg:"100 g",price:"₹ 10.22",offer:"27% OFF"},{kg:"250 g",price:"₹ 24.09", offer:"27% OFF"}],
    details:[{title:"About the Product",def:""},{title:"Benefits",def:""},{title:"Storage and Uses",def:""},{title:"Other Product Info",def:""}],
    name: "Coriander Leaves",
    brand: "Fresho", 
    price: "₹" + 151.11,
    img: "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-1920,q=80" 
    }];
    const movenext=(i,e)=>{
        nav(`/home?id=${i}`)
        localStorage.setItem("det",JSON.stringify(e))
    }
    return (
        <div className="container">
        <div className="row">
            {arr.map((e, i) => {
                return (
                    <div key={i} className="col">
                        <div className="card" onClick={()=>movenext(i,e)}>
                            <div className="img-col">
                                <p>{e.offer}</p>
                                <img src={e.img} alt="pic"/>
                            </div>

                            <h4>{e.brand}</h4>
                            <p>{e.name}</p>
                            <h4>{e.price}</h4>
                            {/* <h4>{e.weight.kg}</h4> */}
                            <div>
                                <h5>{e.weight.map((val,i)=>{return val.kg})}</h5>
                            </div>
                           
                            {/* {console.log(e.weight.map((val)=>{return val.kg}))} */}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}