/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import { ProvideAuth } from '../lib/use-auth'

import "./layout.css"

require("typeface-ibm-plex-mono")
require("typeface-ibm-plex-sans")

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ProvideAuth>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </ProvideAuth>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
