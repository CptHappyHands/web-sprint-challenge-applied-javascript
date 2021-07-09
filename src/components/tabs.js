import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicSection = document.createElement('div')
  const firstTopic = document.createElement('div')
  const secondTopic = document.createElement('div')
  const thirdTopic = document.createElement('div')
  const fourthTopic = document.createElement('div')
  const fifthTopic = document.createElement('div')

  firstTopic.textContent = `${topics[0]}`
  secondTopic.textContent = `${topics[1]}`
  thirdTopic.textContent = `${topics[2]}`
  fourthTopic.textContent = `${topics[3]}`
  fifthTopic.textContent = `${topics[4]}`

  topicSection.classList.add('topics')
  firstTopic.classList.add('tab')
  secondTopic.classList.add('tab')
  thirdTopic.classList.add('tab')
  fourthTopic.classList.add('tab')
  fifthTopic.classList.add('tab')

  topicSection.appendChild(firstTopic)
  topicSection.appendChild(secondTopic)
  topicSection.appendChild(thirdTopic)
  topicSection.appendChild(fourthTopic)
  topicSection.appendChild(fifthTopic)

  return topicSection
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabs = document.querySelector(`${selector}`)
  axios.get(`http://localhost:5000/api/topics`)
  .then(response => {
    const tabEl = Tabs(response.data.topics)
    return tabEl
  })
  .then(tab => {
    tabs.appendChild(tab)
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('done'))
}

export { Tabs, tabsAppender }
