import styled from "styled-components"

const Footer = () => {
    return (
        <FooterDetails>
            <div className="content">
                <div className="item">
                    <p>© 2022 - {new Date().getFullYear()} Kindred Software. Todos os direitos reservados</p>
                    <div className="links">
                        <a href="#about">Sobre</a>
                        <a href="#prices">Preços</a>
                        <a href="https://www.mediafire.com/file/dlvr8ij7ebeurk4/NIP_Legacy_by_Kindred.rar/file" target='_blank' rel="noreferrer">Download</a>
                        <a href="https://discord.gg/CYbrHdYaRm">Discord</a>
                    </div>
                </div>
            </div>
        </FooterDetails>
    )
}

export default Footer

const FooterDetails = styled.div`
    background: #212332;
    width: 100%;
    padding: 1.5rem;
    color: #ffffff;
    text-align: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;

        .links {
            display: none;
        }
    }

    .item {
        margin-top: -1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
        text-align: center;
    }

    p {
        border-right: 2px solid #ffffff;
        padding-right: 0.5rem;

        @media (max-width: 768px) {
            border-right: 0px;
            font-size: 0.8rem;
            margin-top: 1rem;
        }
    }

    a {
        color: #ffffff;
        margin-right: 1rem;
    }

    .links {
        padding-left: 0.5rem;
    }

`