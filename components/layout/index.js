import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-100">
      <Navbar />
      <div className="contentContainer w-100">{children}</div>
    </div>
  );
};
export default Layout;
