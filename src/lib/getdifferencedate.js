import { parseISO, differenceInCalendarDays } from 'date-fns';

const getDifferenceDate = ({ startDate, endDate, scheduleType }) => {
    if (scheduleType == 'range') {
        const start = parseISO(startDate.toISOString());
        const end = parseISO(endDate.toISOString());
        return differenceInCalendarDays(start, end);
    } else {
        return 1;
    }
}

export default getDifferenceDate;