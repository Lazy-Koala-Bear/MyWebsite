import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import footerStyles from './footer.module.scss'
import linkStyles from '../pages/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

	const data = useStaticQuery(graphql`
      query{
        site {
          siteMetadata {
            author
          }
  	    }
      }
    `)

	return(

		<footer className={footerStyles.footer}>
			<a className={linkStyles.gitItem} activeClassName={linkStyles.activegitItem} href= "https://github.com/Penny-Xu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubAlt} size="2x"/> </a>
			<a className={linkStyles.lItem} activeClassName={linkStyles.activelItem} href= "https://www.linkedin.com/in/penny-xu-421766103/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
			<a className={linkStyles.instaItem} activeClassName={linkStyles.activeInstaItem} href= "https://www.instagram.com/lazycoalabear/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} size="2x"/></a>
			<p>
			Created by {data.site.siteMetadata.author}, © 2020
			</p>
		</footer>
	)
}

export default Footer
