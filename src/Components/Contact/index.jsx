import React from 'react'
import './styles.css'

function Contact() {
  return (
    <div id="contact">
      <h1>FÓRUM PARA FÃS :)</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Type Your Email" />
        <textarea placeholder="Write Here......"></textarea>
        <input type="submit" value="Enviar" />
      </form>

      <p>© Billie Eilish. Criado por Isis e Marcelly ^^ </p>
    </div>
  )
}

export default Contact
