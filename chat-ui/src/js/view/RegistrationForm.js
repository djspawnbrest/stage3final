import DomNode from './DomNode';

export default class RegistrationForm {
    constructor(parentNode) {
        this.parentNode = parentNode;
        this.signUpForm = new DomNode('form').addClass('register-form');
        this.greetingText = new DomNode('p').addClass('register-greeting');
        this.nickName = new DomNode('input').addClass('register-name');
        this.regFormSubmit = new DomNode('button').addClass('register-submit');
    }

    create() {
        this.appendNodes().setAttributes();
        this.parentNode.appendChild(this.signUpForm);
        return this;
    }

    appendNodes() {
        this.signUpForm.appendChild(this.greetingText);
        this.signUpForm.appendChild(this.nickName);
        this.signUpForm.appendChild(this.regFormSubmit);
        return this;
    }

    setAttributes() {
        this.greetingText.textContent = 'Welcome to Chat UI! Please sign up to Chat:';
        this.nickName.setAttribute('placeholder', 'Enter Your Nickname');
        this.nickName.setAttribute('required', true);
        this.regFormSubmit.textContent = 'Sign up';
        this.regFormSubmit.setAttribute('type', 'submit');
        this.parentNode.appendChild(this.signUpForm);
        return this;
    }
};