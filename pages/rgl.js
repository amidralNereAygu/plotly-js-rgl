import dynamic from "next/dynamic";
const Graph = dynamic(() => import("../components/graph"), { ssr: false });

const RGL = () => {
  return (
    <div>
      <Graph />
    </div>
  );
};
export default RGL;
