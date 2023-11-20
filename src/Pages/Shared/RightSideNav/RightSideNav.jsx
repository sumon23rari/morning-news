import { FaFacebook, FaGoogle, FaTwitter,FaInstagram } from "react-icons/fa";
import qr1 from '../../../assets/qZone1.png';
import qr2 from '../../../assets/qZone3.png';
import qr3 from '../../../assets/qZone2.png';
const RightSideNav = () => {
    return (
        <div>
        <div className="p-4 space-y-3">
        <h2 className="text-3xl mb-6 capitalize">user Login</h2>
        <button className="btn btn-outline w-full">
<FaGoogle></FaGoogle>
Button
</button>
</div>
        <div className="p-4 space-y-3">
        <h2 className="text-3xl mb-6 capitalize">find us on</h2>
        <a href="/" className="p-4 flex text-lg items-center border rounded-r-lg">
        <FaFacebook className="mr-3"></FaFacebook>
        <span>Facebook</span>
        </a>
        <a href="/" className="p-4 flex text-lg items-center  border-x">
        <FaTwitter className="mr-3"></FaTwitter>
        <span>twitter</span>
        </a>
        <a href="/" className="p-4 flex text-lg items-center border rounded-b-lg">
        <FaInstagram className="mr-3"></FaInstagram>
        <span>instgram</span>
        </a>
     

</div>
{/* q zone*/}
<div className="p-4 space-y-3">
<h2 className="text-3xl mb-6 capitalize">q zone</h2>
<img src={qr1}/>
<img src={qr2}/>
<img src={qr3}/>


</div>
        </div>
    );
};

export default RightSideNav;