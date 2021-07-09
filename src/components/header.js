const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const newspaperHeader = document.createElement('div')
  const headerDate = document.createElement('span')
  const headerTitle = document.createElement('h1')
  const headerTemp = document.createElement('span')

  headerDate.textContent = date
  headerTitle.textContent = title
  headerTemp.textContent = temp

  newspaperHeader.classList.add('header')
  headerDate.classList.add('date')
  headerTemp.classList.add('temp')

  newspaperHeader.appendChild(headerDate)
  newspaperHeader.appendChild(headerTitle)
  newspaperHeader.appendChild(headerTemp)

  return newspaperHeader
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const topOfPaper = document.querySelector(`${selector}`)
  // Header('The Lambda Review', 'July 9, 2021', '82F')
  topOfPaper.appendChild(Header('The Lambda Review', 'July 9, 2021', '82F'))
}

export { Header, headerAppender }
