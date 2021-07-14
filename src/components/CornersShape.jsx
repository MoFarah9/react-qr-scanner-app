export default function CornersShape() {
  const x = 18
  const lines = [
    `M${25 - x},2 L2,2 L2,${25 - x}`,
    `M2,${75 + x} L2,98 L${25 - x},98`,
    `M${75 + x},98 L98,98 L98,${75 + x}`,
    `M98,${25 - x} L98,2 L${75 + x},2`,
  ]

  return (
    <svg viewBox="0 0 100 100">
      {lines.map((d) => (
        <path d={d} fill="none" stroke="white" stroke-width="1.5" />
      ))}
    </svg>
  )
}
