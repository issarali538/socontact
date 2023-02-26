import { Container, Row, Col } from "react-bootstrap";
import Members from "./Members";
import { Link } from 'react-router-dom';
import MemberLeads from "./MemberLeads";
const MemberList = () => {
    return (
        <>
            <div className="dash-panel component">
            <div><Link to="" className="fs-4 text-info"><i className="fa fa-arrow-left"></i></Link></div>
                <div className="component-content" id="mem-lead-info">
                    <Container>
                        <Row className="lead-profile-wrapper">
                            <Col md={5}>
                                <MemberLeads/>
                            </Col>
                            <Col md={7}>
                                <Members/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default MemberList;