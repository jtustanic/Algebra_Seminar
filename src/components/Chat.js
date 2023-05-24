import React, { Component } from 'react';
import Messages from './Messages';
import Input from "./Input";
import "./Chat.css";

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFA).toString(16);
}

class Chat extends Component {
  constructor(props) {
    super(props);

    this.drone = new window.Scaledrone(
      "PnFavtIMvMsf69yV",
      {
        data: this.state.member,
      },
    );

    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }

      const member = {
        ...this.state.member,
        id: this.drone.clientId,
      };

      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      const messages = this.state.messages;

      messages.push({ member, text: data});
      this.setState({ messages });
    });

    this.onSendMessage = this.onSendMessage.bind(this);
  }

  state = {
    messages: [],
    member: {
      username: this.props.username,
      color: randomColor(),
    }
  }

  onSendMessage(message) {
    if (message.length === 0) {
      return;
    }

    this.drone.publish({
      room: "observable-room",
      message,
    });
  }

  render() {
    const { member, messages } = this.state;

    return (
      <div className="App">
        <Messages
          currentMember={member}
          messages={messages}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default Chat;
