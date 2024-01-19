function ChatBox({ image, message, isRight }) {
  const elements = [
    <div>
      <img className="rounded-full w-48" src={image} alt="lorem" />
    </div>,
    <p className="bg-gray-200 rounded-lg p-4">{message}</p>,
  ];

  return (
    <div className="flex space-x-4">
      {isRight ? elements.reverse() : elements}
    </div>
  );
}

export default ChatBox;
