import React from 'react'
import React, { useState } from 'react'

const formulario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        colorFavorito: '',
        comidaFavorita:'',
        edad:'',
    })
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Tu nombre es ' + usuario.nombre + ' tu apellido es ' + usuario.apellido + ' tu color favorito es ' + usuario.colorFavorito + 'tu comida favorita es' + usuario.comidaFavorita +'tu edad es' + usuario.edad)
        alert('Tu nombre es ' + usuario.nombre + ' tu apellido es ' + usuario.apellido + ' tu color favorito es ' + usuario.colorFavorito + 'tu comida favorita es' + usuario.comidaFavorita +'tu edad es' + usuario.edad)
        if(usuario.nombre.length > 3) setShow(true)
    }
    
     function handleSubmit(event) {
    event.preventDefault();
    if (
      nombre.startsWith(" ") ||
      edad.length < 3 ||
      colorFavorito.length < 10
    ) {
      props.onError();
      console.log();
    } else {
      props.onSubmit(edad, colorFavorito);
    }
  }


  return (
    <>
        <div className="card">
            <h1>DATOS PERSONALES</h1>
            <form onSubmit={handleSubmit}>
                <label>Indique su Nombre: </label>
                <input type="text" onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}/>
                <br />
                <label >Indique su Apellido: </label>
                <input type="text" onChange={(e) => setUsuario({...usuario, apellido: e.target.value})}/>
                <br />
                <label >Indique su Color favorito: </label>
                <input type="text" onChange={(e) => setUsuario({...usuario, colorFavorito: e.target.value})}/>
                <br />

                <label >Indique su Comida favorito: </label>
                <input type="text" onChange={(e) => setUsuario({...usuario, comidaFavorita: e.target.value})}/>
                <br />

                <label > Indique su Edad </label>
                <input type="text" onChange={(e) => setUsuario({...usuario, edad: e.target.value})}/>
                <br />
                <button>Enviar</button>
            </form>
        </div>

        {
            show && 
            <>
                <h3>Nombre: {usuario.nombre}</h3>
                <h3>Apellido: {usuario.apellido}</h3>
                <h3>Color Favorito: {usuario.colorFavorito}</h3>
                <h3>Comida Favorita: {usuario.comidaFavorita}</h3>
                <h3>Edad: {usuario.edad}</h3>
            </>

        }

    </>
  )
}

export default formulario