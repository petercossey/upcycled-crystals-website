import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 className="font-normal text-lg px-4 pt-4 text-gray-900">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <p className="text-xs leading-normal text-gray-700 p-4">
      <strong>Please note</strong> - Where the product listing says "Search result differs from mat no." that means that the product image and description comes from an autosuggested search result from the 5w4r0v5k1 website which has a different material number than the original search term. Any product selections based on those listings should be double-checked with 5w4r0v5k1 contacts.<br /><br />
      <Link to="/cheaper/" className="link">Products less than $144</Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
