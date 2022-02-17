import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import { SearchProvider } from "../context/search-provider"

export function Layout({ children, headerBottom }) {
  return (
    <div className="layout-bg">
      <Seo />
      <SkipNavLink />
      <Header headerBottom={headerBottom} />
      <SearchProvider>
        <SkipNavContent>{children}</SkipNavContent>
      </SearchProvider>
      <Footer />
    </div>
  )
}
