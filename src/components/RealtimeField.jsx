import { useRealtimeText } from "../hooks/useRealtimeText";

export default function RealtimeField({ label, path }) {
  const { text, updateText } = useRealtimeText(path);

  return (
    <div className="space-y-2">
      <label className="font-medium">{label}</label>
      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        className="w-full h-32 p-3 border rounded resize-none"
        placeholder={`Ketik untuk ${label}`}
      />
    </div>
  );
}
