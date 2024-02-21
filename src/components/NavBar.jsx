import { PiHouseLineThin } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

// function NavBar() {

// }
const NavBar = () => {
  return (
    <nav className="flex w-screen justify-between py-4 items-center px-10 shadow-2xl">
      <div className=" pl-8">
        <p>Instagram</p>
      </div>
      <div>
        <input type="text" placeholder="Search" className="border border-slate-900 text-center "/>
      </div>
      <div className="flex *:text-2xl gap-8 items-center">
        <PiHouseLineThin className="hover:text-3xl" />
        <IoPaperPlaneOutline className="hover:text-3xl" />
        <FaRegCompass className="hover:text-3xl" />
        <FaRegHeart className="hover:text-3xl" />
        <img
          className=" h-10 rounded-full pr-"
          src="https://qph.cf2.quoracdn.net/main-qimg-224c8562e36bb65dd57873a71a827b90"
          alt=""
        />
      </div>
    </nav>
  );
};

export default NavBar;
