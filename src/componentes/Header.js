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
					<NavLink to="/acerca-de">About Us</NavLink>
					<NavLink to="/contactanos">Contact Us</NavLink>
				</Menu>
			</Container>
		</ContenedorHeader>
	);
}

const ContenedorHeader = styled.header`
	width: 99%;
	margin: 0px .5%;
	border-radius: 0px 0px 15px 15px;
	align-items: center;
	background: grey;
	display:flex;
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
	display: flex;
	align-items: center;
	
	a {
		display: inline-block;
		text-decoration: none;
		color: #ffffff;
		padding: 0px 15px 0px 20px;
		font-size: 22px;
	}

	a:hover {
		text-decoration: underline;
	}

	a.active {
		text-decoration: underline;
	}
`;
 
export default Header;