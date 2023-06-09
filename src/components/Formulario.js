import React from 'react';

const Formulario = ({handleChange, usuario, handleSubmit}) => {

   return (
    <div className='form'>
      <form className='form1'  onSubmit={handleSubmit}>
        <div className='form2'>
          <label className='label'>Nombre y Apellido</label>
          <input className='input'
                 onChange= {handleChange}
                 type="text" 
                 name="nombre" 
                 placeholder="Nombre..." 
                 value={usuario.nombre} />
        </div>
        <div className='form2'>
          <label className='label'>E-mail</label>
          <input className='input'
                 onChange={handleChange} 
                 type="email" 
                 name="email" 
                 placeholder="Email..." 
                 value={usuario.email} />
        </div>
        <div className='form2'>
          <label className='label'>Teléfono</label>
          <input className='input'
                 onChange={handleChange} 
                 type="number" 
                 name="tel" 
                 placeholder="Telefono..."
                 value= {usuario.tel} />
        </div>
        
      </form>

    </div>
  )
}

export default Formulario