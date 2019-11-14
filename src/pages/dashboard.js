import React, { Fragment, useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import Overview from "../components/overview"
import IndexTable from "../components/index-table"
import Image from "../components/image"
import SEO from "../components/seo"
import bear from "../images/bear.jpg"
import seals from "../images/seals.jpg"
import firebase from "../lib/firebase"
import { useAuth } from "../lib/use-auth"

const db = firebase.firestore()

const DashboardPage = () => {
  const [records, setRecords] = useState([])
  const auth = useAuth()
  const { user } = auth

  if (user) {
    db.collection("records")
      .where("userID", "==", user.uid).orderBy("createdAt", "asc")
      .onSnapshot(querySnapshot => {
        let userRecords = []
        querySnapshot.forEach(doc => userRecords.push(doc.data()))
        if (userRecords) {
          setRecords(userRecords)
        } else {
          setRecords([])
        }
      })
  }

  const addRecord = data =>
    db
      .collection("records")
      .doc()
      .set({
        ...data,
        createdAt: new Date(),
        userID: user.uid
      })

  return (
    <Fragment>
      <SEO title="Welcome to the OnTap Dashboard" />
      <div className="max-w-5xl mx-auto font-mono mt-20 mb-0">
        <h2 className="leading-tight tracking-wider text-2xl font-bold uppercase text-gray-700">
          Dashboard
        </h2>
      </div>
      <Overview records={records} />
      <IndexTable records={records} addRecord={addRecord} />
    </Fragment>
  )
}

export default DashboardPage
