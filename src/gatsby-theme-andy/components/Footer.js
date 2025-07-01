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
    </footer>
  )
}

export default Footer
