
import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

const AIChat = () => {
  const [vapi, setVapi] = useState(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const vapiInstance = new Vapi(
  process.env.REACT_APP_VAPI_PUBLIC_KEY
);
console.log("Vapi Key:", process.env.REACT_APP_VAPI_PUBLIC_KEY);


     setVapi(vapiInstance);

    vapiInstance.on("call-start", () => setConnected(true));
    vapiInstance.on("call-end", () => setConnected(false));

    vapiInstance.on("message", (msg) => {
      const text = msg.transcript || msg.content;
      if (text) {
        setMessages((prev) => [
          ...prev,
          { role: msg.role || "assistant", content: text },
        ]);
      }
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const handleStart = () => {
    if (!vapi) return;

    vapi.start({
      assistantId: "339bf936-5cf5-46ca-b870-637c7477a1b3", // ✅ hard-coded OK
    });
  };

  const handleStop = () => {
    vapi?.stop();
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      {!connected ? (
        <button
          onClick={handleStart}
          style={{
            height: 200,
            width: 200,
            background: "skyBlue",
            borderRadius: "50%",
          }}
        >
          Start Assistant
        </button>
      ) : (
        <button
          onClick={handleStop}
          style={{
            height: 200,
            width: 200,
            background: "#FCB045",
            borderRadius: "50%",
          }}
        >
          Stop Assistant
        </button>
      )}
    </div>
  );
};

export default AIChat;
