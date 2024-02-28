import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import RoleNav from "./RoleNav";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const [showProductTable, setShowProductTable] = useState(false);

  useEffect(() => {
    if (user.role === "Admin") {
      setShowProductTable(true);
    } else {
      setShowProductTable(false);
    }
  }, [user]);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    navigate("/");
    window.location.reload();
  }
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };
  

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
    <li class="nav-item">
      <Link onClick={handleLinkClick} to="/user/delivery/register" class="nav-link active" aria-current="page">
        <b className="text-color">Add Delivery Agent</b>
      </Link>
    </li>

    <li class="nav-item">
      <Link onClick={handleLinkClick} to="/addcategory" class="nav-link active" aria-current="page">
        <b className="text-color">Add Category</b>
      </Link>
    </li>
    <li class="nav-item">
      <Link onClick={handleLinkClick} to="/addproduct" class="nav-link active" aria-current="page">
        <b className="text-color">Add Product</b>
      </Link>
    </li>
    <li class="nav-item">
      <Link onClick={handleLinkClick} to="/user/admin/allorder" class="nav-link active" aria-current="page">
        <b className="text-color">All Order</b>
      </Link>
    </li>
    <li class="nav-item">
      <Link onClick={handleLinkClick} to="/user/admin/assigndelivery" class="nav-link active" aria-current="page">
        <b className="text-color">Book Delivery</b>
      </Link>
    </li>
    {showProductTable && (
               <li class="nav-item">
               <Link onClick={handleLinkClick} to="/admin/products" class="nav-link active" aria-current="page">
                 <b className="text-color">Products</b>
               </Link>
             </li>
            )}

    <li class="nav-item">
      <Link
        to=""
        class="nav-link active"
        aria-current="page"
        onClick={adminLogout}
      >
        <b className="text-color">Logout</b>
      </Link>
      <ToastContainer />
    </li>
  </ul>
  );
};

export default AdminHeader;