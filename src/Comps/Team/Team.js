import { Container, Row } from "react-bootstrap";

const Team = () => {
    return (
        <div className="dash-panel component">
            <div className="component-content" id="team">
                <Container>
                    <Row>
                        <div className="col-12"> 
                            <button className="btn btn-warning">Team</button>
                         </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Team;