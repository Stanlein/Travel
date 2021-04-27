if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Travel/sw.js', {scope:'/Travel/'})
    .then(reg => console.log('sw is gegister: ', reg))
    .catch(err => console.log('sw not working ', err))
}
