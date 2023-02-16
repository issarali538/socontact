import { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";

const Setting = () => {
    const [active, setActive] = useState('profile');
    const handleClick = (clicked)=>{
        setActive(clicked)
    }
    return (
        <div className="dash-panel component">
            <div className="component-content" id="setting">
                <Container>
                <Row>
                        <div className="col-12">
                            <button onClick={() => handleClick('profile')} className={`btn me-2 ${(active === "profile") ? "btn-warning" : "btn-outline-info"}`}>Profile</button>

                            <button onClick={() => handleClick('integration')} className={`btn me-2 ${(active === "integration") ? "btn-warning" : "btn-outline-info"}`}>Integration</button>

                            <button onClick={() => handleClick('api')} className={`btn me-2 ${(active === "api") ? "btn-warning" : "btn-outline-info"}`}>API</button>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Setting;