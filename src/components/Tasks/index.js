import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'reactstrap'
import Majax from 'react-mathjax'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task5 from './Task5'
import Task6 from './Task6'
import Task7 from './Task7'
import Task8 from './Task8'
import Task9 from './Task9'
import Task10 from './Task10'

const Tasks = () => {
    return (
        <Majax.Provider>
            <Container>
                <Task1 />
                <Task2 />
                <Task3 />
                <Task4 />
                <Task5 />
                <Task6 />
                <Task7 />
                <Task8 />
                <Task9 />
                <Task10 />
            </Container >
        </Majax.Provider>
    );
}

export default Tasks;