import { connect } from 'react-redux';
import MessageFormController from './MessageFormController';
import RegistrationFormController from './RegistrationFormController';

class ChatController {
    constructor() {
        this.parent = document.querySelector('.App');
        this.url = 'ws://st-chat.shas.tel';

        if (localStorage.getItem('active')) {
            const user = {};
            user.nickname = localStorage.getItem('active');
            this.form = new MessageFormController(this.parent, this.url, user);
        } else {
            this.form = new RegistrationFormController(this.parent, this.url);
        }
    }

    static start() {
        new ChatController(this.parent, this.url);
    }
};

export default connect()(ChatController);