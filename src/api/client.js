import axios from "axios";

const ventasApiUrl = import.meta.env.VITE_VENTAS_API_URL;
const despachosApiUrl = import.meta.env.VITE_DESPACHOS_API_URL;

if (!ventasApiUrl) {
  throw new Error("Falta definir VITE_VENTAS_API_URL en el archivo .env o en el entorno");
}

if (!despachosApiUrl) {
  throw new Error("Falta definir VITE_DESPACHOS_API_URL en el archivo .env o en el entorno");
}

const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const ventasClient = axios.create({
  baseURL: ventasApiUrl.replace(/\/$/, ""),
  headers: jsonHeaders,
});

export const despachosClient = axios.create({
  baseURL: despachosApiUrl.replace(/\/$/, ""),
  headers: jsonHeaders,
});
