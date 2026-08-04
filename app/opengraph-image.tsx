import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Ebaad Akram — Product & Interface Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#faf5ea",
          color: "#362c38",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#bd4527",
          }}
        >
          Ebaad Akram · Product & Interface Design
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 72,
            lineHeight: 1.15,
            maxWidth: 980,
            fontWeight: 600,
          }}
        >
          I make complicated systems make sense.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#857a6e",
          }}
        >
          Software Engineering · Analysis · Interface Design
        </div>
      </div>
    ),
    { ...size }
  );
}
