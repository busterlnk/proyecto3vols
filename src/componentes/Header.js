import {NavLink} from 'react-router-dom';
import React from 'react';
import logo from './../img/logo/logo.png';
import styled from 'styled-components';

const Header = () => {
	return (
		<ContenedorHeader>
			<Container>
				<Menu>
					<Logo src={logo} alt="" />
					<NavLink to="/" exact={true}>Home</NavLink>
					<NavLink to="/aboutUs">About Us</NavLink>
					<NavLink to="/contactUs">Contact Us</NavLink>
				</Menu>
			</Container>
		</ContenedorHeader>
	);
}

const ContenedorHeader = styled.header`
	width: 99%;
	margin: 0px .5%;
	border-radius: 0px 0px 15px 15px;
	background: grey;
	display: fixed;
	position: fixed;
	z-index: 1;	
`;

const Container = styled.div`
	padding: 0px 40px;
`;

const Logo = styled.img`
	width:60px;
`;

const Menu = styled.nav`
	a {
		display: inline-block;
		text-decoration: none;
		color: #ffffff;
		padding: 0px 15px;
		font-size: 22px;
	}

	a:hover {
		text-decoration: underline;
	}

	a.active {
		border-bottom: 2px solid #165168;
		padding-bottom: 3px;
	}
`;
 
export default Header;