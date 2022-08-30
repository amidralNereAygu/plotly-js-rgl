import Plotly from "plotly.js";
import createPlotComponent from "react-plotly.js/factory";
const Plot = createPlotComponent(Plotly);

const TimeLine = ({ data }) => {
  return (
    <>
      <Plot data={data} layout={null} />
    </>
  );
};
export default TimeLine;
