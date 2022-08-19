import React, { useState } from "react";

const TableTest = () => {
  const [column1Width, setColumn1Width] = useState([null, null, null, null]);
  const [fontSize, setFontSize] = useState(null);
  const [which, setWhich] = useState(0);

  return (
    <>
      <h1>Table width</h1>
      <div className="d-flex justify-content-between align-items-center row">
        <div className="col-6">
          <h3>Test table header</h3>
        </div>
        <div className="col-6">
          <div className="row d-flex align-items-center">
            <div className="col-4">
              <label htmlFor="width" role="button">
                Column {which + 1} width
              </label>
            </div>
            <div className="col">
              <input
                className="form-control"
                id="width"
                name="width"
                onKeyDown={(e) =>
                  e.code &&
                  setColumn1Width((prev) => {
                    const result = [...prev];
                    result[which] = e.target.value;
                    return [...result];
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center row">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="row d-flex align-items-center">
            <div className="col-4">
              <label htmlFor="fontSize" role="button">
                Font size
              </label>
            </div>
            <div className="col">
              <input
                className="form-control"
                id="fontSize"
                name="fontSize"
                onKeyDown={(e) => e.code && setFontSize(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <table
        className="table table-striped table-bordered w-100"
        style={{ fontSize: fontSize }}
      >
        <thead className="table-dark">
          <tr>
            <th
              role="button"
              onClick={() => setWhich(0)}
              scope="col"
              style={{ width: column1Width[0] }}
            >
              #
            </th>
            <th
              role="button"
              onClick={() => setWhich(1)}
              scope="col"
              style={{ width: column1Width[1] }}
            >
              First
            </th>
            <th
              role="button"
              onClick={() => setWhich(2)}
              scope="col"
              style={{ width: column1Width[2] }}
            >
              Last
            </th>
            <th
              role="button"
              onClick={() => setWhich(3)}
              scope="col"
              style={{ width: column1Width[3] }}
            >
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableTest;
