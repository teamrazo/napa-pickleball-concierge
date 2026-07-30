import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(201,168,76,0.25), transparent 35%), linear-gradient(135deg, #6B2737 0%, #2C2C2C 100%)",
          color: "#FAF7F2",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, textTransform: "uppercase" }}>
          Napa Pickleball Concierge
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 860 }}>
          <div style={{ color: "#C9A84C", fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
            Your Napa Valley, Handled.
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            Curated concierge planning for the valley’s most memorable experiences.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
