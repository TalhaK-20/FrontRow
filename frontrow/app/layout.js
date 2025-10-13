import "./globals.css";

export const metadata = {
  title: "Front Row - Commerce Catalysts",
  description: "Optimize your retail media strategy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}