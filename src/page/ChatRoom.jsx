import ChatBox from "../components/ChatBox";

function ChatRoom({ messages }) {
  return (
    <div className="px-4 py-2 space-y-8">
      {messages.map((msg, index) => (
        <ChatBox image={msg.image} message={msg.message} isRight={index % 2} />
      ))}
    </div>
  );
}

export default ChatRoom;
