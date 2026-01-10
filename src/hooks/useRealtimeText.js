import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../lib/firebase";

export function useRealtimeText(path = "sharedText/value") {
  const [text, setText] = useState("");
  const textRef = ref(db, path);

  useEffect(() => {
    const unsubscribe = onValue(textRef, (snapshot) => {
      const value = snapshot.val();
      if (value !== null) setText(value);
    });

    return () => unsubscribe();
  }, [path]);

  const updateText = (value) => {
    setText(value);
    set(textRef, value);
  };

  return { text, updateText };
}
