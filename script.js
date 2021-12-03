const buttons = document.querySelectorAll(".button")
const content = document.querySelectorAll(".res")
const change = document.getElementsByClassName("bgChange")
const root = document.querySelector(':root');
const bgChange = document.querySelector('.bgChange')
const modal = document.getElementsByClassName("modal")
const card = document.getElementsByClassName("work-card")
console.log(root)
buttons[0].onclick = () => {
    for (let i = 0; i < content.length; i++) {
        if (buttons[0].innerText === content[i].id) {
            content[i].classList.remove("d-none")
            buttons[0].classList.add('bgPink')
        } else {
            content[i].classList.add("d-none")
            buttons[1].classList.remove("bgPink")
            buttons[2].classList.remove("bgPink")
            buttons[3].classList.remove("bgPink")
            buttons[4].classList.remove("bgPink")
        }
    }
}
buttons[1].onclick = () => {
    for (let i = 0; i < content.length; i++) {
        if (buttons[1].innerText === content[i].id) {
            content[i].classList.remove("d-none")
            buttons[1].classList.add('bgPink')

        } else {
            content[i].classList.add("d-none")
            buttons[0].classList.remove("bgPink")
            buttons[2].classList.remove("bgPink")
            buttons[3].classList.remove("bgPink")
            buttons[4].classList.remove("bgPink")
        }
    }
}
buttons[2].onclick = () => {
    for (let i = 0; i < content.length; i++) {
        if (buttons[2].innerText === content[i].id) {
            content[i].classList.remove("d-none")
            buttons[2].classList.add('bgPink')

        } else {
            content[i].classList.add("d-none")
            buttons[0].classList.remove("bgPink")
            buttons[1].classList.remove("bgPink")
            buttons[3].classList.remove("bgPink")
            buttons[4].classList.remove("bgPink")
        }
    }
}
buttons[3].onclick = () => {
    for (let i = 0; i < content.length; i++) {
        if (buttons[3].innerText === content[i].id) {
            content[i].classList.remove("d-none")
            buttons[3].classList.add('bgPink')

        } else {
            content[i].classList.add("d-none")
            buttons[0].classList.remove("bgPink")
            buttons[1].classList.remove("bgPink")
            buttons[2].classList.remove("bgPink")
            buttons[4].classList.remove("bgPink")
        }
    }
}
buttons[4].onclick = () => {
    for (let i = 0; i < content.length; i++) {
        if (buttons[4].innerText === content[i].id) {
            content[i].classList.remove("d-none")
            buttons[4].classList.add('bgPink')

        } else {
            content[i].classList.add("d-none")
            buttons[0].classList.remove("bgPink")
            buttons[1].classList.remove("bgPink")
            buttons[2].classList.remove("bgPink")
            buttons[3].classList.remove("bgPink")
        }
    }
}

function colorChange () {
    let trigger = false
change[0].onclick = () => {
    trigger = !trigger
    if (trigger) {
        root.style.setProperty('--darkBg', '#ecf0f3');
        root.style.setProperty('--darkIn', '#fff');
        root.style.setProperty('--h1Font', '#1d1e24');
        root.style.setProperty('--lightFont', '#212428');
        bgChange.style.setProperty('background-color', '#212428')

} else {
        root.style.setProperty('--darkBg', '#1d1e24');
        root.style.setProperty('--h1Font', '#eeeeee');
        root.style.setProperty('--darkIn', '#212428');
        root.style.setProperty('--lightFont', '#cecece');
        bgChange.style.setProperty('background-color', '#ecf0f3')
    }
}
}
colorChange ()


                    //MODALS
const close = document.getElementsByClassName("close")
const body = document.querySelector('body')

for (let i = 0; i < card.length; i++) {
    card[i].onclick = () => {
        for (let j = 0; j < modal.length; j++) {
            if (card[i].id + 1 === modal[j].id) {
                modal[j].classList.add("d-flex")
                body.style.setProperty('overflow', 'hidden');
            }
        }
    }
}
for (let i = 0; i < close.length; i++) {
    close[i].onclick = () => {
        for (let j = 0; j < modal.length; j++) {
            modal[i].classList.remove('d-flex')
            body.style.setProperty('overflow', 'auto');
        }
    }
}
const workCard3 = document.getElementById('3')
const workCard9 = document.getElementById('9')


window.onresize = () => {
    if (window.innerWidth < 800) {
        workCard3.classList.add('mt-30')
        workCard9.classList.add('mt-30')
    }
    if (window.innerWidth > 800) {
        workCard3.classList.remove('mt-30')
        workCard9.classList.remove('mt-30')
    }
}

function mt30 () {
    if (window.innerWidth < 800) {
        workCard3.classList.add('mt-30')
        workCard9.classList.add('mt-30')
    }
    if (window.innerWidth > 800) {
        workCard3.classList.remove('mt-30')
        workCard9.classList.remove('mt-30')
    }
}
mt30()