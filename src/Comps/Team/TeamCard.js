import { Card } from "react-bootstrap";

const TeamCard = ({ cardData }) => {
    return (
        cardData.map(card => (
            <div className="col-md-6">
            <Card className="bg-light">
                <Card.Body>
                    <Card.Title className="text-muted">{ card.heading }</Card.Title>
                    <Card.Text>
                        <h4 className="fw-bold mb-3">{card.number}</h4>
                        <p className="mb-3 me-3"><span className="text-warning">{ card.card_profit}</span> <i className="fa-solid fa-arrow-up mx-1"></i> then yesterday</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        ))
    );
}

export default TeamCard;