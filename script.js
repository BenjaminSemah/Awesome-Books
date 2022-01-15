const titleInput = document.querySelector('.bk-title-input');
const authorInput = document.querySelector('.bk-author-input');
const booksContainer = document.querySelector('#booksContainer');
const addButton = document.querySelector('.add-book-btn');
const removeButton = document.querySelector('.bk-remove-btn');

let booksArray = [];
let bookStorage = localStorage.setItem('bookStore', JSON.stringify(booksArray));

function updateBookStorage() {
  bookStorage;
  return bookStorage;
}

function addNewBook(){
  const titleTrim = titleInput.value.trim();
  const authorTrim = authorInput.value.trim();
  if (titleTrim !== '' && authorTrim !== '') {
    booksArray.push(
      {
        title: titleInput.value,
        author: authorInput.value
      }
    )
  }
  titleInput.value = '';
  authorInput.value = '';
  
  let bookHTML = ``;
  booksArray.forEach( book => {
    bookHTML =
      bookHTML +
    `
    <li class="singlebook">
    <p class="book-title">${book.title}</p>
    <p class="book-title">${book.author}</p>
    <button class="bk-remove-btn" type="button">REMOVE</button>
    <hr>
    </li>
    `
  });
  booksContainer.innerHTML = bookHTML;
};

addButton.addEventListener('click', () => {
  addNewBook();
  updateBookStorage();
});



// function removeBook() {
//   if (booksArray != []) {
//     console.log('Books Array is not empty')
//   }
// }
  
  // removeButton.addEventListener('click', () => {
  //   removeBook();
  // })