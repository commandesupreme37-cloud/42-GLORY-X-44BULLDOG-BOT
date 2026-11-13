
export const metadata = {
  title: "Supreme Bot Deployer",
  description: "WhatsApp Bot Deployment Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "#080d18",
        color: "white"
      }}>
        {children}
      </body>
    </html>
  );
    }
    
