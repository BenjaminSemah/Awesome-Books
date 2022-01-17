const titleInput = document.querySelector('.bk-title-input');
const authorInput = document.querySelector('.bk-author-input');
const booksContainer = document.querySelector('#booksContainer');
const addButton = document.querySelector('.add-book-btn');

let booksArray = localStorage.getItem('bookStorage') ? JSON.parse(localStorage.getItem('bookStorage')) : [];

/// ////// Function to update list of books stored in Local Storage

function updateBookStorage() {
  return localStorage.setItem('bookStorage', JSON.stringify(booksArray));
}

/// /////// Function to allow users add new books to the list

function addNewBook() {
  const titleTrim = titleInput.value.trim();
  const authorTrim = authorInput.value.trim();
  if (titleTrim !== '' && authorTrim !== '') {
    const date = new Date();
    booksArray.push(
      {
        title: titleTrim,
        author: authorTrim,
        id: date.getTime(),
      },
    );
  }
  titleInput.value = '';
  authorInput.value = '';
}

/// /////// Function to allow users to delete books from the list

function removeBooks(element) {
  element.parentNode.remove();
}

/// ///// Function to render book list on interface

function renderBooks() {
  let bookHTML = '';
  booksArray.forEach((book) => {
    bookHTML
    += `
    <li class="singlebook">
      <p class="book-title">${book.title}</p>
      <p class="book-title">${book.author}</p>
      <button id="${book.id}" class="bk-remove-btn" type="button">REMOVE</button>
      <hr>
    </li>
    `;
  });
  booksContainer.innerHTML = bookHTML;
}

addButton.addEventListener('click', () => {
  addNewBook();
  updateBookStorage();
  renderBooks();
});

booksContainer.addEventListener('click', (event) => {
  const button = event.target;
  const buttonId = event.target.id;
  if (buttonId !== '') {
    booksArray = booksArray.filter((book) => book.id !== Number(buttonId));
  }
  removeBooks(button);
  updateBookStorage();
});

renderBooks();
