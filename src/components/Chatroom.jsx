function Chatroom({ image, username, message, onEntryClick }) {
  return (
    <button className="w-full text-left py-2" onClick={() => onEntryClick()}>
      <div className=" flex space-x-4 ">
        <img className="rounded-full w-16" src={image} alt="lorem" />
        <div className="text-sm">
          <h3 className="font-bold">{username}</h3>
          <p>{message}</p>
        </div>
      </div>
    </button>
  );
}

export default Chatroom;
