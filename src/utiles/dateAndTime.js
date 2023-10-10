export function getCurrentDateTime() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return { date: formattedDate, time: formattedTime };
}

