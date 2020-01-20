import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/home/home"
import Experience from "../components/experience/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid">
      <div className="container-fluid">
        <Home></Home>
      </div>
      <div className="container-fluid" id="aa">
        <Experience></Experience>
      </div>
    </div>
  </Layout>
)

export default IndexPage
