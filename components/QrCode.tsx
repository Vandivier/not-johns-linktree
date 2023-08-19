import React from "react";

type CollapseableQrCodeProps = {
  children: React.ReactNode;
};

type QrCodeProps = {
  height: number;
  width: number;
};

export const QrCodeToggle = ({ children }: CollapseableQrCodeProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <div
      aria-label="QR Code Toggle Button"
      role="button"
      style={{
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        height: "144px",
      }}
    >
      {isCollapsed ? (
        <div onClick={() => setIsCollapsed(!isCollapsed)}>{children}</div>
      ) : null}

      {!isCollapsed ? (
        <div onClick={() => setIsCollapsed(!isCollapsed)}>
          <QrCode height={128} width={128} />
        </div>
      ) : null}
    </div>
  );
};

const QrCode = ({ height, width }: QrCodeProps) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    height={height}
    viewBox="0 0 1147 1147"
    width={width}
    enableBackground="new 0 0 1147 1147"
  >
    <rect x="0" y="0" width="1147" height="1147" fill="rgb(242,242,242)" />
    <g transform="translate(62,62)">
      <g transform="translate(310,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,0) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,31) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,62) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,93) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,93) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,93) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,93) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,93) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,93) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,124) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,155) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,186) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,217) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(124,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,248) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,279) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(124,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,310) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,341) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(31,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,372) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(31,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,403) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,434) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,465) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(31,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(124,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,496) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(31,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,527) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,558) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(124,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,589) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(124,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,620) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,651) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,682) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(155,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,713) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(93,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(124,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(186,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(217,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,744) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,775) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,806) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,837) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(589,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(682,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,868) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(310,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(992,899) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(496,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(620,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,930) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(279,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(403,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(558,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(651,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(775,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(930,961) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(248,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(341,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(372,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(434,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(465,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(527,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(713,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(744,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(806,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(837,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(899,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(961,992) scale(0.31,0.31)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(0,0) scale(2.17, 2.17)">
        <g transform="" fill="rgb(1, 75, 40);">
          <g>
            <path
              fill="none"
              d="M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421
		C15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004
		C76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z"
            />
            <path
              d="M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445
		C0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004
		c18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76
		L50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931
		c1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z"
            />
          </g>
        </g>
      </g>
      <g transform="translate(806,0) scale(2.17, 2.17)">
        <g transform="" fill="rgb(1, 75, 40);">
          <g>
            <path
              fill="none"
              d="M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421
		C15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004
		C76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z"
            />
            <path
              d="M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445
		C0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004
		c18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76
		L50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931
		c1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z"
            />
          </g>
        </g>
      </g>
      <g transform="translate(0,806) scale(2.17, 2.17)">
        <g transform="" fill="rgb(1, 75, 40);">
          <g>
            <path
              fill="none"
              d="M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421
		C15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004
		C76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z"
            />
            <path
              d="M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445
		C0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004
		c18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76
		L50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931
		c1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z"
            />
          </g>
        </g>
      </g>
      <g transform="translate(62,62) scale(0.93, 0.93)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(868,62) scale(0.93, 0.93)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
      <g transform="translate(62,868) scale(0.93, 0.93)">
        <g transform="" fill="rgb(1, 75, 40);">
          <rect width="100" height="100" />
        </g>
      </g>
    </g>
  </svg>
);
