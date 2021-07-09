import axios from "axios"
import { response } from "msw"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const articleHeadline = document.createElement('div')
  const articleAuthor = document.createElement('div')
  const imgHolder = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')
  
  articleHeadline.textContent = `${article.headline}`
  img.src = `${article.authorPhoto}`
  authorName.textContent = `${article.authorName}`

  card.classList.add('card')
  imgHolder.classList.add('img-container')
  articleHeadline.classList.add('headline')
  articleAuthor.classList.add('author')

  card.appendChild(articleHeadline)
  card.appendChild(articleAuthor)
  articleAuthor.appendChild(imgHolder)
  articleAuthor.appendChild(authorName)
  imgHolder.appendChild(img)

  card.addEventListener('click', (event) => {
    console.log(articleHeadline)
  })

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardTarget = document.querySelector(`${selector}`)
  // let topics
  // axios.get(`http://localhost:5000/api/topics`)
  // .then( response => {
  //  let topics = response.data.topics
  // //  return topics
   
  // })
  // console.log(topics)
  axios.get(`http://localhost:5000/api/articles`)
  
  // .then( response => {
  //   response.data.articles.javascript.forEach( x => {
  //     let cardTitle = x;
  //     cardTarget.appendChild(cardTitle);
  //   })
  //   .then( x => {
  //     x.forEach( item => {
  //       let card = Card(item)
  //       cardTarget.appendChild(card)
  //     })
  //   })
  //   })
  // .then( response => {
  //   response.forEach( item => {
  //     let tabTitle = item
  //     cardTarget.appendChild(tabTitle)
  //   })
  //   .then(tabTitle => {
  //     tabTitle.forEach( thing => {
  //       let card = Card(thing)
  //       cardTarget.appendChild(card)
  //     })
  //   })
  // })
  // .then(response => {
  //   console.log("here is the res", response)
  // })

  //sort of works
  //   .then( response => {
  //     const article = response.data.articles.javascript
  //     article.forEach( item => {
  //     let card = Card(item)
  //     cardTarget.appendChild(card)
  //   })
  // })
  //end of sort of works
//more close to working
.then( response => {
  Object.values(response.data.articles).forEach((key) => {
    key.forEach(item => {
      let card = Card(item)
      cardTarget.appendChild(card)
    })
  })
})

//end of close to working
  // .then( response => {
  //   response.data.articles.bootstrap.forEach( item => {
  //     let card = Card(item)
  //     cardTarget.appendChild(card)
  //   })
  // })

  // .then( response => {
  //   response.data.articles.technology.forEach( item => {
  //     let card = Card(item)
  //     cardTarget.appendChild(card)
  //   })
  // })

  // .then( response => {
  //   response.data.articles.jquery.forEach( item => {
  //     let card = Card(item)
  //     cardTarget.appendChild(card)
  //   })
  // })

  // .then( response => {
  //   response.data.articles.node.forEach( item => {
  //     let card = Card(item)
  //     cardTarget.appendChild(card)
  //   })
  // })
 
  .catch(err => console.log(err.message))
  .finally(() => console.log('done'))
}

//   axios.get(`http://localhost:5000/api/articles`)
//   .then(response => {
//   response.data.forEach(title => {

//     const card = Card(response.data)
//   })
//     return card
//   })
//   .then(card => {
//     cardTarget.appendChild(card)
//   })
//   .catch(err => console.log(err.message))
//   .finally(() => console.group('done2'))
// }

export { Card, cardAppender }
