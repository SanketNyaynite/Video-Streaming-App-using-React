import React from 'react'
import styled from 'styled-components'

function Footer(){
	return (
		<div>
			<FooterContainer className="fixed-bottom">
				<div className="footer-middle">
				 <div className="container">
					<div className="row">
						{/*Column 1 */}
						<div className="col-md-3 col-sm-6">
						<br></br>
						<p><a href="home" style={{color: "gray"}}>Home</a></p>
						</div>
						{/*Column 2 */}
						<div className="col-md-3 col-sm-6">
						<br></br>
						<p><a href="home" style={{color: "gray"}}>Terms and conditions
						</a></p>
						</div>
						{/*Column 3 */}
						<div className="col-md-3 col-sm-6">
						<br></br>
						<p><a href="home" style={{color: "gray"}}>Privacy policy</a></p
						>
						</div>
						{/*Column 4 */}
						<div className="col-md-3 col-sm-6">
						<br></br>
						<p><a href="home" style={{color: "gray"}}>Help</a></p>
						</div>
					</div>
					<div className="footer-bottom">
						<p className="text-xs-center" >
						&copy;{new Date().getFullYear()} Video Streaming App - All  right reserved.
						</p>
					</div>
				</div>
				</div>
			</FooterContainer>
		</div>
	) 
}

export default Footer;

const FooterContainer = styled.footer`
	.footer-middle {
	background: var(--mainDark);
	padding-top: 0.5rem;
	color: var(--mainWhite);
	position:fixed;
	left:0;
	bottom:0;
	right:0;
	}

	.footer-bottom {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	}

	.a {
    color: grey;
    text-decoration: none;
    background-color: transparent;
	}
` ;            