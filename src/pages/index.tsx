import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/page-layout"
import Seo from "../components/seo"

interface Node {
  id: string
  slug: string
  frontmatter: {
    title: string
  }
}

interface Data {
  allMdx: {
    nodes: Node[]
  }
}

const IndexPage: React.FC<PageProps<Data>> = ({ data: { allMdx } }) => (
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
    <h2>Chapters</h2>
    <ul>
      {allMdx.nodes.map(node => (
        <li key={node.id}>
          <Link to={"/" + node.slug} style={{ color: "#00b140" }}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage
