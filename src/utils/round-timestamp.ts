export const getRoundTimestampText = (start: string, end: string, tz?: string) =>
  `${formatRoundTimestamp(Number(start), tz)} - ${formatRoundTimestamp(Number(end), tz)}`;

export const formatRoundTimestamp = (timestamp: number, timeZone?: string): string => {
  const date = new Date(timestamp * 1000);
  const parts = [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getDate().toString().padStart(2, '0'),
  ];

  if (timeZone) {
    const timeString = date
      .toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone,
      })
      .replace(/:\d+ /, ' ');

    parts.push(timeString.trim() + ' ' + timeZone);
  }

  const separator = timeZone ? ' ' : '/';
  return parts.join(separator);
};
