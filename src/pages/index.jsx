import * as React from "react"
import { Layout } from "../components/layout"
import { navigate } from "@reach/router"

export const homepageUrl = "/search";

export default function IndexPage({ data }) {

  React.useEffect(() => {
    navigate(homepageUrl);
  }, []);

  return (
    <Layout>
      <div className="text-center my-5" style={{ height: 800 }}>
        Smoke weed everyday...
      </div>
    </Layout>
  )
}
