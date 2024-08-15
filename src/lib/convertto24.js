function convertto24({ time }) {
    let [hours, minutes, modifier] = time.match(/(\d+|pm|am)/gi);
    if (hours === '12') {
        hours = '00';
    }
    if (modifier.toLowerCase() === 'pm') {
        hours = parseInt(hours, 10) + 12;
    }
    // if (hours < 10) hours = '0' + hours;
    // if (minutes < 10) minutes = '0' + minutes;
    return `${hours}:${minutes}`;
}

export default convertto24;