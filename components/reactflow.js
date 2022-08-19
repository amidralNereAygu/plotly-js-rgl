import React, { useState, useCallback } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";
import { Mouse3, Apple, Motherboard } from "react-bootstrap-icons";

const ReactFlowTest = () => {
  // react flow
  const initialNodes = [
    {
      id: "1",
      type: "input",
      sourcePosition: "right",
      data: {
        label: (
          <div className="d-flex justify-content-around align-items-center">
            Node 1
            <Apple />
          </div>
        ),
      },
      position: { x: 0, y: 25 },
    },

    {
      id: "2",
      data: {
        label: (
          <div className="d-flex justify-content-around align-items-center">
            Node 2 <Mouse3 />
          </div>
        ),
      },
      position: { x: 300, y: 25 },
      targetPosition: "left",
      sourcePosition: "right",
    },
    {
      id: "3",
      type: "output",
      targetPosition: "left",
      data: {
        label: (
          <div className="d-flex justify-content-around align-items-center">
            <input
              className="w-50"
              defaultValue="Node 3"
              style={{ outline: "none", border: "none" }}
            />
            <Motherboard />
          </div>
        ),
      },
      position: { x: 600, y: 25 },
    },
  ];
  const [nodes, setNodes] = useState(initialNodes);

  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <>
      <h1>React flow</h1>
      <div style={{ width: "100%", height: "50vh", border: "1px solid black" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </>
  );
};

export default ReactFlowTest;
