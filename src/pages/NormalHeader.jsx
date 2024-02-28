import { Link } from "react-router-dom";

const NormalHeader = () => {
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          onClick={handleLinkClick}
          to="/user/forget-password"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Forget Password</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          onClick={handleLinkClick}
          to="/user/customer/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          onClick={handleLinkClick}
          to="/user/login"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Login User</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
