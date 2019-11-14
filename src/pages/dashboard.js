import React, { Fragment, useEffect } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import { useAuth } from "../lib/use-auth"
import Overview from "../components/overview"
import IndexTable from "../components/index-table"
import Image from "../components/image"
import SEO from "../components/seo"
import bear from "../images/bear.jpg"
import seals from "../images/seals.jpg"

const DashboardPage = () => (
  <Fragment>
    <SEO title="Welcome to the OnTap Dashboard" />
    <div className="max-w-5xl mx-auto font-mono mt-20 mb-0">
      <h2 className="leading-tight tracking-wider text-2xl font-bold uppercase text-gray-700">Dashboard</h2>
    </div>
    <Overview />
    <IndexTable />
  </Fragment>
)

export default DashboardPage
