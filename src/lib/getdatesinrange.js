import { eachDayOfInterval } from 'date-fns';

function getDatesInRange(startDate, endDate) {
    return eachDayOfInterval({
        start: new Date(startDate),
        end: new Date(endDate)
    })
}

export default getDatesInRange;