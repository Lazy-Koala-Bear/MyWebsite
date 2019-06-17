import React from 'react'
import Layout from '../components/layout'
import me from "./image.jpg"
import linkStyles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen} from '@fortawesome/free-solid-svg-icons'

const ABoutPage = () => {

	return(

		<div>
			<Layout>
				<h1> About Me </h1>
				<p> Currently a recent college grad living in the beautiful Bay Area! You can say I'm interested in recent developments of Artificial Intelligence and
				Machine Learning. Cache me outside: hiking, swimming, and skiing. Also challenge me in chess! &nbsp;&nbsp;
			  <a className={linkStyles.gitItem} activeClassName={linkStyles.activegitItem} href= "https://www.chess.com/member/LazyKoalaBear" target="_blank"><FontAwesomeIcon icon={faChessQueen} /> </a></p>
				<img src={me} alt="" height="500" width="495"/>
			</Layout>
		</div>

	)
}

export default ABoutPage
