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

const cardsContainer = document.querySelector(".cards-container");



const articlesArray = [];


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        console.log(response.data.articles)
      
        // cardsContainer.append(cardCreator(response));

        response.data.articles.bootstrap.map(article => {
              cardsContainer.prepend(cardCreator(article));
        })

        response.data.articles.javascript.map(article => {
            cardsContainer.prepend(cardCreator(article));
        })

        response.data.articles.technology.map(article => {
            cardsContainer.prepend(cardCreator(article));
        })

        response.data.articles.jquery.map(article => {
            cardsContainer.prepend(cardCreator(article));
        })

        response.data.articles.node.map(article => {
            cardsContainer.prepend(cardCreator(article));
      })
        console.log(articlesArray);

        // topicsArray.forEach(element => {
        //     topics.append(Tabs(element));
            
        })  
    .catch( error => {
        console.log("the data was not returned", error)
      });




function cardCreator(response){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author= document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorBy = document.createElement('span');

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(image);
    author.append(authorBy);

    headline.textContent = `${response.headline}`;
    image.src = response.authorPhoto;
    authorBy.textContent = `${response.authorName}`;


    return card;



}
