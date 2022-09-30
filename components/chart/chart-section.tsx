import dynamic from "next/dynamic";
import { Inflation } from "../../data/inflation";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartSection({}) {
  //Get Dates
  // const dates = Inflation.map((i) => {
  //   return i.date.substring(0, 7);
  // });
  //Series
  const series: ApexAxisChartSeries = [
    {
      name: "Inflation",
      data: Inflation.map((i) => {
        return {
          x: new Date(i.date).getTime(),
          y: i.value,
        };
      }),
      color: "#FF0000",
    },
    {
      name: "Tuborg",
      data: [
        {
          x: new Date("2022-01-01").getTime(),
          y: "3.5",
        },
        {
          x: new Date("2022-03-01").getTime(),
          y: "3.8",
        },
        {
          x: new Date("2022-05-01").getTime(),
          y: "4.2",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="w-full aspect-video  ">
          <Chart
            options={{
              chart: {
                type: "line",
                zoom: {
                  enabled: true,
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: "straight",
              },
              title: {
                text: "Product Trends by Month",
                align: "left",
              },
              yaxis: [
                {
                  seriesName: "Inflation",
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: "#00E396",
                  },
                  labels: {
                    style: {
                      colors: "#00E396",
                    },
                  },
                  title: {
                    text: "Inflatia",
                    style: {
                      color: "#00E396",
                    },
                  },
                },
                {
                  seriesName: "Tuborg",
                  opposite: false,
                  axisTicks: {
                    show: true,
                  },

                  title: {
                    text: "Tuborg",
                  },
                },
              ],
              grid: {
                row: {
                  colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                  opacity: 0.5,
                },
              },
              xaxis: {
                type: "datetime",
              },
            }}
            series={series}
            type="line"
          />
        </div>
      </div>
    </>
  );
}
