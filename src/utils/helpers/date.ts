function extractTimeFromDate(dateString: string) {
  const parts: string[] = dateString.split(" ");
  const time: string = parts[1];

  return time.slice(0, -3);
}

function extractMonthAndNumber(dateString: string): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parts: string[] = dateString.split("-");
  const monthNumber: number = parseInt(parts[1], 10);

  const monthName: string = months[monthNumber - 1];

  return monthName + " " + monthNumber;
}

export function formatDate(dateString: string): string {
  return (
    extractMonthAndNumber(dateString) + ", " + extractTimeFromDate(dateString)
  );
}
