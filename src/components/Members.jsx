import styled from "styled-components"

var actualDate = new Date();
var dayLaunch = new Date(actualDate.getFullYear(), actualDate.getMonth(), 2);
var differenceInMilliseconds = actualDate - dayLaunch;
var hoursBetweenTodayAnd2ofJanuary = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));

const Members = () => {
    return (
        <MembersDetails>
            <div className="content">
                <div className="item">
                    <h3>+25</h3>
                    <p>Usuários Cadastrados</p>
                </div>
                <div className="item">
                    <h3>+{hoursBetweenTodayAnd2ofJanuary}</h3>
                    <p>Horas Online</p>
                </div>
                <div className="item">
                    <h3>+200K</h3>
                    <p>Cashs Enviados</p>
                </div>
                <div className="item">
                    <h3>+20</h3>
                    <p>Horas de Eventos EXP</p>
                </div>
            </div>
        </MembersDetails>
    )
}

export default Members

const MembersDetails = styled.div`
    background: #212332;
    width: 100%;
    padding: 5rem;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 0 15%;

        .item {
            h3 {
                color: #ffffff;
                font-size: 4rem;
            }

            p {
                margin-top: -1rem;
                color: #b2c1e7;
            }
        }
    }
`