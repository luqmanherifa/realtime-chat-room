export default function SelectScreen({ onCreateClick, onJoinClick }) {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col h-full justify-center">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-heading tracking-wide text-rumor">
            Rumorum
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Cerita yang lewat di satu ruang
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={onCreateClick}
            className="h-24 rounded-2xl bg-whisper active:scale-95 transition text-base font-bold uppercase tracking-wide text-white"
          >
            Buat Room
          </button>
          <button
            onClick={onJoinClick}
            className="h-24 rounded-2xl bg-echo active:scale-95 transition text-base font-bold uppercase tracking-wide text-white"
          >
            Gabung Room
          </button>
        </div>
      </div>
    </main>
  );
}
