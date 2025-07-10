import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx carregado');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  console.log('Criando root e renderizando App');
  createRoot(rootElement).render(<App />);
} else {
  console.error('Root element não encontrado!');
}
