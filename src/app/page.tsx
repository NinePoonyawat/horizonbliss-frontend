export default function HomePage() {
  return (
    <main
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 600,
            letterSpacing: "1px",
            marginBottom: 12,
          }}
        >
          Horizon Bliss Khaoyai
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            opacity: 0.85,
          }}
        >
          ยินดีให้บริการ
        </p>
      </div>
    </main>
  );
}
