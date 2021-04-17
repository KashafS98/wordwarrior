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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit} netlify>
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
