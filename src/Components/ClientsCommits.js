import "../styles/ClientsCommits.scss"
import React from 'react'

function ClientsCommits() {
    const img = false
    // const img = "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/278900903_519056286537992_778222834245015378_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=z-Ov03KWspoAX_Fv5m5&_nc_ht=scontent.fbog4-1.fna&oh=00_AT_FD-x8JKcl4L7xf9Zi5FvG9bgTsxEB1GBNJVzXMox3Pg&oe=626BDFF6"
  return (
    <div>
        <h2>Opiniones de clientes</h2>
        <div className="contentComment">
            <div>
                {img ? 
                    <img src={img} /> :
                    <p>U</p> 
                }
            </div>
            <p>nombre del cliente</p>
        </div>
        <div>
            <p>contenido del comentario</p>
        </div>
    </div>
  )
}

export default ClientsCommits