import { useNavigate, Link } from "react-router-dom";

export default function NavbarComponent(props) {
  const navigate = useNavigate();
  return (
    <div className="navbar text-white">
      <nav className="leftNavbarContainer text-white">
        <div className="navItem text-white  font-bold" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="navItem text-white font-bold" onClick={() => navigate("discover")}>
          Discover
        </div>
        <div className="navItem text-lg text-white font-black" onClick={() => navigate("create_project")}>
          Start a project
        </div>
      </nav>
      <div className="centerNavbarContainer">BACKIT</div>
      <div className="rightNavbarContainer">
        <div className="navItem">
          <Link to="/profile" state={{ address: props.address }}>
            {props.address.slice(0,5) + "..." + props.address.slice(props.address.length - 4, props.address.length)}
          </Link>
        </div>
      </div>
    </div>
  );
}
