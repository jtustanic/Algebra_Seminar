import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);

    this.renderMessage = this.renderMessage.bind(this);
  }

  renderMessage(message) {
    const { currentMember } = this.props;
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";

    return (
      <li
        className={className}
        key={text + "_" + new Date().getTime().toString()}
      >
      <span
        className="avatar"
        style={{ backgroundColor: member.clientData.color }}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const { messages } = this.props;

    return (
      <ul className="Messages-list">
        {messages.map(this.renderMessage)}
      </ul>
    );
  }
}

export default Messages;
