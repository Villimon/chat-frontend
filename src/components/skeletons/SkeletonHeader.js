import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonHeader = (props) => (
  <ContentLoader
    speed={2}
    width={370}
    height={80}
    viewBox="0 0 370 80"
    backgroundColor="#573f97"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="54" y="87" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="20" cy="40" r="17" />
    <rect x="60" y="33" rx="14" ry="14" width="156" height="15" />
    <rect x="328" y="27" rx="6" ry="6" width="28" height="28" />
  </ContentLoader>
)

export default SkeletonHeader