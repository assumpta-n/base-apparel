function submitEmail() {
    let feedBackEls = document.getElementsByClassName('toggle-visibility')
    Array.prototype.forEach.call(feedBackEls, feedBackEl => {
        feedBackEl.style.visibility = 'hidden'
    })
}
