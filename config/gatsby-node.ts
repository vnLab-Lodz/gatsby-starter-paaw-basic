import { CreatePagesArgs } from "gatsby"

const path = require(`path`)

interface Node {
  id: string
  slug: string
  frontmatter: {
    title: string
    data: string
  }
}

interface Data {
  allMdx: {
    edges: Array<{ node: Node }>
  }
}

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions

  const { data } = await graphql<Data>(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            slug
          }
        }
      }
    }
  `)

  data?.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve("./src/templates/chapter.tsx"),
      context: { id: node.id },
    })
  })
}
