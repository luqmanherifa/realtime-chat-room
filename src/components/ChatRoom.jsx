import { useChatRoom } from "../hooks/useChatRoom";

export default function ChatRoom({ username, roomCode }) {
  const { roomInfo, allMessages, myMessage, updateMyMessage } = useChatRoom(
    username,
    roomCode
  );

  const myBubble = allMessages.find((m) => m.name === username);
  const otherBubbles = allMessages.filter((m) => m.name !== username);

  return (
    <main className="h-full w-full flex flex-col bg-white">
      <div className="h-16 px-4 flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-base font-extrabold">
            {roomInfo?.name || "Loading..."}
          </h1>
          <p className="text-xs text-gray-500">Anda: {username}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400">Room</p>
          <p className="text-xs font-bold text-blue-500">{roomCode}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {myBubble && (
          <div className="sticky top-2 z-10 flex justify-end mb-4">
            <div className="max-w-[80%] bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm transition-colors">
              <p className="text-[10px] opacity-80 mb-1">Anda</p>
              {myBubble.text ? (
                myBubble.text
              ) : (
                <span className="text-xs opacity-70">(mengetik...)</span>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {otherBubbles.length === 0 ? (
            <p className="text-center text-sm text-gray-400 mt-10">
              Menunggu user lain bergabung…
            </p>
          ) : (
            otherBubbles.map((msg, index) => (
              <div key={index} className="flex justify-start">
                <div className="max-w-[85%] bg-gray-100 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-3 text-sm transition-colors">
                  <p className="text-[10px] font-bold text-gray-500 mb-1">
                    {msg.name}
                  </p>
                  {msg.text ? (
                    msg.text
                  ) : (
                    <span className="text-xs text-gray-400">(diam)</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="px-3 py-3 border-t border-gray-100 bg-white">
        <textarea
          value={myMessage}
          onChange={(e) => updateMyMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              updateMyMessage("");
            }
          }}
          placeholder="Ketik sesuatu…"
          rows={1}
          className="
            w-full
            resize-none
            rounded-2xl
            bg-gray-100
            px-4 py-3
            text-sm
            focus:outline-none
            focus:ring-2 focus:ring-blue-400
          "
        />
      </div>
    </main>
  );
}
