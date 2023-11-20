import { Link } from "react-router-dom";

const NewsCard = ({aNews}) => {
    console.log(aNews)
    const {_id,title, image_url,details}=aNews;
    return (
        <div className="card w-full bg-base-100 shadow-xl border-b-2">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        
        </div>
        <figure className="w-full h-3/4"><img src={image_url} alt="Shoes" className="w-full h-3/4"/></figure>
     <>
     {
      details.length>200? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="font-bold text-blue-600">read more</Link></p>:<p>{details}</p>
    }
     </>
      </div>
    );
};

export default NewsCard;