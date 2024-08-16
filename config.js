// config.js

// Inserisci la tua chiave API qui in chiaro
const apiKey = 'sk-ftijVuVJzokVLcs6nXWEWYJBuSYsEgOa-2lQ4RGADfT3BlbkFJtkphIuHsfP68VsxYkJ2CoqcFtUpQDHDyawwzfdpGgA';

// Codifica la chiave API in base64 per offuscarla
const encodedApiKey = btoa(apiKey);

// Funzione per decodificare la chiave API
function decodeApiKey(encodedKey) {
    return atob(encodedKey);
}

// Decodifica della chiave API
const OPENAI_API_KEY = decodeApiKey(encodedApiKey);

// Esportiamo la chiave API decodificata per l'uso in altri file
export { OPENAI_API_KEY };
