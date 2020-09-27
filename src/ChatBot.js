import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import BOT_AVATAR from './assets/logo-01.svg';
import USER_AVATAR from './assets/store.png';
import STEPS from './steps';
import STEPS_PHONE from './steps_phone_call';


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
                    botAvatar={BOT_AVATAR}
                    userAvatar={USER_AVATAR}
                    botDelay={0}
                    userDelay={0}
                    customDelay={0}
                    recognitionEnable={true}
                    // speechSynthesis={{ enable: true, lang: 'en' }}
                />
            </ThemeProvider>
        </>
    );
}

export default MyChatBot;
