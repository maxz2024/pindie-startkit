import "./globals.css";
import { App } from "./App";


export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
