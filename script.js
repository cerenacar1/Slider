let models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

let index = 0;
let slaytCount = models.length;
let interval;

let settings = {
    duration : "2000",
    random : true
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', () => {
    index--;
    showSlide(index)
    
})

document.querySelector('.fa-arrow-circle-right').addEventListener('click', () => {
    index++;
    showSlide(index)
    
})

document.querySelectorAll('.arrow').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        clearInterval(interval);
    })

});

document.querySelectorAll('.arrow').forEach((item) => {
    item.addEventListener('mouseleave', () => {
        init(settings)
    })

})

function init(settings) {

    let prev;
    interval = setInterval(() => {
        if(settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount)
            } while (index == prev);
            prev = index
        }else {
            if(slaytCount == index + 1) {
                index = 0;
            }
            showSlide(index)
            index++;
        }
        showSlide(index)
    },settings.duration)
}

function showSlide(i) {

    index = i;

    if(i < 0) {
        index = slaytCount - 1;

    } else if (i >= slaytCount) {
        index = 0
    } 

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-title').setAttribute('href',models[index].link);

}





