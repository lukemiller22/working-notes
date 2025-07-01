/** @jsx jsx */
import { jsx } from 'theme-ui'
import ReferredBlock from 'gatsby-theme-andy/src/components/ReferredBlock'

const Footer = ({ references = [] }) => {
  return (
    <footer
      sx={{
        marginTop: 4,
        paddingTop: 3,
        borderTop: '1px solid',
        borderColor: 'gray'
      }}
    >
      {references.length > 0 && (
        <div sx={{ marginBottom: 3 }}>
          <ReferredBlock references={references} />
        </div>
      )}
      
      <div
        sx={{
          fontSize: 1,
          color: 'text-light',
          fontStyle: 'italic',
          lineHeight: 1.5
        }}
      >
        If you'd like to share an idea or your thoughts on something in this note feel free to send me a{" "}
        <a 
          href="https://x.com/lukeallenmiller" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            color: 'links',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          direct message
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer
