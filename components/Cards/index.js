// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const container = document.querySelector('.cards-container');

function createCard(data) {
    const cardHeadline = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imageContainer = document.createElement('div'),
        image = document.createElement('img'),
        bio = document.createElement('span');


    headline.classList.add('headline');
    author.classList.add('author');
    image.classList.add('img-container');
    cardHeadline.classList.add('card');


    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    author.textContent = data.authorName;


    cardHeadline.appendChild(headline);
    cardHeadline.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(bio);

    return cardHeadline;

};

axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then((response) => {
        console.log("Awesome JOB!", response.data);
        console.log("Articles", response.data.articles);
        console.log("Bootstrap", response.data.articles.bootstrap);
        console.log("Javascript", response.data.articles.javascript);
        console.log("JQuery", response.data.articles.jquery);
        console.log("Node", response.data.articles.node);
        console.log("Technology", response.data.articles.technology);


        Object.values(response.data.articles).forEach(topic => {
            topic.forEach((headline) => {
                let container = document.querySelector('.cards-container');
                container.appendChild(createCard(headline))
            })
        })
    })

    .catch((error) => {
        console.log("WTF BRO! All you see is red, FIX IT!", error);
    })
