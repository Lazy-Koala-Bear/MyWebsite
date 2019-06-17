import React from 'react'
import Layout from '../components/layout'
import linkStyles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const ContactPage = () => {

	return(

		<div>
			<Layout>
			<h1> Contact Me </h1>
			<p> Feel free to reach out to me! My personal email is <b>yuexu97@gmail.com</b>. Let me know if you have any questions regarding my blog posts.
			Also, check out my projects and interests below!</p>
			<ul>
				<li> <a className={linkStyles.gitItem} activeClassName={linkStyles.activegitItem} href= "https://github.com/Penny-Xu" target="_blank"> Github <FontAwesomeIcon icon={faGithubAlt }/> </a></li>
				 <li><a className={linkStyles.lItem} activeClassName={linkStyles.activelItem} href= "https://www.linkedin.com/in/penny-xu-421766103/" target="_blank"> Linkedin <FontAwesomeIcon icon={faLinkedin }/></a></li>
				 <li><a className={linkStyles.instaItem} activeClassName={linkStyles.activeInstaItem} href= "https://www.instagram.com/lazycoalabear/" target="_blank"> Instagram <FontAwesomeIcon icon={faInstagram }/></a> </li>
			</ul>
			</Layout>
		</div>
	)
}

export default ContactPage
