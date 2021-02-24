import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout style={{ display: `flex`, flexDirection: `column`, flexWrap: `nowrap`, height: `100vh`, alignContent: `center`, alignItems: `center`, minWidth: `400px` }}>
    <SEO title="404: Not found" />
    <h1 style={{ textAlign: `center`, paddingTop: `20vh` }}>Oops, this page doesn't exist yet! <br /> <br />
    <Link to="/"><button>Click to go home!</button></Link>
  </h1>
  </Layout>
)

export default NotFoundPage
