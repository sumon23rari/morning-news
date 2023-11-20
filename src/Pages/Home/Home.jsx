import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
    const news=useLoaderData()
  
    return (
        <div>
        <Header></Header>

        <Navbar></Navbar>
   <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
<LeftSideNav></LeftSideNav>
   <div className=" col-span-2">
   <h3>{news.length}</h3>
{
    news.map((aNew)=><NewsCard key={aNew._id} aNews={aNew}></NewsCard>)
}
   </div>
<RightSideNav></RightSideNav>
  
   </div>
        </div>
    );
};

export default Home;