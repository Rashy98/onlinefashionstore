import React, {Component} from "react";
import MainPageNavBar from "./MainPageNavBar";
import MainPageBody from "./MainPageBody";
import { Container, Row, Col } from 'reactstrap';

class MainPage extends Component{

    constructor() {
        super();

        this.state = {
            category: [
                {
                    id: 1,
                    name: "David Davidson",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },
                {
                    id: 2,
                    name: "Mark Markson",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },
                {
                    id: 3,
                    name: "Judy Judyson",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },
                {
                    id: 4,
                    name: "James Jameson",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                }
            ]
        }
    }

    render() {

        let categories = this.state.category.map(category => {
            return(
                <MainPageBody key ={category.id} cats = {category}/>
            )
        })

        return (
            <div>
                <MainPageNavBar/>

                <Container fluid className="d-flex justify-content-center">
                    <Row>
                        {categories}
                    </Row>
                </Container>

            </div>
        );

    }
}

export default MainPage;
