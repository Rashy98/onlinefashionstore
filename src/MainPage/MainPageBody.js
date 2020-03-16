import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class MainPageBody extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let { id, name, company, description } = this.props.cats;

        return (

            <div className="px-md-4 mt-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MainPageBody;