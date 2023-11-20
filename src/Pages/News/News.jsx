import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const {id}=useParams();
    console.log(id)
    return (
        <div>
           <Header></Header>
           <div className="grid grid-cols-4 gap-5">
           <div className="col-span-3">
           <p>{id}</p>
           </div>
           <div className="">
           <RightSideNav></RightSideNav>
           </div>
           </div>
        </div>
    );
};

export default News;