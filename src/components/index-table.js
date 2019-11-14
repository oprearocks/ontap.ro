import React, { Fragment } from "react"
import NothingHere from "./nothing-here"

const IndexTable = ({ records }) => {
  const noRecords = !records || records.length === 0

  return (
    <div className="max-w-5xl m-auto font-mono mb-20">
      <div className="bg-white shadow-md rounded my-6 overflow-x-scroll">
        <table className="border-collapse text-center">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Month
              </th>
              <th
                className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                colspan="2"
              >
                🔵 Kitchen 🔴
              </th>
              <th
                className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                colspan="2"
              >
                🔵 Bathroom 🔴
              </th>
              <th
                className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                colspan="2"
              >
                🔵 Total 🔴
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Actions
              </th>
            </tr>
          </thead>
          {noRecords ? (
            <tbody>
              <tr>
              <td colspan="5" className="py-8"><NothingHere /></td>
              </tr>
              </tbody>
          ) : (
            <tbody>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b border-gray-300">
                  September
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  234234234
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  234324324
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  21123333
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  12344555
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  2.34
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  11.41
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <a href="/report">Report</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b border-gray-300">October</td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  234234234
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  234324324
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  21123333
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  12344555
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  2.34
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  11.41
                </td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <a href="/report">Report</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b border-gray-300">November</td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  234234234
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  234324324
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  21123333
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  12344555
                </td>
                <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
                  {" "}
                  2.34
                </td>
                <td className="py-4 px-6 text-red-900 border-b border-gray-300">
                  {" "}
                  11.41
                </td>
                <td className="py-4 px-6 border-gray-300">
                  <a href="/report">Report</a>
                </td>
              </tr>
            </tbody>
          )}
          <tfoot>
            <tr>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                <select>
                  <option value="january" id="month-1">
                    January
                  </option>
                  <option value="february" id="month-2">
                    February
                  </option>
                  <option value="march" id="month-3">
                    March
                  </option>
                  <option value="april" id="month-4">
                    April
                  </option>
                  <option value="may" id="month-5">
                    May
                  </option>
                  <option value="june" id="month-6">
                    June
                  </option>
                  <option value="july" id="month-7">
                    July
                  </option>
                  <option value="august" id="month-8">
                    October
                  </option>
                  <option value="september" id="month-9">
                    September
                  </option>
                  <option value="october" id="month-10">
                    October
                  </option>
                  <option value="november" id="month-11">
                    November
                  </option>
                  <option value="december" id="month-12">
                    December
                  </option>
                </select>
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                <input type="text" id="kitchen-cold" placeholder="cold" />
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                <input type="text" id="kitchen-hot" placeholder="hot" />
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                <input type="text" id="bathroom-cold" placeholder="cold" />
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                <input type="text" id="bathroom-hot" placeholder="hot" />
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                0
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                0
              </td>
              <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                <button type="submit">Save</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default IndexTable
