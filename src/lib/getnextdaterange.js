import { addDays, subDays } from 'date-fns';
import getDifferenceDate from './getdifferencedate';

const getNextDateRange = ({ range, scheduleType, setDateRange }) => {
    if (scheduleType == 'range') {
        const diffDays = getDifferenceDate({ startDate: range.from, endDate: range.to, scheduleType });
        const start = subDays(range.from, diffDays - 1);
        const end = subDays(range.to, diffDays - 1);
        setDateRange({ from: start, to: end });
    } else {
        const start = addDays(range.from, 1);
        setDateRange({ from: start });
    }
}

export default getNextDateRange;