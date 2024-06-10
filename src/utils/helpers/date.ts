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

export function convertIsoToCustomFormat(isoString: string): string {
  let date = new Date(isoString);

  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    " " +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":00"
  );
}
