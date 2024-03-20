import { bagImg } from "../utils";
import { searchImg } from "../utils";
import { appleImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple logo" width={14} height={18} />
        <div>
          {["Téléphone", "Mac", "iPad", "Watch"].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
