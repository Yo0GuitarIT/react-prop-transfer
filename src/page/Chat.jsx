import Chatroom from "../components/Chatroom";

function Main({ onEntryClick }) {
  const rooms = [
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello,everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello,everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello,everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello,everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello,everyone",
    },
    {
      image: "https://picsum.photos/seed/picsum/200",
      username: "hello",
      lastMessage: "hello,everyone",
    },
  ];

  return (
    <div className="px-4 py-2  divide-y">
      {rooms.map((room) => (
        <Chatroom
          id={room.username}
          image={room.image}
          username={room.username}
          message={room.lastMessage}
          onEntryClick={onEntryClick}
        />
      ))}
    </div>
  );
}


export default Main;
