import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const changeLocationToRglPage = () => router.push("/rgl");
  useEffect(() => {
    changeLocationToRglPage();
  }, []);
  return <></>;
};
export default Home;
