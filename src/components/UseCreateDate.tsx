const useCreateDate = (): string => {
    const dateObj = new Date();
    const month: number = dateObj.getMonth();
    let monthName: string | undefined;

    switch(month) {
        case 0: monthName = "Jan";
        break;
        case 1: monthName = "Feb";
        break;
        case 2: monthName = "March";
        break;
        case 3: monthName = "April";
        break;
        case 4: monthName = "May";
        break;
        case 5: monthName = "June";
        break;
        case 6: monthName = "July";
        break;
        case 7: monthName = "Aug";
        break;
        case 8: monthName = "Sep";
        break;
        case 9: monthName = "Oct";
        break;
        case 10: monthName = "Nov";
        break;
        case 11: monthName = "Dec";
        break;
        default: monthName = "Unknown"; // Added a default value to handle cases outside 0-11
    }

    const date: string = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
    return date;
}

export default useCreateDate;
