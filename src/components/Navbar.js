import React, {Component} from 'react';

class Navbar extends Component {




	render() {

		const color = "Red";


		return (
			<div className="navigation-container">

				<ul className="navigation-list">

					<li>
						<p>Home</p>
					</li><li>
						<p>About</p>
					</li>
					<li>
						<p>Contact</p>
					</li>

				</ul>

			</div>
		);
	}
}

export default Navbar;