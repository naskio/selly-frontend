import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import BOT_AVATAR from './assets/logo-01.svg';
import STEPS from './steps';


const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#5C6AB1',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#5C6AB1',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

function MyChatBot() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={STEPS}
                    width='100%'
                    height='40rem'
                    botName={'Selly'}
                    headerTitle={'Selly is here to help you ...'}
                    // hideSubmitButton={true}
                    placeholder='What is on your mind?'
                    recognitionEnable={true}
                    botAvatar={BOT_AVATAR}
                />
            </ThemeProvider>
        </>
    );
}

export default MyChatBot;
