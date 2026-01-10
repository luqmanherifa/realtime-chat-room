import { useRealtimeText } from "../hooks/useRealtimeText";

export default function SharedTextField() {
  const { text, updateText } = useRealtimeText();

  return (
    <textarea
      value={text}
      onChange={(e) => updateText(e.target.value)}
      placeholder="Ketik, semua device langsung lihat..."
      className="w-full h-40 p-4 border rounded resize-none"
    />
  );
}
