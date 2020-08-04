import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/648079?s=460&u=3472f9e4a78f02d8480e2257be87ff0c02053d28&v=4" alt="Matheus Marchiore"/>
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nec nunc ac tincidunt. Aenean placerat porttitor nunc at elementum. Nulla pharetra cursus varius. Nulla facilisi. Donec turpis sapien, dapibus aliquam enim sed, dignissim suscipit sem. In vel leo nec arcu consequat feugiat faucibus vitae nisl. Quisque at turpis massa. 
                <br />
                <br />
                Maecenas enim justo, mattis non congue eu, hendrerit nec felis. Nunc venenatis lobortis augue sed consequat.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 98,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;