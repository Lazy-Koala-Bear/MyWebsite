import React from 'react'
import Layout from '../components/layout'
import linkStyles from './contact.module.scss'


const ContactPage = () => {

	return(

		<div>
			<Layout>
			<h1> Contact Me </h1>
			<p> Feel free to reach out to me and let me know if you have any questions regarding my blog posts. My personal email is <b>yuexu97@gmail.com</b>.
			Or send me a quick message below! :) </p>
			
			<form method="post" action="https://formspree.io/yuexu97@gmail.com">


		  			<label>
						<div>
				 		Name
						</div>
						<div>
		    		<input type="text" name="name" id="name" />
						</div>
		  			</label>




		  			<label>
						<div>
		    		Email
						</div>
						<div>
		    		<input type="email" name="_replyto" id="email" />
						</div>
		  			</label>


					  <label>
						<div>
					    Message
							</div>
							<div>
					    <textarea name="message" id="message" rows="5" cols = "25"/>
							</div>
					  </label>
					  <button className={linkStyles.button} type="submit">Send</button>

			</form>
			</Layout>
		</div>
	)
}

export default ContactPage
