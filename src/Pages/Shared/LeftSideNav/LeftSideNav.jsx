import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [catagoris,setCatgories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then((res)=>res.json())
        .then(data=>setCatgories(data))
    },[])
    return (
        <div className="border space-y-6">
            <h3>all categories {catagoris.length}</h3>
            {
                catagoris.map((item)=><Link key={item.id} className="block ml-4 text-xl font-semibold" to={`/catagory/${item.id}`}>{item.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;