import React, { Component } from 'react';
class NavBar extends Component{
  constructor(props){
    super(props);
    this.burgerToggle = this.burgerToggle.bind(this);
  }
    	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
  render(){
    return(
      <nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#aboutMe">About Me</a>
						<a href="#portfolio">Portfolio</a>
            <a href="#certifications">Certifications</a>
						<a href="#contactMe">Contact Me</a>
					</div>
				</div>
				<div className="navNarrow">
					<a className="fa fa-bars fa-2x" onClick={this.burgerToggle}></a>
					<div className="narrowLinks">
						<a href="#aboutMe" onClick={this.burgerToggle}>About Me</a>
						<a href="#portfolio" onClick={this.burgerToggle}>Portfolio</a>
            <a href="#certifications" onClick={this.burgerToggle}>Certifications</a>
						<a href="#contactMe" onClick={this.burgerToggle}>Contact Me</a>
					</div>
				</div>
			</nav>
    )
  }
}
export default NavBar;