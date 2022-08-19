import { useState } from "react";

const Test = () => {
  const [host, setHost] = useState("");
  const [database, setDatabase] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onConnect = async () => {
    const responnse = await fetch("/api/hello");
    const result = await responnse.json();
    console.log(result);
  };
  const onClear = () => {
    setHost("");
    setDatabase("");
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <h1>MYSQL</h1>
      <div className="d-flex justify-content-center align-items-center row ">
        <div className="col-10 col-md-8 col-lg-6 col-xl-3 d-flex flex-column mt-5 border p-4">
          <h1>My sql database</h1>
          <input
            className="form-control mb-3"
            id="database"
            name="database"
            type="text"
            placeholder="Enter your database"
            value={database}
            onChange={(e) => setDatabase(e.target.value)}
          />
          <input
            className="form-control mb-3"
            id="host"
            name="host"
            type="text"
            placeholder="Enter your host"
            value={host}
            onChange={(e) => setHost(e.target.value)}
          />
          <input
            className="form-control mb-3"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="form-control mb-3"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-group">
            <button className="btn btn-dark w-50" onClick={onConnect}>
              Connect
            </button>
            <button className="btn btn-outline-dark w-50" onClick={onClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
