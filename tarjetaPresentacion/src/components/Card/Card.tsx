import style from './Card.module.css'
import image from '../images/ChatGPT Image 20 jun 2025, 10_52_51.png'
export const Card = () => {

    //Datos de email
    const email = 'maurogarzia2@gmail.com'
    const subject = 'Consulta de Servicio'
    const body = 'Hola, estoy interesado en contratar el servicio'
    const encodeSubject = encodeURIComponent(subject)
    const encodeBody = encodeURIComponent(body)

    // Datos de numero
    const phoneNumber = 2616928706
    const message = 'Hola estoy interesado en contratar el servicio'
    const encodeMessage = encodeURIComponent(message)


    return (
        <div className={style.containerPrincipal}>
            <div className={style.containerImage}>
                
                <img src={image} alt="" />
                <p>Desarrollador WEB</p>

                
            </div>
            <div className={style.containerData}>
                <h1>Mauro Garzia</h1>
                <a className={style.containerItem} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeSubject}&body=${encodeBody}`}>
                    
                    <div className={style.containerSVG}>
                        <span className="material-symbols-outlined"> mail </span>
                    </div>
                    <p>Email</p>
                
                </a>
                <a href={`http://wa.me/${phoneNumber}?text=${encodeMessage}`} className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-whatsapp" style={{"fontSize" : "25px"}}></span>
                    </div>
                    <p>Whatsapp</p>
                </a>

                <a className={style.containerItem} href="">
                    <div className={style.containerSVG}>
                        <span className="material-symbols-outlined">business_center</span>
                    </div>
                    <p>Portfolio</p>
                </a>
                <a className={style.containerItem} href="https://github.com/maurogarzia">
                    <div className={style.containerSVG}>
                        <span className="fab fa-github" style={{"fontSize" : "25px"}} ></span>
                    </div>
                    <p>GitHub</p>
                </a>
            </div>
        </div>
    )
}