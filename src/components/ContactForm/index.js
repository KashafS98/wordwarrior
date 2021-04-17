import React from "react";
import Button from "../Button";
import { LeftSide, RightSide, StyledForm } from "./ContactForm.styled";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    type: "tech",
    message: "",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => alert('Thank you for contacting Wordwarrior! We will get back to you soon.'))
      .catch((error) => alert(error))
  };

  render() {
    return (
      <StyledForm 
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
          <input type="hidden" name="form-name" value="contact" />
        <LeftSide>
          <h1>Let's Talk.</h1>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email ID"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <select
            type="text"
            name="type"
            required
            placeholder="Select type"
            defaultValue="tech"
            value={this.state.type}
            onChange={this.handleInputChange}
          >
            <option value="art">Art</option>
            <option value="tech">Tech</option>
          </select>
        </LeftSide>
        <RightSide>
          <textarea
            name="message"
            placeholder="Message"
            required
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <Button type="submit">Submit</Button>
        </RightSide>
      </StyledForm>
    );
  }
}
