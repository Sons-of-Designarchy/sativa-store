import * as React from "react"
import { navigate } from "gatsby"
import { homepageUrl } from ".."



export default function Tienda() {

  React.useEffect(() => {
    navigate(homepageUrl);
  }, []);

  return 'high';
}
