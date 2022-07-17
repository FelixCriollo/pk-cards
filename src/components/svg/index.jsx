import "./style.css"

export function ArrowLeft({color = "#000", width = 8}) {
  return (
    <svg
      className="ArrowSVG"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width * 1.75}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M7.228 13.81l.619-.62a.375.375 0 000-.53L2.2 7l5.647-5.66a.375.375 0 000-.53L7.228.19a.375.375 0 00-.53 0L.153 6.736a.375.375 0 000 .53l6.545 6.544a.375.375 0 00.53 0z"
        fill={color}
      />
    </svg>
  )
}

export function ArrowRight({color = "#000", width = 8}) {
  return (
    <svg
      className="ArrowSVG"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width * 1.75}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M.772.19L.153.81a.375.375 0 000 .53L5.8 7 .153 12.66a.375.375 0 000 .53l.62.62a.375.375 0 00.53 0l6.544-6.545a.375.375 0 000-.53L1.302.19a.375.375 0 00-.53 0z"
        fill={color}
      />
    </svg>
  )
}