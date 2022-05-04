import { Formik } from 'formik'
import React from 'react'
import '../styles/CreateProduct.scss'

function CreateProduct() {
  return (
    <div className='containerCrud'>
      <h2>Crud</h2>
      <Formik
        initialValues={{ nombre: '', precio: '', categoria: '', marca: '', estilo: '', color: '', descripcion: '', tiempoEntrega: '' }}
        validate={values => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = 'Este campo es requerido';
            errors.nombre = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className='crudContent' onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <div>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Precio</label>
              <div>
                <input
                  type="text"
                  name="precio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.precio}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Categoria</label>
              <div>
                <input
                  type="text"
                  name="categoria"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categoria}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Marca</label>
              <div>
                <input
                  type="text"
                  name="marca"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.marca}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Estilo</label>
              <div>
                <input
                  type="text"
                  name="estilo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.estilo}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Color</label>
              <div>
                <input
                  type="text"
                  name="color"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.color}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Descripcion</label>
              <div>
                <input
                  type="text"
                  name="descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descripcion}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label>Tiempo De entrega</label>
              <div>
                <input
                  type="text"
                  name="tiempoEntrega"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tiempoEntrega}
                />
                {errors.nombre && touched.nombre && (
                  <span>
                    {errors.nombre}
                  </span>
                )}
              </div>
            </div>
            <div className='btnContainer'>
            <button type="submit" disabled={isSubmitting}>
              Crear
            </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default CreateProduct