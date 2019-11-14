import React, { useState } from "react"
import NothingHere from "./nothing-here"
const DefaultValues = {
    kitchen: {
      cold: 0,
      hot: 0,
    },
    bathroom: {
      cold: 0,
      hot: 0,
    },
    total: {
      cold: 0,
      hot: 0,
    }
  };

const Overview = ({ records }) => {
  const calculateStats = (v) => {
    const lastMonthRecord = records[records.length - 1]

    const kitchenHot = parseFloat(lastMonthRecord.kitchen.hot).toFixed(3)
    const kitchenCold = parseFloat(lastMonthRecord.kitchen.cold).toFixed(3)
    const bathroomHot = parseFloat(lastMonthRecord.bathroom.hot).toFixed(3)
    const bathroomCold = parseFloat(lastMonthRecord.bathroom.cold).toFixed(3)

    const previousMonthRecord = records[records.length - 2]
    const previousMonthRecordKitchenHot = parseFloat(
      previousMonthRecord.kitchen.hot
    ).toFixed(3)
    const previousMonthRecordKitchenCold = parseFloat(
      previousMonthRecord.kitchen.cold
    ).toFixed(3)
    const previousMonthRecordBathroomHot = parseFloat(
      previousMonthRecord.bathroom.hot
    ).toFixed(3)
    const previousMonthRecordBathroomCold = parseFloat(
      previousMonthRecord.bathroom.cold
    ).toFixed(3)

    return {
      kitchen: {
        cold: kitchenCold - previousMonthRecordKitchenCold,
        hot: kitchenHot - previousMonthRecordKitchenHot
      },
      bathroom: {
        cold: bathroomCold - previousMonthRecordBathroomCold,
        hot: bathroomHot - previousMonthRecordBathroomHot
      },
      total: {
        cold: lastMonthRecord.total.cold,
        hot: lastMonthRecord.total.hot,
      }
    }
  }

  const noRecords = !records || records.length === 0
  let initialState = DefaultValues;
  if (!noRecords) {
    const stats = calculateStats();
    Object.assign(initialState, stats);
  }

  const [totalsByConsumption, setTotalsByConsumption] = useState(initialState);


  return (
    <div className="my-20 w-full p-20 bg-blue-100">
      <div className="max-w-5xl m-auto font-mono">
        <div className="text-center">
          <div className="mb-12 text-center">
            <select onChange={(v) => {
              const values = calculateStats();
              setTotalsByConsumption(values);
            }} className="align-middle text-4xl mr-4" disabled={noRecords}>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <h2 className="inline-block align-middle leading-tight text-5xl font-bold">
              summary
            </h2>
          </div>

          {noRecords ? (
            <NothingHere />
          ) : (
            <table className="w-full">
              <thead className="text-xl tracking-widest uppercase text-gray-700">
                <tr>
                  <th>Cold</th>
                  <th>Hot</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="text-3xl font-bold text-blue-900">
                <tr>
                  <td>
                    <span role="img" aria-label="Faucet emoji">
                      🚰
                    </span>{" "}
                    {totalsByConsumption.kitchen.cold.toFixed(3)}mc
                    <br />
                    <span role="img" aria-label="Bath tub emoji">
                      🛁
                    </span>{" "}
                    {totalsByConsumption.bathroom.cold.toFixed(3)}mc
                  </td>
                  <td>
                    <span role="img" aria-label="Faucet emoji">
                      🚰
                    </span>{" "}
                    {totalsByConsumption.kitchen.hot.toFixed(3)}mc
                    <br />
                    <span role="img" aria-label="Bath tub emoji">
                      🛁
                    </span>{" "}
                    {totalsByConsumption.bathroom.hot.toFixed(3)}mc
                  </td>
                  <td>
                    <span role="img" aria-label="Snowflake emoji">
                      🔵
                    </span>{" "}
                    {totalsByConsumption.total.cold}mc
                    <br />
                    <span role="img" aria-label="Flame emoji">
                      🔴
                    </span>{" "}
                    {totalsByConsumption.total.hot}mc
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Overview
