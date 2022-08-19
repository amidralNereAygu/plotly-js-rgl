// todo
// react flow   [O]
// table        [O]
// comment      [?]
// grafana      [?]

import { useState } from "react";

import ReactFlowTest from "../components/reactflow";
import TableTest from "../components/table";
import Comment from "../components/comment";
import Test from "../components/mysql";
import dynamic from "next/dynamic";
const Graph = dynamic(() => import("../components/graph"), { ssr: false });

const Home = () => {
  const [tab, setTab] = useState("test");

  return (
    <>
      <div>
        <button
          onClick={() => setTab("test")}
          className="btn btn-outline-secondary me-3"
        >
          Test
        </button>
        <button
          onClick={() => setTab("dulguun")}
          className="btn btn-outline-secondary"
        >
          Dulguun ah
        </button>
      </div>
      {tab === "dulguun" && (
        <>
          <ReactFlowTest />
          <TableTest />
          <Comment />
        </>
      )}

      {tab === "test" && (
        <>
          {/* <Test /> */}
          <Graph />
        </>
      )}
    </>
  );
};
export default Home;
