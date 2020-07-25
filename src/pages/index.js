import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      background: '#f4f4f4'
    }}>
      {data.allCatalogueCsv.edges.map(({ node }, index) => (
        <article key={index} style={{
          display: 'inline-block',
          margin: '0.5em',
          border: 'solid 1px #999',
          background: 'white'
        }}>
          <h3>{node.name}</h3>
          <h4>{node.category}</h4>
          <p>{node.size}</p>
          <p>{node.price_per_unit}</p>
          <p><strong>Pieces per pack:</strong> {node.pieces_per_pack}</p>
          <p><a href={`https://swarovski-professional.com/en-WORLD${node.url}`} target="_blank">More info</a></p>
          <img src={`https://swarovski-professional.com${node.thumbnail_2x}`} alt=""/>
        </article>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allCatalogueCsv(limit: 756) {
      edges {
        node {
          category
          colour
          mat_no
          id
          name
          pieces_per_pack
          price_per_unit
          size
          subtitle
          suggested_mat_no
          summary
          thumbnail
          thumbnail_2x
          url
          variant
          variants_info
          vector
        }
      }
    }
  }
`

export default IndexPage
