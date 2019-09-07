(function () {

    const images = [];
    let tracker = 0;

    images[0] = './images/images1.jpg';
    images[1] = './images/images2.jpg';
    images[2] = './images/images3.jpg';

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');


    document.slide.src = images[tracker]

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('prev')) {
            tracker < images.length - 1 ? tracker++ : tracker = 0
            document.slide.src = images[tracker]
        } else if (event.target.classList.contains('next')) {
            tracker > 0 ? tracker-- : tracker = images.length - 1
            document.slide.src = images[tracker]
        }
    })


})()