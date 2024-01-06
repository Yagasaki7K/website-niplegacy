import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderDetails>
            <div className="leftSide">
                <img src="/naruto.png" alt="" />
            </div>
            <div className="rightSide">
                <ul>
                    <li><h1>NIP Legacy</h1></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#prices">Preços</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="https://discord.gg/CYbrHdYaRm">Discord</a></li>
                </ul>

                <h1 className="title">Explore o Mundo de <span>N</span>aruto <span>I</span>nner <span>P</span>ower Legacy nesta Experiência de MMORPG 2D!</h1>
                <i>O NIP é um jogo online no universo do anime Naruto. Neste jogo, os jogadores terão a oportunidade de criar seu próprio personagem e se aventurar em um mundo de desafios.</i>

                <div className="download"><a href="">Faça o Download Agora!</a>
                    <i>Disponível apenas para Windows</i></div>
            </div>
        </HeaderDetails>
    )
}

export default Header

const HeaderDetails = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 3rem 10rem;

    .leftSide {
        img {
            border-radius: 20px;
            transition: 0.2s;
        }

        margin-right: 10rem;
    }
    .rightSide {
        max-width: 768px;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            width: 50rem;
            color: #181926;

            li {
                i {
                    font-size: 0.8rem;
                    color: #ff8f51;
                }

                a {
                    text-decoration: none;
                    color: #ff8f51;
                    font-weight: bold;
                    font-size: 1.2rem;
                    transition: 0.2s;
                }

                :hover {
                    color: #212332;
                }
            }
        }

        .title {
            font-size: 3rem;
            padding: 2rem;
            span {
                color: #ff8f51;
            }
        }

        .download {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                background-color: #ff8f51;
                color: #fff;
                padding: 1.2rem 2rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: bold;
                font-size: 1.2rem;
                transition: 1s;
            }

            a:hover {
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
                transform: scale(1.02);
            }

            i {
                font-size: 0.8rem;
            }
        }
    }
`