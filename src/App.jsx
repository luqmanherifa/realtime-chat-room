import SharedTextField from "./components/SharedTextField";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-xl font-semibold mb-4">The Chat Room</h1>
        <SharedTextField />
      </div>
    </main>
  );
}
