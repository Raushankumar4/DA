// import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setisAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleOnLogout = async () => {
    setisAuthenticated(false);
    toast.success("logout Successfully");
    return (navigateTo = "/");
  };
  //   await axios
  //     .get("http://localhost:4000/api/v1/user/patient/logout", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       setisAuthenticated(false);
  //     })
  //     .catch((err) => {
  //       toast.error(err.response.data.message);
  //     });
  // };
  const handleToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <section className="NavBar">
        <div className="logo"> Om Medical</div>

        <div className={show ? "navlinks showmenu" : "navlinks"}>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About Us</Link>
          </div>
          {isAuthenticated ? (
            <button onClick={handleOnLogout} className="logoutbtn">
              LOGOUT
            </button>
          ) : (
            <button onClick={handleToLogin} className="loginbtn">
              LOGIN
            </button>
          )}
        </div>
        <div onClick={() => setShow(!show)} className="hamburger">
          <GiHamburgerMenu />
        </div>
      </section>
    </>
  );
};

export default NavBar;
