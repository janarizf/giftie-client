import React from "react";
import { Container } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
        <Container className="footer">
            <div  >
                <div>
                    <a href="#">WishCart</a>
                    <span>&copy; 2022 WishCart.</span>
                </div>
                <div>
                    <span>Powered by</span>
                    <a href="#">Wishcart</a>
                </div>
            </div>
        </Container>
    )
}
export default Footer;