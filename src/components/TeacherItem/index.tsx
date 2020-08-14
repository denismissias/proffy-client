import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://randomuser.me/api/portraits/men/84.jpg" alt="Chester Wade"/>
                <div>
                    <strong>Chester Wade</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/><br/>
                Odit hic culpa illum laborum, natus aut? Animi hic blanditiis, temporibus quo atque dolores minima culpa mollitia eius dolorum asperiores eos neque!
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;