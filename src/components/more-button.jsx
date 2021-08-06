import * as React from "react"
import { Link } from "gatsby"

export function MoreButton({ className, ...props }) {
  return <Link className="sativa-btn" {...props} />
}
