function convertto12(timeString, min = 0) {
    if (timeString) {
        let newtime = addtime({ time: timeString, otherMinutes: min });
        const timeString12hr = new Date('1970-01-01T' + newtime + 'Z')
            .toLocaleTimeString('en-US',
                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            );
        return timeString12hr;
    } else {
        return '';
    }
}

export default convertto12;

function addtime({ time, otherMinutes }) {
    var hours = parseInt(time.split(":")[0]);
    var minutes = parseInt(time.split(":")[1]);

    var totalInMinutes = (hours * 60) + minutes;
    var grandTotal = otherMinutes + totalInMinutes;
    var newHour = Math.floor(grandTotal / 60);
    var newMin = grandTotal % 60;
    var newHour = newHour < 10 ? "0" + newHour : newHour;
    var newMin = newMin < 10 ? "0" + newMin : newMin;
    var newTime = newHour + ':' + newMin;
    return newTime;
}

export { addtime };