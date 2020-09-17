import React from 'react';
import * as emailjs from 'emailjs-com';
import lines from "../images/lines.svg";
import '../stylesheets/Contact.css'
import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      email: '',
      subject: '',
      message: '',
      sentMessage:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { uname, email, subject, message } = this.state;
    const templateParams = {
      from_name: uname,
      from_email: email,
      to_name: 'Mihir Verma',
      subject:subject,
      message: message,
    };
    emailjs.send(
      'gmail',
      'template_o86oxhg',
       templateParams,
      'user_BGLVimGyLO9ukuaANot5w'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      uname: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { uname, email, subject, message, sentMessage } = this.state;

    return (
      <div className="contact-form" id="contact-form">
        <div className="contact-header">
        <h1>GET IN TOUCH</h1>
          <img src={lines} alt="image not found" />
        <br/>
      </div>
      <form onSubmit={this.handleSubmit}>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input
              name="uname"
              type="text"
              placeholder="Your Full Name"
              value={uname}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Email for contact</Label>
          <Control>
            <Input
              name="email"
              type="email"
              placeholder="Email@Mail.com"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Subject</Label>
          <Control>
            <Input
              name="subject"
              type="text"
              placeholder="What is the subject?"
              value={subject}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Label>Message</Label>
          <Control>
            <Textarea
              name="message"
              placeholder="Send Me Your Message "
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>

        <Field kind="group">
          <Control>
            <Button color="dark">SEND</Button>
          </Control>
          <Control>
            <Button text>RESET</Button>
          </Control>
        </Field>

      </form>
      </div>
    );
  }
}

export default ContactForm;