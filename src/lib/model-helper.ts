export function getSelectedModel(): string {
  if (typeof window !== "undefined") {
    const storedModel = localStorage.getItem("selectedModel");
    return storedModel || "llama2";
  } else {
    // Default model
    return "llama2";
  }
}
