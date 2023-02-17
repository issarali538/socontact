import {Row,Card} from "react-bootstrap";
import {Link} from "react-router-dom";


const Cards = ({card}) => {
    return ( 
        
            <div className="col-md-4 mt-md-2 mt-lg-4">
                <Card className="setting-cards">
                    <Card.Body>
                        <Row>
                            <div className="col-3 text-center">
                                <span className="setting-card-icon"> { card.card_logo } </span>
                            </div>
                            <div className="col-9 ps-3">
                                <p className="fs-5 fw-bold mb-2">{ card.card_heading}</p>
                                 <p>
                                     { card.card_desc }
                                </p>   
                            </div>
                        </Row>
                        <div className="text-end">
                            <Link className="fw-bold" to="">Link <i className="fa fa-angle-right"></i></Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        
        );
}
 
export default Cards;