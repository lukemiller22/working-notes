import React from 'react'
import ReferredBlock from 'gatsby-theme-andy/src/components/ReferredBlock'
import './Footer.css'

const Footer = ({ references = [] }) => {
  return (
    <footer className="footer">
      {references.length > 0 && (
        <div className="footer__references">
          <ReferredBlock references={references} />
        </div>
      )}
      
      <div className="footer__message">
        If you'd like to share an idea or your thoughts on something in this note feel free to send me a{" "}
        <a 
          href="https://x.com/lukeallenmiller" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer__link"
        >
          direct message
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer
