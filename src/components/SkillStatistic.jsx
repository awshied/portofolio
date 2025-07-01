import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Registrasi ChartJS
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

ChartJS.defaults.plugins.tooltip.enabled = true;

// Helper
const getSkillLevel = (percentage) => {
  if (percentage >= 80) return "🟢 Expert";
  if (percentage >= 60) return "🟡 Intermediate";
  if (percentage >= 40) return "🟠 Basic";
  return "🔴 Beginner";
};

const SkillStatistic = ({ roleData }) => {
  const [screenSize, setScreenSize] = useState({ width: 1024, height: 768 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // 🔁 Digunakan!
  const getResponsiveSize = (mobile, tablet, desktop, large = desktop) => {
    if (screenSize.width < 640) return mobile;
    if (screenSize.width < 768) return tablet;
    if (screenSize.width < 1024) return desktop;
    return large;
  };

  // Responsif: height, font size, radius
  const chartHeight = getResponsiveSize(220, 300, 450, 450);
  const pointRadius = getResponsiveSize(1, 3, 5, 6);
  const pointFontSize = getResponsiveSize(8, 11, 13, 13);

  if (!Array.isArray(roleData?.languagePercentage)) {
    return <div className="text-red-500">Data tidak tersedia</div>;
  }

  const labels = roleData.languagePercentage.map((lang) =>
    typeof lang === "object" ? lang.name || lang.label || "Unknown" : "Unknown"
  );

  const values = roleData.languagePercentage.map((lang) => {
    const value = lang?.value ?? lang?.percentage ?? lang?.statsBar ?? 0;
    return typeof value === "number" ? value : parseFloat(value) || 0;
  });

  console.log("Radar chart values:", values);

  const data = {
    labels,
    datasets: [
      {
        label: roleData.name || "Skills",
        data: values,
        backgroundColor: "rgba(147, 51, 234, 0.2)",
        borderColor: "rgba(147, 51, 234, 1)",
        pointBackgroundColor: "rgba(147, 51, 234, 1)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: "#9ca3af",
          backdropColor: "transparent",
          showLabelBackdrop: false,
          font: {
            size: pointFontSize,
          },
        },
        pointLabels: {
          font: {
            size: pointFontSize + 3,
            weight: "500",
          },
          color: "#c084fc",
          padding: 6,
        },
        grid: {
          color: "rgba(156, 163, 175, 0.3)",
          lineWidth: 1,
        },
        angleLines: {
          color: "rgba(156, 163, 175, 0.3)",
          lineWidth: 1,
        },
        drawBorder: true,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        borderWidth: 2,
        radius: pointRadius,
        hoverRadius: pointRadius + 3,
        backgroundColor: "rgba(147, 51, 234, 1)",
        hoverBackgroundColor: "rgba(147, 51, 234, 1)",
        hoverBorderColor: "#ffffff",
        hoverBorderWidth: 3,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(147, 51, 234, 1)",
        borderWidth: 2,
        cornerRadius: 8,
        displayColors: false,
        titleFont: {
          size: pointFontSize,
          weight: "bold",
        },
        bodyFont: {
          size: pointFontSize,
        },
        padding: 12,
        callbacks: {
          label: (context) => `${context.parsed.r}%`,
          afterLabel: (context) => getSkillLevel(context.parsed.r),
        },
      },
      legend: { display: false },
      title: { display: false },
    },
    interaction: {
      intersect: true,
      mode: "nearest",
    },
    onHover: (event, activeElements) => {
      if (event?.native?.target) {
        event.native.target.style.cursor =
          activeElements.length > 0 ? "pointer" : "default";
      }
    },
  };

  return (
    <div
      className="w-full max-w-none mx-auto lg:p-6 rounded-xl"
      style={{ height: `${chartHeight}px` }}
    >
      <div className="relative w-full h-full">
        <Radar data={data} options={options} height={chartHeight} />
      </div>
    </div>
  );
};

SkillStatistic.propTypes = {
  roleData: PropTypes.shape({
    name: PropTypes.string,
    languagePercentage: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        values: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      })
    ),
  }),
};

export default SkillStatistic;
