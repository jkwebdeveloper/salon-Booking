function converttomin(time) {
    return time.split(':').reduce((acc, stime, index) => acc + (index === 0 ? +stime * 60 : +stime), 0)
}

export default converttomin;