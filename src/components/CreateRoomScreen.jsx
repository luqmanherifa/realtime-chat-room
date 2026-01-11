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
    <main className="h-screen w-full flex justify-center items-center overflow-hidden bg-white">
      <div className="w-full max-w-md h-full flex flex-col px-6 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Kembali"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current"
            >
              <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-1">
            Buat Room Baru
          </h1>
          <p className="text-base text-gray-500">
            Lengkapi informasi untuk membuat room chat
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl bg-red-50 border-2 border-red-200 text-red-600 text-sm px-5 py-4 font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <label className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
              Nama Room
            </label>
            <input
              className="w-full h-16 rounded-2xl border-2 border-gray-200 bg-white px-5 text-base font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-whisper focus:ring-0 transition"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Contoh: Room Gaming"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
              Kode Room
            </label>
            <input
              className="w-full h-16 rounded-2xl border-2 border-gray-200 bg-white px-5 text-base font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-whisper focus:ring-0 transition"
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Contoh: gaming123"
            />
            <p className="mt-2 text-sm text-gray-500 px-1">
              Kode ini dipakai untuk join room
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wide">
              Nama Anda
            </label>
            <input
              className="w-full h-16 rounded-2xl border-2 border-gray-200 bg-white px-5 text-base font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-whisper focus:ring-0 transition"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              placeholder="Nama kamu"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={onSubmit}
          className="mt-8 h-16 rounded-2xl bg-whisper text-base font-bold uppercase tracking-wide text-white active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Buat Room
        </button>
      </div>
    </main>
  );
}
