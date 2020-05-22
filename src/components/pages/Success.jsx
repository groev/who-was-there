import React from 'react';
import { Link } from 'react-router-dom';

import scan from '../../assets/scan.svg';

export default function Success() {
	return (
		<div id="Success" className="container">
			<h1>Success!</h1>
			<div>
				Your summary has succesfully been send to{' '}
				<span className="email">{localStorage.getItem('email')}</span>
			</div>
			<Link to="/scan" className="btn bottom">
				<img src={scan} alt="scan" />
				Scan again
			</Link>
		</div>
	);
}
