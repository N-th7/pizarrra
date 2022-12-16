import React from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const InputBuscar =({pizarra}) =>{

    return(
        <div>
                <div class="w3-card-4">

                    <div class="w3-container">
                        <h2>Pizarra grupal</h2>
                    <h3>Crear pizarra</h3>
                    </div>

                    <form class="w3-container">

                    <label>Nombre de pizarra</label>
                    <input class="w3-input w3-border w3-round-large" type="text" />
                    <Link to="/propietario"><button className="subir" type="submit">Crear</button></Link>

                    </form>
        	    

                    <div class="w3-container">
                    <h3>Abrir pizarra</h3>
                    </div>

                    <form class="w3-container">

                    <label>Nombre de pizarra</label>
                    <input class="w3-input w3-border w3-round-large" type="text" />
                    <Link to="/invitado" pizarra={pizarra}><button className="subir" >Abrir</button></Link>

                    </form>

                </div>
        </div>
    );
};

export default InputBuscar;