import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import ChatRoom from "./page/ChatRoom";
import Chat from "./page/Chat";
import { useState } from "react";

function App() {
  const [messages, setMessage] = useState([
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis autem totam, velit quasi quo dolor perspiciatis placeat delectus, esse distinctio nemo nulla officiis sed omnis, assumenda odit ex. Quaerat.",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis autem totam, velit quasi quo dolor perspiciatis placeat delectus, esse distinctio nemo nulla officiis sed omnis, assumenda odit ex. Quaerat.",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis autem totam, velit quasi quo dolor perspiciatis placeat delectus, esse distinctio nemo nulla officiis sed omnis, assumenda odit ex. Quaerat.",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis autem totam, velit quasi quo dolor perspiciatis placeat delectus, esse distinctio nemo nulla officiis sed omnis, assumenda odit ex. Quaerat.",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis autem totam, velit quasi quo dolor perspiciatis placeat delectus, esse distinctio nemo nulla officiis sed omnis, assumenda odit ex. Quaerat.",
    },
  ]);
  const [inChatRoom, setInChatRoom] = useState(false);

  return (
    <div className="App">
      <Header
        title="James"
        isBack={inChatRoom}
        onExitClick={() => setInChatRoom(false)}
      />
      {!!inChatRoom && <ChatRoom messages={messages} />}
      {!inChatRoom && <Chat onEntryClick={() => setInChatRoom(true)} />}
      <BottomNav
        onPlusClick={() => {
          setMessage([
            ...messages,
            {
              image: "https://picsum.photos/seed/picsum/200",
              message:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veritatis autem totam, velit quasi quo dolor perspiciatis placeat delectus, esse distinctio nemo nulla officiis sed omnis, assumenda odit ex. Quaerat.",
            },
          ]);
        }}
      />
    </div>
  );
}

export default App;
