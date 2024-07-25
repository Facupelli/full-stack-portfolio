export function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  } else {
    // Fallback para navegadores que no soportan la API de Clipboard
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}
