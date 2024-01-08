
import styled from "styled-components"

const Desktop = () => {
    return (
        <DesktopDetails>
            <h1>Seja o mais forte <span>Shinobi</span> e enfrente a <br /> <label>Kyuubi</label> no universo de <span>Naruto</span></h1>
            <p></p>
            <img src="/notebook.png" alt="Notebook Naruto Inner Power Legacy" />
        </DesktopDetails>
    )
}

export default Desktop

const DesktopDetails = styled.div`
    width: 100%;
    background: #212332;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5rem 10rem;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 5rem 1rem;

        h1 {
            margin-top: -2rem;
            font-size: 1rem;
        }

        img {
            margin-top: 4rem;
            width: 100%;
        }
    }

    h1 {
        margin-bottom: -4rem;
        font-size: 3rem;

        label {
            color: #ff5151;
        }
    }

    img {
        width: 100%;
        margin-bottom: -5rem;
    }
`