import RealtimeField from "./components/RealtimeField";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-xl font-semibold">Realtime Chat Room</h1>

        <RealtimeField label="Field A" path="fields/fieldA" />

        <RealtimeField label="Field B" path="fields/fieldB" />
      </div>
    </main>
  );
}
