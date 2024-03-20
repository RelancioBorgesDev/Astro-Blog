export const formatDate = (date: Date): string => {
  const diffInMilliseconds = Date.now() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  const units: [string, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  for (const [unit, seconds] of units) {
    const unitDiff = Math.floor(diffInSeconds / seconds);
    if (unitDiff >= 1) {
      return `${unitDiff} ${unit}${unitDiff !== 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};
