import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Hello, I am Brecht Nulens" 
      keywords={[`profile`, `presentation`, `Brecht`, `developer`]}
      />
      <h3>This will be the only page</h3>
  </Layout>
)

export default IndexPage
