import Chart from "react-apexcharts";

export default function ChartSection() {
  return (
    <>
      <div className="w-full">
        <div className="w-full aspect-video  "></div>
        <Chart
          className="w-full h-full"
          //  options={this.state.options}
          //   series={this.state.series}
          type="line"
        />
      </div>
    </>
  );
}
