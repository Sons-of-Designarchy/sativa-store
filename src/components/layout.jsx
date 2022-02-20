import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"

export function Layout({ children, headerBottom }) {
  return (
    <div className="layout-bg">
      <Seo />
      <SkipNavLink />
      <Header headerBottom={headerBottom} />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
    </div>
  )
}
