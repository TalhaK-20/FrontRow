import "./globals.css";

export const metadata = {
  title: "SFB - Marketing Catalysts",
  description: "Optimize your marketing strategy",
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