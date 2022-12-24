// nav toggle start
// declared id and class
 const navToggle = document.querySelector('.nav-toggle');
 const linksContainer = document.querySelector('.nav-links-container');
 const links = document.querySelector('.nav-links');
// toggling nav with dynamic height
 navToggle.addEventListener('click', function () {

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
 });

//nav toggle end 



// fixed nav start
// declared id and class
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// fixing nav on the scroll
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }
// fixing top link on the scroll
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})
// program achieved!!!

// fixed nav end 

// smooth scrolling start

// declared id and class
const scrollLinks = document.querySelectorAll('.scroll-link');
// setting smooth scrolling by clicking the nav-link 

// accurate scroll to link height was not achieved! i'm embarrassed

// i was not able to make nav-bar close after selecting the nav-link! i'm embarrassed again 
scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // prevent default 
        e.defaultPrevented();
        // navigate to specific spot 
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = element - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});
// smooth scrolling end


// displaying review start
// review lookup list 
const reviews = [
    {
      id: 1,
      name: "susan smith",
      destination: "Kelash Parvat",
      text:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi provident reiciendis, minus eos magnam repellendus similique. Molestias ducimus eveniet, accusamus repellendus ab, aut ipsam omnis aliquam officia rerum maxime.`,
    },
    {
      id: 2,
      name: "anna johnson",
      destination: "San Francisco",
      text: 
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente dolores laudantium architecto repellendus molestiae earum vel itaque, voluptates magnam accusantium quibusdam excepturi, accusamus reprehenderit ipsum voluptatibus assumenda distinctio repellat.`,   
    },
    {
      id: 3,
      name: "peter jones",
      destination: "Kashmir",
      text: 
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti dolorem ex quo, reiciendis dolorum animi impedit alias in voluptate placeat voluptates porro optio voluptas est odit et dolores cumque.`,   
    },
    {
      id: 4,
      name: "bill anderson",
      destination: "Athens",
      text: 
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro veniam ullam provident consectetur ab neque id distinctio molestias, illum tempore doloribus facilis iusto voluptas? Iste quidem facilis aperiam nesciunt.`,   
    },
  ]; 
// declared id and class 
  const customerName = document.getElementById('customer');
  const viewedDestination = document.getElementById('viewed-destination');
  const review = document.getElementById('review');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

// set starting item 
  let currentItem = 0;

// load initial item 
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    customerName.textContent = item.name;
    viewedDestination.textContent = item.destination;
    review.textContent = item.text;
});
// show person based on item 
function showPerson(person) {
    const item = reviews[person];
    customerName.textContent = item.name;
    viewedDestination.textContent = item.destination;
    review.textContent = item.text;
}
// show next person 
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show previous person 
prevBtn.addEventListener('click', function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length -1
    } 
    showPerson(currentItem);
});
// show random person 
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
// it was achieved!!!
// displaying review end



// displaying destination start 
// tours lookup list 
const tours = [
    {
        id: 1,
        title: 'Amsterdam',
        category: 'somewhere far',
        price: 326.71,
        img: './assets/amsterdam, netherland.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
    {
        id: 2,
        title: 'Athens',
        category: 'somewhere far',
        price: 435.59,
        img: './assets/athens, greece.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
    {
        id: 3,
        title: 'Nice',
        category: 'somewhere far',
        price: 472.18,
        img: './assets/nice, france.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
    {
        id: 4,
        title: 'San francisco',
        category: 'somewhere far',
        price: 847.16,
        img: './assets/san francisco, ca.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
    {
        id: 5,
        title: 'Jammu and Kashmir',
        category: 'somewhere near',
        price: 120.95,
        img: './assets/kashmir, india.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
    {
        id: 6,
        title: 'Guwahati',
        category: 'somewhere near',
        price: 133.01,
        img: './assets/guwahati, india.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
    {
        id: 7,
        title: 'Kelash Parvat',
        category: 'somewhere in center',
        price: 96.71,
        img: './assets/kelash parvat, china.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quae ipsa natus et sequi placeat praesentium, deleniti accusamus enim, dicta maiores magni aspernatur, animi facilis! In animi quo rerum!'
    },
]
// deaclared id and class 
const destination = document.querySelector('.destination');
const filterBtn = document.querySelectorAll('.filter-btn');

// loading local data and displaying tours 
window.addEventListener('DOMContentLoaded', function () {
    displayingTours(tours);
});
// filtering through the tours in four category 
filterBtn.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const tourCategory = tours.filter(function(tourPlaces) {
            if(tourPlaces.category === category) {
                return tourPlaces;
            }
        })
        if(category === 'all') {
            displayingTours(tours);
        } else {
            displayingTours(tourCategory);
        };
    });
})
// displaying tours card 
function displayingTours(tours) {
    let displayDestination = tours.map(function (tour) {
        return ` <article class="destination">
        <img width="20em" height="30em" src="${tour.img}" alt="${tour.title}" class="place-img">
    <div class="destination-info">
    <header>
        <h4 class="title">${tour.title}</h4>
        <h4 class="price">$${tour.price}</h4>
    </header>
        <p>
            ${tour.desc}
        </p>
    </div>
</article>`;
    });
    displayDestination = displayDestination.join('');
    destination.innerHTML = displayDestination;

    console.log(displayDestination);
};
// displaying destination end 
