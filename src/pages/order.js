import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import LinkSVG from "../components/assets/external-link.svg"

const OrderPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col sm:flex-row sm:flex-wrap">
      {data.allCustomOrderCsv.edges.map(({ node }, index) => (
        <div
          key={index}
          className="px-3 mb-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5"
        >
          <article className="bg-white rounded-lg shadow flex flex-row-reverse p-4">
            <div className="product__text w-2/3 pl-3">
              <h3 className="font-normal text-base text-gray-900">
                {node.name}{" "}
                <span className="text-base px-2 py-1 text-orange-800 leading-4 font-medium bg-orange-100 rounded-full mr-2 mb-2 inline-block">
                  <strong>
                    €{new Intl.NumberFormat().format(node.price_per_unit)}
                  </strong>
                </span>
              </h3>
              <p className="my-1 text-sm text-gray-700">
                <span className="font-bold">{node.category} - </span>{" "}
                {node.variant}
              </p>
              <div className="text-sm">
                <span className="px-1 py-1 text-teal-800 leading-4 font-medium bg-teal-100 rounded-full mr-2 mb-2 inline-block">
                  <strong>Size:</strong> {node.size}
                </span>
                <span className="px-1 py-1 text-blue-800 leading-4 font-medium bg-blue-100 rounded-full mr-2 mb-2 inline-block">
                  <strong>Pieces per pack:</strong> {node.pieces_per_pack}
                </span>
              </div>
              <div className="text-right">
                <a
                  href={`https://swarovski-professional.com/en-WORLD${node.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex link underline text-gray-700 hover:text-gray-500 py-2 text-sm"
                >
                  <span className="mr-1">More info</span> <LinkSVG />
                </a>
              </div>
            </div>
            <div className="product__image w-1/3">
              <img
                src={`https://swarovski-professional.com${node.thumbnail_2x}`}
                alt=""
                className="w-full h-auto"
              />
              <div className="text-xs my-2">
                <label
                  class="block text-gray-500 font-bold mb-1 pr-2"
                  htmlFor="inline-mat-no"
                  id="inline-mat-no-label"
                >
                  Mat No.
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-mat-no"
                    type="text"
                    value={node.mat_no}
                  />
                </label>
                {node.mat_no !== node.suggested_mat_no &&
                  <p className="text-gray-500 text-xs">Search result differs from mat no.</p>
                }
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query OrderQuery {
    allCustomOrderCsv {
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

export default OrderPage
