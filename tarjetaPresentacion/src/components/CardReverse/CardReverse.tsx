import style from './CardReverse.module.css'

export const CardReverse = () => {
    return (
        <div className={style.containerPrincipal}>
            <div className={style.containerTechnologies}>
                <h1>Tecnologias</h1>
                
                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-java" style={{ "fontSize": "25px" }}></span>
                    </div>
                    <p>Java</p>
                </div>

                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-js-square" style={{ "fontSize": "25px", "color": "#F7DF1E" }}></span>
                    </div>
                    <p>JavaScript</p>
                </div>

                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-python" style={{ "fontSize": "25px", "color": "#3572A5" }}></span>
                    </div>
                    <p>Python</p>
                </div>

                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-git-alt" style={{ "fontSize": "25px", "color": "#F05032" }}></span>
                    </div>
                    <p>Git</p>
                </div>

            </div>
            <div className={style.containerFrameworks}>
                <h1>Frameworks</h1>

                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-react" style={{ "fontSize": "25px", "color": "#61DAFB" }}></span>
                    </div>
                    <p>React</p>
                </div>

                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fas fa-leaf" style={{ "fontSize": "25px", "color": "#6DB33F" }}></span>
                    </div>
                    <p>Spring Boot</p>
                </div>

                <div className={style.containerItem}>
                    <div className={style.containerSVG}>
                        <span className="fab fa-css3-alt" style={{ "fontSize": "25px", "color": "#38B2AC" }}></span>
                    </div>
                    <p>Tailwind</p>
                </div>
                
            </div>
        </div>
    )
}