import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/page-layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>This is the second page!</h1>
    <p>
      Find me at <code>src/pages/page-two.tsx</code>
    </p>
    <Link to="/" style={{ color: "#00b140" }}>
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
