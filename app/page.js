
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "30px 20px",
      background: "#080d18",
      color: "white"
    }}>
      <h1 style={{color: "#00e5ff"}}>
        SUPREME BOT
      </h1>

      <h2>WhatsApp Bot Deployer</h2>

      <p>
        Deploy, connect and manage your
        WhatsApp bots in one place.
      </p>

      <div style={{
        background: "#151f30",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "30px"
      }}>
        <h3>🚀 Deploy Your Bot</h3>
        <p>Start your WhatsApp bot deployment.</p>
        <button style={{
          background: "#00e5ff",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px"
        }}>
          Get Started
        </button>
      </div>

      <div style={{
        background: "#151f30",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px"
      }}>
        <h3>🔗 Pair WhatsApp</h3>
        <p>Connect your WhatsApp account.</p>
      </div>

      <div style={{
        background: "#151f30",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px"
      }}>
        <h3>📊 Bot Dashboard</h3>
        <p>Manage your deployed bots.</p>
      </div>
    </main>
  );
    }
    
