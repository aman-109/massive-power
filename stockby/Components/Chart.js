
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const StockChart = ({ data }) => {
  const options = {
    chart: {
      type: "spline"
    },
    title: {
      text: "My chart"
    },
    series: [
      {
        data,
        color: {
          linearGradient: [1200, 0, 0, 0],
          stops: [
            [0, "#00b072"],
            [1, "#fcc203"]
          ]
        }
      }
    ],
    scrollbar: {
      enabled: false
    },
    navigator: {
      enabled: false
    },
    rangeSelector: {
      allButtonsEnabled: true,
      verticalAlign: "top",
      buttonPosition: {
        align: "right"
      },
      inputPosition: {
        align: "left"
      },
      buttons: [
        {
          type: "week",
          count: 1,
          text: "1W"
        },
        {
          type: "month",
          count: 1,
          text: "1M"
        },
        {
          type: "month",
          count: 6,
          text: "6M"
        },
        {
          type: "year",
          count: 1,
          text: "1Y"
        },
        {
          type: "year",
          count: 3,
          text: "3Y"
        },
        {
          type: "year",
          count: 5,
          text: "5Y"
        },
        {
          type: "all",
          text: "All"
        }
      ],
      selected: 2
    }
  };

  return (
    <div>
      <h3>Stock Chart</h3>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
      <hr />
    </div>
  );
};

export default StockChart;