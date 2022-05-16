import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/page-layout"
import Seo from "../components/seo"

interface Data {
  mdx: {
    id: string
    body: string & React.ReactNode
    frontmatter: {
      title: string
    }
  }
}

const Chapter: React.FC<PageProps<Data>> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} />
      <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Chapter
