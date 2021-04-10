import React from 'react';
import './../estilos/inicio.css';

const Inicio = () => {
	return (
        <section class="main">
            <div class="carrousel">
                <h1>Working hard is important, but feeling good is important too. </h1> 
            </div>
            <div class="projects">
                <div class="circle yellow info">
                    
                    <p class="title">Build your Page</p>
            
                    <p class="descript">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim numquam, quo exercitationem reprehenderit id eaque</p>
                </div>
                <div class="circle blue info">
                    <p class="title">Build your Assets</p>
                    
                    <p class="descript">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim numquam, quo exercitationem reprehenderit id eaque</p>
                </div>
                <div class="circle red info">
                    <p class="title">Create your Animation</p>
                    
                    <p class="descript">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim numquam, quo exercitationem reprehenderit id eaque</p>
                </div>
            </div>
        </section>
	);
}


 
export default Inicio;