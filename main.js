(function () {
    // let i = 0;
    // const images = [];
    // const time = 3e3;

    // images[0] = './images/images1.jpg';
    // images[1] = './images/images2.jpg';
    // images[2] = './images/images3.jpg';

    // const changeImage = () => {
    //     document.slide.src = images[i];

    //     i < images.length - 1 ? i++ : i = 0;

    //     setTimeout(changeImage, time)
    // }
    // console.log('hello')
    // window.onload = changeImage;


    let tracker = 0;
    let images = [];
    let timer = 1e3;

    images[0] = './images/images1.jpg';
    images[1] = './images/images2.jpg';
    images[2] = './images/images3.jpg';

    const imageChanger = () => {
        const img = images[tracker];

        document.slide.src = images[tracker];

        tracker < images.length - 1 ? tracker++ : tracker = 0
        setTimeout(imageChanger, timer)
    }

    // window.onload = imageChanger

})()