import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#1D4757"
    };

    const titleStyle = {
        color: "white",
    };

    const btnStyle = {
        position: "absolute",
        top: "20px",
        left: "25px"
    };

    return (
        <Container style={navStyle} fluid>
                <NavLink style={btnStyle} to="/"><Button color="primary">К оглавлению</Button></NavLink>
                <h3 style={titleStyle}>ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ И ИХ ИСПОЛЬЗОВАНИЕ</h3>
        </Container>
    );
}

export default Header;