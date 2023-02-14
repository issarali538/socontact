import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import TeamMembers from "./TeamMembers";
import MemberProfile from "./MemberProfile";

const Team = () => {

    const [cardData, setCardData] = useState([
        {
            "heading" : 'total task achieved',
            "number" : 12,
            "card_profit" : 1.8
        },
        {
            "heading" : 'Team Credit',
            "number" : 10,
            "card_profit" : 1.3
        },
    ])


    return (
        
            <div className="component-content" id="team">
                <Container>
                    <Row>
                        <div className="col-12"> 
                            <button className="btn btn-warning">Team</button>
                         </div>
                    </Row>
                    <Row className="team-card-wrapper">
                        <div className="col-lg-7">
                            <div className="">
                                <Row>
                                     <TeamCard cardData={cardData} />
                                </Row>
                            </div>
                          
                                <TeamMembers/>
                            
                        </div>
                        <div className="col-lg-5">
                            <MemberProfile/>
                        </div>
                    </Row>
                </Container>
            </div>
        
    );
}

export default Team;