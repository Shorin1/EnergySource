import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'reactstrap'
import Majax from 'react-mathjax'
import Theory from './Theory'
import Example1 from './Example1'
import Example2 from './Example2'

const Solar = () => {
    return (
        <Majax.Provider>
            <Container className="mt-3">
                <Theory />
                <Example1 />
                <Example2 />
            </Container >
        </Majax.Provider>
    )
}

export default Solar;