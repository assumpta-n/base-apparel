function submitEmail() {
    preventDefaultEvent()
    let feedBackEls = document.getElementsByClassName('toggle-visibility')
    Array.prototype.forEach.call(feedBackEls, feedBackEl => {
        feedBackEl.style.visibility = 'hidden'
    })
}
function preventDefaultEvent() {
    let event = window.event
    event.preventDefault()
}
