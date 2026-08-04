import { ImageResponse } from "next/og";

export const alt = "Ebaad Akram — UI/UX & Product Design";
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
          background: "#0b0d12",
          color: "#ede8de",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d6ab63",
          }}
        >
          Ebaad Akram · UI/UX & Product Design
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 68,
            lineHeight: 1.15,
            maxWidth: 980,
            fontWeight: 600,
          }}
        >
          I design interfaces that make complicated systems feel human.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#948f83",
          }}
        >
          Software Engineering · Product Thinking · Interface Design
        </div>
      </div>
    ),
    { ...size }
  );
}
