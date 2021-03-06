/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p style={{color: 'var(--textNormal)'}}>
              Written by <strong>{author}</strong> who lives in Florianópolis Brazil working Fulltime as Lead Frontend Developer at <a href={`https://micromed.ind.br`} target={`_blank`}>Micromed</a>.<br></br> <a href={`https://www.meetup.com/vuefloripa/`} target={`_blank`}>Vue Floripa</a> and <a href={`https://www.meetup.com/ReactJS-Floripa/`} target={`_blank`}>ReactJS Floripa</a> organizer . Feel free to contribute to this blog on <a href={`https://github.com/welitonderesende/weliton.me`} target={`_blank`}>my Github account</a>.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
