import styled from "styled-components"

const About = () => {
    return (
        <AboutDetails id="about">
            <div className="left">
                <h1>Sobre nós</h1>

                <h4>O que é o <span>N</span>aruto <span>I</span>nner <span>P</span>ower?</h4>
                <p>O <span>N</span>aruto <span>I</span>nner <span>P</span>ower é um jogo MMORPG 2D baseado no universo de Naruto, desenvolvido pela OhYehGames e adquirido pela Kindred Games em Janeiro de 2024.</p>

                <h4>O que é a Kindred?</h4>
                <p>
                    A <a href="https://justkindred.com.br/" target="_blank" rel="noreferrer">Kindred Software</a> ou Kindred Games como nos apresentamos por aqui, é a empresa responsável
                    pelo desenvolvimento do jogo e vários outros projetos como a Kalify Inc, comunidade brasileira
                    de programação e desenvolvimento.
                </p>
            </div>
            <div className="right">
                <a href="https://justkindred.com.br/" target="_blank" rel="noreferrer"><img src="https://github.com/kindredsoftware.png" alt="" /></a>
            </div>

        </AboutDetails>
    )
}

export default About

const AboutDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 10rem;
    text-align: center;
    background: #f3f3f4;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem 1rem;

        .left {
            margin-left: 5rem;
            width: 100%;
        }

        .right {
            margin-top: 2rem;
        }
    }

    h1 {
        margin-top: -1rem;
        font-size: 3rem;
    }

    h4 {
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    p {
        font-size: 1rem;
    }

    a {
        color: #ff8f51;
    }

    .left {
        max-width: 768px;
        margin-right: 5rem;
    }

    .right {
        img {
            width: 80%;
            border-radius: 20px;
            transition: 1s;
        }

        &:hover {
            img {
                transform: scale(1.05);
                box-shadow: 0 0 50px #7732e1;
            }
        }
    }
`