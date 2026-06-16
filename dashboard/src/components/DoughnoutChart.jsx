import React from "react";

export const DoughnutChart = ({ data }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return null;
  }

  const dataset = data.datasets[0];
  const chartData = dataset.data || [];
  const backgroundColors = dataset.backgroundColor || [];
  const labels = data.labels || [];

  const total = chartData.reduce((sum, val) => sum + val, 0);

  // SVG parameters
  const size = 200;
  const radius = 60;
  const strokeWidth = 24;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginTop: "20px" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#f1f3f5"
          strokeWidth={strokeWidth}
        />
        {/* Segments */}
        {chartData.map((value, index) => {
          const percentage = total > 0 ? value / total : 0;
          const strokeLength = percentage * circumference;
          const strokeOffset = circumference - currentOffset + (circumference / 4); // Start at top (12 o'clock)
          currentOffset += strokeLength;

          const color = backgroundColors[index] || "#ccc";

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${strokeLength} ${circumference}`}
              strokeDashoffset={strokeOffset}
              transform={`rotate(-90 ${center} ${center})`}
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            >
              <title>{`${labels[index]}: ${value} (${(percentage * 100).toFixed(1)}%)`}</title>
            </circle>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", maxWidth: "250px" }}>
        {labels.map((label, index) => {
          const color = backgroundColors[index] || "#ccc";
          return (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#495057" }}>
              <span style={{ display: "inline-block", width: "12px", height: "12px", backgroundColor: color, borderRadius: "2px" }} />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
