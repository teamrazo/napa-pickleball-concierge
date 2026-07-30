import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #6B2737 0%, #2C2C2C 100%)",
          color: "#FAF7F2",
          display: "flex",
          fontSize: 28,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        NP
      </div>
    ),
    size,
  );
}
