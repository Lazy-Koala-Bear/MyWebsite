import React from 'react'
import Layout from '../components/layout'
import linkStyles from './contact.module.scss'

const ContactPage = () => {

	return(

		<div>
			<Layout>
				<p> <a className={linkStyles.gitItem} activeClassName={linkStyles.activegitItem} href= "https://github.com/Lazy-Koala-Bear" target="_blank"> Github </a></p>
				 <p><a className={linkStyles.lItem} activeClassName={linkStyles.activelItem} href= "https://www.linkedin.com/in/penny-xu-421766103/" target="_blank"> Linkedin </a></p>
				 <p><a className={linkStyles.instaItem} activeClassName={linkStyles.activeInstaItem} href= "https://www.instagram.com/lazycoalabear/" target="_blank"> Insta </a> </p>
			</Layout>
		</div>
	)
}

export default ContactPage
