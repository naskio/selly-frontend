import React from 'react';
import HEADER_IMAGE from './assets/logo-03.png';
// import './App.css';
import MyChatBot from './ChatBot';
import {Container, Box, Grid} from '@material-ui/core';

function App() {
    return (
        <Container>
            <Grid container direction='column'>
                <Grid item>
                    <Box>
                        <Grid container direction='row' alignItems='center' justify='center'>
                            <img src={HEADER_IMAGE} height='180px'/>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                    <MyChatBot/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
