const categoryColors = {
  meeting: { bg: "rgba(144, 238, 144, 0.4)", text: "rgb(34, 139, 34)" },
  social: { bg: "rgba(255, 255, 0, 0.4)", text: "rgb(218, 165, 32)" },
  work: { bg: "rgba(135, 206, 250, 0.4)", text: "rgb(30, 144, 255)" },
  personal: { bg: "rgba(255, 182, 193, 0.4)", text: "rgb(255, 105, 180)" },
  default: { bg: "rgba(211, 211, 211, 0.4)", text: "gray" },
};

export default function getCategoryColor(category) {
  return categoryColors[category.toLowerCase()] || categoryColors.default;
}
