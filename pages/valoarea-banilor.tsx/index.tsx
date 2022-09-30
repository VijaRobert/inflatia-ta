import { formatISO, parseISO, sub } from "date-fns";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Inflation } from "../../data/inflation";
import { TypeInflation } from "../../types/data/inflation";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PageMoneyValue: NextPage = () => {
  //Set Inflation by date
  const [inflationByDate, setInflationByDate] =
    useState<TypeInflation[]>(Inflation);

  //Date and Ammout
  const [minDate, setMinDate] = useState<Date>(
    parseISO(Inflation[0].date) > sub(new Date(), { years: 10 })
      ? parseISO(Inflation[0].date)
      : sub(new Date(), { years: 10 })
  );
  const [ammount, setAmmount] = useState<number>(100);

  //Set Series
  const [series, setSeries] = useState(
    calculateMoneyDepreciation({ ammount, Inflation: inflationByDate })
  );

  //Change Chart on Input Change
  useEffect(() => {
    setInflationByDate(
      inflationByDate.filter((item) => {
        return parseISO(item.date) > minDate;
      })
    );
  }, [minDate]);

  useEffect(() => {
    if (ammount)
      setSeries(
        calculateMoneyDepreciation({
          ammount: ammount,
          Inflation: inflationByDate,
        })
      );
  }, [inflationByDate, ammount]);

  useEffect(() => {
    console.log(series);
    console.log(inflationByDate);
  }, [series]);

  console.log(minDate);

  return (
    <div>
      {/* Input Changes */}
      <div className=" w-full mb-8 ">
        <h2 className="">Alege suma si data de inceput:</h2>
        <div className=" max-w-lg grid grid-cols-2 gap-2">
          <input
            type="number"
            min={1}
            max={1000000}
            defaultValue={ammount}
            onChange={(e) => {
              setAmmount(parseFloat(e.target.value));
            }}
          />

          <input
            type="date"
            min={Inflation[0].date}
            defaultValue={formatISO(minDate, { representation: "date" })}
            onChange={(e) => {
              setMinDate(parseISO(e.target.value));
            }}
          />
        </div>

        <div className="">
          {ammount ? (
            <h4 className="">
              <span className="font-bold text-green-600">{ammount} LEI</span>{" "}
              pusi sub saltea pe data de{" "}
              <b>{formatISO(minDate, { representation: "date" })}</b> valoreaza
              azi{" "}
              <span className="font-bold text-red-600">
                {series.slice(-1)[0].y}
              </span>
            </h4>
          ) : null}
        </div>
      </div>

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
                text: "Valoarea banilor in timp",
                align: "left",
              },
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
            series={[
              {
                name: "LEI",
                data: series,
                color: "#FF0000",
              },
            ]}
            type="line"
          />
        </div>
      </div>
    </div>
  );
};

export default PageMoneyValue;

function calculateMoneyDepreciation({
  ammount,
  Inflation,
}: {
  ammount: number;
  Inflation: TypeInflation[];
}) {
  let newAmmount = ammount;

  return Inflation.map((i) => {
    const change = i.change;
    const depreciator = newAmmount / (newAmmount * ((100 + change) / 100));

    const data = {
      x: new Date(i.date).getTime(),
      y: newAmmount.toFixed(2) + " LEI",
    };

    newAmmount = newAmmount * depreciator;

    return data;
  });
}
