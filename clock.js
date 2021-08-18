const timebox = document.querySelector('.time-box')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const ul = document.querySelector('ul')
for (let i = 0; i < 60; i++) {
    const lis = document.createElement('li')
    lis.setAttribute('style', ` transform: rotate(${i * 6}deg)`)
    if (i % 5 === 0) {
        lis.setAttribute('style', ` transform: rotate(${i * 6}deg); height:25px`)

    }
    ul.appendChild(lis)
}
for (let j = 1; j <= 12; j++) {
    const div = document.createElement('div')
    div.setAttribute('class', 'box1')
    div.setAttribute('style', ` transform: translate(-50%, -50%) rotateZ(${j * 30}deg) translateY(-200px) rotate(${j * -30}deg)`)
    div.innerText = j
    timebox.appendChild(div)

}
function run() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    hours.setAttribute('style', ` transform: translate(-50% ,-100%)  rotate(${h * 30 + m / 60 * 30 }deg)`)
    minutes.setAttribute('style', ` transform: translate(-50% ,-100%) rotate(${m * 6}deg)`)
    seconds.setAttribute('style', `  transform: translate(-50% ,-100%) rotate(${s * 6}deg)`)

}
run()

setInterval(run, 1000);
