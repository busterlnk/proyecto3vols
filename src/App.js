import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';
import Post from './componentes/Post';
import Error404 from './componentes/Error404';

const App = () => {
	return (
		<BrowserRouter>
			<ContenedorPrincipal>
				<Header/>

				<Main>
					<Switch>
						<Route path="/" exact={true} component={Inicio} />
						<Route path="/blog" component={Blog} />
						<Route path="/post/:id" component={Post} />
						<Route path="/acerca-de" component={AcercaDe} />
						<Route component={Error404} />
					</Switch>
				</Main>
			</ContenedorPrincipal>
		</BrowserRouter>
	);
}

const ContenedorPrincipal = styled.div`
	padding: 0px;
	width: 100%;
	max-width: auto;
`;

const Main = styled.main`
	padding: 0px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
    background-img: src('./img/logo/background.png');
`;

 
export default App;