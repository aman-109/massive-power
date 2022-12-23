
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const StockChart = ({ data }) => {
  const options = {
    // chart: {
    //   type: "spline"
    // },
    chart: {
      height: 600
    },

    credits: {
      enabled: false
    },

    legend: {
      enabled: true
    },

    // yAxis: [{
    //   offset: 20,

    //   labels: {
    //     // formatter: function () {
    //     //   return numberFormat.format(data.map(ele=>ele[1]))
    //     // }
    //     category:numberFormat.format(data.map(ele=>ele[1]))
    //     ,
    //     // x: -15,
    //     // style: {
    //     //   "color": "#000", "position": "absolute"

    //     // },
    //     align: 'left'
    //   },
    // },

    // ],
    xAxis: {
      type: "date"
    },
    // tooltip: {
    //   shared: true,
    //   formatter: function () {
    //     return numberFormat.format(data.map(ele=>ele[1]), 0) +  '</b><br/>' + moment(data.map(ele=>ele[0])).format('MMMM Do YYYY, h:mm')
    //   }
    // },
    title: {
      text: "My chart"
    },
    series: [
      {
        data,
        name: "Price",
        type: "spline",

        tooltip: {
          valueDecimals: 2
        }

        // color: {
        //   linearGradient: [1200, 0, 0, 0],
        //   stops: [
        //     [0, "#00b072"],
        //     [1, "#fcc203"]
        //   ]
        // }
      }
    ],
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6
      }
    },
    scrollbar: {
      enabled: true
    },
    navigator: {
      enabled: true
    },
    rangeSelector: {
      allButtonsEnabled: true,
      // verticalAlign: "top",
      // buttonPosition: {
      //   align: "right"
      // },
      // inputPosition: {
      //   align: "left"
      // },
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