(function () {
    let i = 0;
    const images = [];
    const time = 3e3;

    images[0] = './images/images1.jpg';
    images[1] = './images/images2.jpg';
    images[2] = './images/images3.jpg';

    const changeImage = () => {
        document.slide.src = images[i];

        i < images.length - 1 ? i++ : i = 0;

        setTimeout(changeImage, time)
    }
    console.log('hello')
    window.onload = changeImage;

})()