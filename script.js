const reviews = [{
       person:'Max Tron',
       img:src="img/4-1.jpg",
       job:'Mechanic',
       info:'MY friend and I worked Hard for years that passed.'         
                },
            {
                    person:'Lucas Fernandez',
                    img: src="img/1-1.jpg" ,
                    job:'Accountant',
                    info:'My friend and I take care of every sheets there is.'         
             },
             {
                person:'Mark Twine',
                img: src="img/2-1.jpg",
                job:'Engineer',
                info:'Hi, I am Mark Twine, and  I am an engineer.'         
             },
             {
            person:'Martin Hemsworth',
            img:  src="img/3-1.jpg" ,
            job:'Project Manager',
            info:'Hello my friend, how you doing ?'         
             },
                 
]

// serial of reviews

let counter = 0;

// details declaration

const img = document.getElementById('personImg');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// buttons

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

// window

window.addEventListener( 'DOMContentLoaded', showPerson());

function showPerson() {
     const item = reviews[counter];
     img.src = item.img;
     author.textContent = item.person;
     job.textContent = item.job;
     info.textContent = item.info;

}


nextBtn.addEventListener('click', 
     function () {
        counter++;
        if(counter > reviews.length - 1) {
            counter = 0;
        }
        showPerson();
     }
)


prevBtn.addEventListener('click', 
    function () {
       counter--;
       if(counter < 0) {
           counter = reviews.length -1;
       }
       showPerson();
    }
)

randomBtn.addEventListener('click', function () {
      counter = Math.floor(Math.random() * reviews.length);
      showPerson();
})
