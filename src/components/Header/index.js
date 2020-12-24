import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <h3>Google Books Search</h3>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/search" eventKey="link-1">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/saved" eventKey="link-2">Saved</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}