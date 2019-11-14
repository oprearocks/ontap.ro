import React, { Fragment, useEffect, useState } from "react"
import NothingHere from "./nothing-here"
import { Formik, Form, Field, ErrorMessage } from "formik"


const Record = ({ data }) => (
  <tr className="hover:bg-gray-200">
    <td className="py-4 px-6 border-b border-gray-300">{data.month}</td>
    <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
      {data.kitchen.cold}
    </td>
    <td className="py-4 px-6 text-red-900 border-b border-gray-300">
      {data.kitchen.hot}
    </td>
    <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
      {data.bathroom.cold}
    </td>
    <td className="py-4 px-6 text-red-900 border-b border-gray-300">
      {data.bathroom.hot}
    </td>
    <td className="py-4 px-6 text-blue-900 border-b border-gray-300">
      {data.total.cold}
    </td>
    <td className="py-4 px-6 text-red-900 border-b border-gray-300">
      {data.total.hot}
    </td>
    <td className="py-4 px-6 border-b border-gray-300">
      <a href="/report">Report</a>
    </td>
  </tr>
)

const IndexTable = ({ records, addRecord }) => {

  const noRecords = !records || records.length === 0

  return (
    <div className="max-w-5xl m-auto font-mono mb-20">
      <div className="bg-white shadow-md rounded my-6 overflow-x-scroll">
        <Formik
          initialValues={{
            month: "",
            kitchenHot: "",
            kitchenCold: "",
            bathroomHot: "",
            bathroomCold: "",
          }}
          onSubmit={async (values, actions) => {
            let {
              month,
              kitchenHot,
              kitchenCold,
              bathroomHot,
              bathroomCold,
            } = values

            kitchenHot = parseFloat(kitchenHot).toFixed(3)
            kitchenCold = parseFloat(kitchenCold).toFixed(3)
            bathroomHot = parseFloat(bathroomHot).toFixed(3)
            bathroomCold = parseFloat(bathroomCold).toFixed(3)

            const lastRecord = records[records.length - 1]
            const lastRecordKitchenHot = parseFloat(
              lastRecord.kitchen.hot
            ).toFixed(3)
            const lastRecordKitchenCold = parseFloat(
              lastRecord.kitchen.cold
            ).toFixed(3)
            const lastRecordBathroomHot = parseFloat(
              lastRecord.bathroom.hot
            ).toFixed(3)
            const lastRecordBathroomCold = parseFloat(
              lastRecord.bathroom.cold
            ).toFixed(3)

            let totalHot = 0
            let totalCold = 0

            if (lastRecord) {
              totalHot =
                kitchenHot -
                lastRecordKitchenHot +
                (bathroomHot - lastRecordBathroomHot)
              totalCold =
                kitchenCold -
                lastRecordKitchenCold +
                (bathroomCold - lastRecordBathroomCold)
            }

            const persistenceObject = {
              month,
              kitchen: {
                hot: kitchenHot,
                cold: kitchenCold,
              },
              bathroom: {
                hot: bathroomHot,
                cold: bathroomCold,
              },
              total: {
                hot: parseFloat(totalHot).toFixed(3),
                cold: parseFloat(totalCold).toFixed(3),
              },
            }

            try {
              await addRecord(persistenceObject)
              // save the record
              // re-fetch records and set state
            } catch (error) {
              // handle errors
              console.log(`Go under the sink and write that stuff by hand!`)
            }
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <table className="border-collapse text-center">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                        Month
                      </th>
                      <th
                        className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                        colSpan="2"
                      >
                        🔵 Kitchen 🔴
                      </th>
                      <th
                        className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                        colSpan="2"
                      >
                        🔵 Bathroom 🔴
                      </th>
                      <th
                        className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                        colSpan="2"
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
                        <td colSpan="5" className="py-8">
                          <NothingHere />
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody>
                      {records.map(r => (
                        <Record data={r} key={r.month} />
                      ))}
                    </tbody>
                  )}
                  <tfoot>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                        <Field as="select" id="month" name="month">
                          <option value="January" id="january">
                            January
                          </option>
                          <option value="February" id="february">
                            February
                          </option>
                          <option value="March" id="march">
                            March
                          </option>
                          <option value="April" id="april">
                            April
                          </option>
                          <option value="May" id="may">
                            May
                          </option>
                          <option value="June" id="june">
                            June
                          </option>
                          <option value="July" id="july">
                            July
                          </option>
                          <option value="August" id="august">
                            October
                          </option>
                          <option value="September" id="september">
                            September
                          </option>
                          <option value="October" id="october">
                            October
                          </option>
                          <option value="November" id="november">
                            November
                          </option>
                          <option value="December" id="december">
                            December
                          </option>
                        </Field>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                        <Field
                          type="text"
                          id="kitchenCold"
                          name="kitchenCold"
                          placeholder="12345.678"
                        />
                      </td>
                      <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                        <Field
                          type="text"
                          id="kitchenHot"
                          name="kitchenHot"
                          placeholder="12345.678"
                        />
                      </td>
                      <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                        <Field
                          type="text"
                          id="bathroomCold"
                          name="bathroomCold"
                          placeholder="12345.678"
                        />
                      </td>
                      <td className="py-4 px-6 border-b border-gray-300 bg-gray-100">
                        <Field
                          type="text"
                          id="bathroomHot"
                          name="bathroomHot"
                          placeholder="12345.678"
                        />
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
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default IndexTable
