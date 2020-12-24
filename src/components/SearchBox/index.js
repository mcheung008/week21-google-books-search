import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchBox() {
    return (
        <Container>
            <Row>
                <Col>
                    <h4>Book Search</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBookName">
                            <Form.Label>Book</Form.Label>
                            <Form.Control type="text" placeholder="Enter name of book" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}