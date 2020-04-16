import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'reactstrap'
import Majax from 'react-mathjax'
import Theory from './Theory'
import Example1 from './Example1'

const Biomass = () => {
    return (
        <Majax.Provider>
            <Container>
                <Theory />
                <Example1 />
            </Container>
        </Majax.Provider>
    );
}

export default Biomass;