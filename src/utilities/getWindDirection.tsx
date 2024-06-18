// credits go to: https://stackoverflow.com/a/54677081/18412498

const getWindDirection = (angle: number) => {
  const directions = [
    "↓ N",
    "↙ NE",
    "← E",
    "↖ SE",
    "↑ S",
    "↗ SW",
    "→ W",
    "↘ NW",
  ];

  return directions[Math.round(angle / 45) % 8];
};

export default getWindDirection;
