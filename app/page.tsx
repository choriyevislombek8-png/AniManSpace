export default function Home() {
  return (
    <main style={{minHeight: "100vh", background: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
      <div>
        <h1 style={{fontSize: "60px", background: "linear-gradient(45deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          AniManSpace
        </h1>
        <p style={{fontSize: "24px", color: "#ccc"}}>
          Where Anime Meets AI
        </p>
        <div style={{marginTop: "30px"}}>
          <button style={{padding: "15px 30px", margin: "10px", border: "2px solid #ff00ff", background: "transparent", color: "#ff00ff", borderRadius: "30px"}}>
            Explore
          </button>
          <button style={{padding: "15px 30px", margin: "10px", border: "2px solid #00ffff", background: "transparent", color: "#00ffff", borderRadius: "30px"}}>
            Join Community
          </button>
        </div>
      </div>
    </main>
  )
}
