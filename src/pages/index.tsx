import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/PageLayout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Congratulations!</h1>
    <p>You have successfully created your first PaaW project.</p>
    <p>Use this Gatsby starter to create something great!</p>
    <StaticImage
      src="../images/gatsby-love.png"
      width={450}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`, marginLeft: -20 }}
    />
    <p>
      <Link to="/page-two/" style={{ color: "#00b140" }}>
        Go to page 2
      </Link>
    </p>
  </Layout>
)

export default IndexPage
