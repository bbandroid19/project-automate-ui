// import React, { Component } from 'react';
// import { w3cwebsocket as W3CWebSocket } from "websocket";

// const client = new W3CWebSocket('ws://127.0.0.1:8000');

// class ProjectStatus extends Component {
//   componentWillMount() {
//     client.onopen = () => {
//       console.log('WebSocket Client Connected');
//     };
    
//     client.onmessage = (message) => {
//         const dataFromServer = JSON.parse(message.data);
//         const stateToChange = {};
//         if (dataFromServer.type === "userevent") {
//           stateToChange.currentUsers = Object.values(dataFromServer.data.users);
//         } else if (dataFromServer.type === "contentchange") {
//           stateToChange.text = dataFromServer.data.editorContent || contentDefaultMessage;
//         }
//         stateToChange.userActivity = dataFromServer.data.userActivity;
//         this.setState({
//           ...stateToChange
//         });
//       };
//   }
  
//   logInUser = () => {
//     const username = this.username.value;
//     if (username.trim()) {
//       const data = {
//         username
//       };
//       this.setState({
//         ...data
//       }, () => {
//         client.send(JSON.stringify({
//           ...data,
//           type: "userevent"
//         }));
//       });
//     }
//   }
  
//   /* When content changes, we send the
//   current content of the editor to the server. */
//   onEditorStateChange = (text) => {
//    client.send(JSON.stringify({
//      type: "contentchange",
//      username: this.state.username,
//      content: text
//    }));
//   };
//   render() {
//     return (
//       <div>
//         Practical Intro To WebSockets.
//       </div>
//     );
//   }
// }

// export default ProjectStatus;