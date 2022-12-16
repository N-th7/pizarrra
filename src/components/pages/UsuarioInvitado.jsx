import Menu from "../menu/Menu"
import React, { useEffect, useRef, useState } from "react";
import Participantes from "../participantes/Participantes";
import emailjs from 'emailjs-com'
import Board from "../board/Board";
import { onGetPizarra } from "../../firebase-config";

const UsuarioInvitado=()=>{

    const [width, setGrosor] = useState(12);
    const frmContact = { userEmail:'', concernCategory:'', emailTitle:'', emailDetails:'' };
    const [color, setColor] = useState("#000");
    const [drawID, setDrawID] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [contact,setContact] = useState(frmContact);


    let rect = false;
    let line = false;
    let circle = false;
    let ima=false;
    let txt=false;
    let borrar=false;
   
    let initialX;
    let initialY;
    let inix;
    let iniy;
    let finx;
    let finy;
    let figura = false;
    const [texto, setTexto] = useState("");
    let context
    let mainCanvas

    const handleChange = e => { 
      const {name,value} = e.target;
      setContact({...contact,[name]:value}); 
     };

    const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('service_1f0b2px','template_ok3w1td', contact,'AhxglTDuIEPZTmU5U')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }
  
  
    const changeFig = (fig) => {
      figura = true;
      console.log(fig);
      if (fig == "rect") {
        rect = true;
      } else {
        if (fig == "line") {
          line = true;
          console.log(line);
        } else {
          circle = true;
        }
      }
    };
  
    const agregarTexto = () => {
      figura=true
      txt=true
    };
  
    const limpiar = () => {
      const mainCanvas = document.getElementById("board");
      const context = mainCanvas.getContext("2d");
      context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  
    };
    const onImageChange = (e) => {
  
      figura=true;
      ima=true;
    
    };
    const descargar =() =>{
      const mainCanvas = document.getElementById("board");
        let enlace = document.createElement("a");
        enlace.download = "Canvas como imagen.png";
        enlace.href = mainCanvas.toDataURL();
        enlace.click();
      
    }
  
    const micanvas = useRef(null);
  
    const guardarDibujo = () => {
      if (!drawID) {
        alert("La imagen no tiene nombre!!");
        return;
      }
      const canvas = document.querySelector("#board");
      const imagen = canvas.toDataURL();
      localStorage.setItem(drawID, imagen);
      alert("Imagen guardada");
      window.location.reload()
    };
    const enlistar = () => {
      let lista = [];
      for (let x = 0; x <= localStorage.length - 1; x++) {
        let clave = localStorage.key(x);
        lista.push(clave);
      }
      return lista;
    };
  
    const actualizar = (imgID) => {
      let canvas = document.getElementById("main-canvas");
      let ctx = canvas.getContext("2d");
      limpiar();
      let image = new Image();
      image.onload = function () {
        ctx.drawImage(image, 0, 0);
      };
      image.src = localStorage.getItem(imgID);
      setDrawID(imgID);
    };
  
    const borrarDibujo = (imgID) => {
      localStorage.removeItem(imgID)
      alert("Dibujo eliminado")
      window.location.reload()
    }
  
    const borrador = () => {
      figura=true;
      borrar=true;
    }
    return(
        <div>
                    <div>
             <div className="App">
      <div className="w3-row">
        <div className="w3-col l2">
          <div className="opciones w3-center lienzos">

        
<Participantes></Participantes>
<div class>


                </div>

          </div>
        </div>
        
        <Board color={color} size={width} limpiar={limpiar} guardarDibujo ={guardarDibujo}
        descargar={descargar}
        ></Board>

        <div className="w3-col l3 w3-center">
          <div className="opciones w3-center">
            <Menu
              setColor={setColor}
              setGrosor={setGrosor}
              changeFig={changeFig}
              texto={texto}
              setTexto={setTexto}
              agregarTexto={agregarTexto}
            ></Menu>
            
           
            
            <input
              className="subirImg"
              id="imagen"
              type="file"
              accept="image/*"
              multiple
              onChange={onImageChange}
            />
            <br />
            <input
              type="text" placeholder="Nombre de lienzo"
              value={drawID}
              onChange={(e) => setDrawID(e.target.value)}
            />
            <br/>
            <button type="button" className="limpiar" onClick={guardarDibujo}>
              Guardar lienzo
            </button><br/>
            <button className="borrador limpiar" id="reset" onClick={borrador}>
              Borrador
            </button><br/>

            <button className="limpiar" id="reset" onClick={limpiar}>
              Limpiar
            </button>
            <button id="btnDescargar" className="descargar" onClick={descargar}>Descargar</button>

            
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
};

export default UsuarioInvitado;