import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonDialogs = (props) => (
    <ContentLoader
        speed={2}
        width={340}
        height={80}
        viewBox="0 0 340 80"
        backgroundColor="#573f97"
        foregroundColor="#fcfcfc"
        {...props}
    >
        <rect x="54" y="87" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <rect x="99" y="17" rx="14" ry="14" width="100" height="16" />
        <circle cx="45" cy="40" r="30" />
        <rect x="99" y="51" rx="14" ry="14" width="189" height="10" />
    </ContentLoader>
)

export default SkeletonDialogs