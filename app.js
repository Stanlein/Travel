if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('sw is gegister: ', reg))
    .catch(err => console.log('sw not working ', err))
}
