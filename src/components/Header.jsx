import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderDetails>
            <div className="leftSide">
                <img src="/naruto.png" alt="" />
            </div>
            <div className="rightSide">
                <ul>
                    <li><h1><span>NIP</span> Legacy</h1></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#prices">Preços</a></li>
                    <li><a href="https://www.mediafire.com/file/dlvr8ij7ebeurk4/NIP_Legacy_by_Kindred.rar/file" target='_blank' rel="noreferrer" className="download">Download</a></li>
                    <li><a href="https://discord.gg/CYbrHdYaRm">Discord</a></li>
                </ul>

                <h1 className="title">Explore o Mundo de <span>N</span>aruto <span>I</span>nner <span>P</span>ower Legacy nesta Experiência de MMORPG 2D!</h1>
                <i>O NIP é um jogo online no universo do anime Naruto. Neste jogo, os jogadores terão a oportunidade de criar seu próprio personagem e se aventurar em um mundo de desafios.</i>

                <div className="buttons">
                    <div className="download">
                        <a href="https://www.mediafire.com/file/dlvr8ij7ebeurk4/NIP_Legacy_by_Kindred.rar/file" target='_blank' rel="noreferrer">Faça o Download Agora!</a>
                        <i>Disponível apenas para Windows</i>
                    </div>
                    <div className="changelog">
                        <a href="https://discord.gg/CYbrHdYaRm">Veja as Novidades!</a>
                        <i>Confira as mudanças do game no Discord</i>
                    </div>
                </div>
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
    background: #f3f3f4;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem 1rem;

        .download {
            display: none;
        }

        .leftSide {
            margin-right: 0;
            img {
                width: 22rem;
            }
        }

        .rightSide {
            ul {
                display: flex;
                flex-direction: column;
                margin-left: -14rem;

                h1 {
                    font-size: 3rem;
                }
            }

            .buttons {
                display: flex;
                flex-direction: column;

                .download {
                    margin-left: 2rem;
                }
            }
        }
    }

    /* END MOBILE */

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
        }

        .buttons {
            display: flex;
            justify-content: center;
            align-items: center;

            .download {
                margin-right: 2rem;

                a {
                    background-color: #ff8f51;
                    color: #fff;
                }
            }

            .changelog {
                a {
                    background-color: #212332;
                    color: #fff;
                }
            }

            .download, .changelog {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                padding: 1.2rem 2rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: bold;
                font-size: 1.2rem;
                transition: 1s;
                margin-bottom: 0.5rem;
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
    }
`