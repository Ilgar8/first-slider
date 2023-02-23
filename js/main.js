'use strict'

let pics = [
    'photo/one.jpg',
    'photo/two.jpg',
    'photo/three.jpg',
    'photo/four.jpg',
]
let img = document.querySelector("#slider img")
img.src = pics[0]
let next = document.querySelector("#slider .next")
let prev = document.querySelector("#slider .prev")

let currentSlide = 0

next.addEventListener("click", function () {
    currentSlide++
    if (currentSlide >= pics.length) {
        currentSlide = 0

    }

    img.src = pics[currentSlide]

})

prev.addEventListener("click", function () {
    currentSlide -= 1
    if (currentSlide == -1) {
        currentSlide = pics.length - 1

    }
    img.src = pics[currentSlide]

})
