import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-light d-flex align-items-center px-4 w-100 row navbarContainer">
      <div className="col-2">
        <Link href="/">
          <a className="text-decoration-none text-dark">Navbar</a>
        </Link>
      </div>
      <div className="col">
        <Link href="/rgl">
          <a className="text-decoration-none text-dark me-3">RGL</a>
        </Link>
        <Link href="/study">
          <a className="text-decoration-none text-dark me-3">Dulguun</a>
        </Link>
        <Link href="/state">
          <a className="text-decoration-none text-dark ">State</a>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
