import React from "react"
import NothingHere from "./nothing-here"

const Overview = ({ records }) => {
  const noRecords = !records || records.length === 0
  return (
    <div className="my-20 w-full p-20 bg-blue-200">
      <div className="max-w-5xl m-auto font-mono">
        <div className="text-center">
          <div className="mb-12 text-center">
            <select className="align-middle text-4xl mr-4" disabled={noRecords}>
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
                    <span aria-role="img" aria-label="Faucet emoji">
                      🚰
                    </span>{" "}
                    1.4mc
                    <br />
                    <span aria-role="img" aria-label="Bath tub emoji">
                      🛁
                    </span>{" "}
                    14mc
                  </td>
                  <td>
                    <span aria-role="img" aria-label="Faucet emoji">
                      🚰
                    </span>{" "}
                    1.2mc
                    <br />
                    <span aria-role="img" aria-label="Bath tub emoji">
                      🛁
                    </span>{" "}
                    1.2mc
                  </td>
                  <td>
                    <span aria-role="img" aria-label="Snowflake emoji">
                      🔵
                    </span>{" "}
                    2.6mc
                    <br />
                    <span aria-role="img" aria-label="Flame emoji">
                      🔴
                    </span>{" "}
                    7.11mc
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
