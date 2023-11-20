
import Marquee from "react-fast-marquee";
const BreackingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>BreackingNews</button>
            <Marquee pauseOnHover={true} speed={150}>
            <h3 className='mr-12'>this is marquee element js.....</h3>
            <h3 className='mr-12'>this is marquee element js.....</h3>
            </Marquee>
        </div>
    );
};

export default BreackingNews;