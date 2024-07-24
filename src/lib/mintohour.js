const minToHour = (totalMin) => {
    var h = Math.floor(totalMin / 60);
    var m = totalMin % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return h + ':' + m;
}

export default minToHour;