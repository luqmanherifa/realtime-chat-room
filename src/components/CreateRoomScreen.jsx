export default function CreateRoomScreen({
  roomName,
  setRoomName,
  roomCode,
  setRoomCode,
  username,
  setUsername,
  error,
  onBack,
  onSubmit,
}) {
  return (
    <main className="h-full w-full flex flex-col px-4 pt-6 pb-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-blue-500 font-bold text-sm">
          ← Kembali
        </button>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold">Buat Room Baru</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Isi detail untuk mulai chat
        </p>
      </div>
      {error && (
        <div className="mb-4 rounded-xl bg-red-50 text-red-600 text-sm px-4 py-3">
          {error}
        </div>
      )}
      <div className="flex flex-col gap-5 flex-1">
        <div>
          <label className="block text-sm font-bold mb-2">Nama Room</label>
          <input
            className=" w-full h-14 rounded-xl bg-gray-100 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 "
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Room Gaming"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Kode Room</label>
          <input
            className=" w-full h-14 rounded-xl bg-gray-100 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 "
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="gaming123"
          />
          <p className="mt-1 text-xs text-gray-400">
            Kode ini dipakai untuk join room
          </p>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Nama Anda</label>
          <input
            className=" w-full h-14 rounded-xl bg-gray-100 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 "
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            placeholder="Nama kamu"
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        className=" mt-6 h-14 rounded-2xl bg-yellow-400 text-gray-900 text-lg font-extrabold active:scale-95 transition "
      >
        Buat Room & Masuk
      </button>
    </main>
  );
}
