import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link as GatsbyLink } from "gatsby"
import { Helmet } from "react-helmet"
import { useStackedPagesProvider, Link, LinkToStacked } from "react-stacked-pages-hook"

import "./BrainNote.css"

const BrainNote = ({ note }) => {
  const [, state, navigate] = useStackedPagesProvider()

  return (
    <div className="BrainNote">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{note.title}</title>
      </Helmet>

      <h1 className="BrainNote__title">{note.title}</h1>

      <div className="BrainNote__content">
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </div>

      <div className="BrainNote__footer">
        <div className="BrainNote__links">
          {note.inboundReferencePreviews && note.inboundReferencePreviews.length > 0 && (
            <div className="BrainNote__linksSection">
              <h3>Referenced in</h3>
              {note.inboundReferencePreviews.map(ref => (
                <div key={ref.source}>
                  <LinkToStacked to={ref.source} className="BrainNote__link">
                    {ref.title}
                  </LinkToStacked>
                  <div className="BrainNote__linkContext">{ref.previewMarkdown}</div>
                </div>
              ))}
            </div>
          )}

          {note.outboundReferencePreviews && note.outboundReferencePreviews.length > 0 && (
            <div className="BrainNote__linksSection">
              <h3>Links to</h3>
              {note.outboundReferencePreviews.map(ref => (
                <div key={ref.target}>
                  <LinkToStacked to={ref.target} className="BrainNote__link">
                    {ref.title}
                  </LinkToStacked>
                  <div className="BrainNote__linkContext">{ref.previewMarkdown}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="BrainNote__feedback">
          If you'd like to share an idea or your thoughts on something in this note feel free to send me a{" "}
          <a href="https://x.com/lukeallenmiller" target="_blank" rel="noopener noreferrer">
            direct message
          </a>
          .
        </div>
      </div>
    </div>
  )
}

export default BrainNote
