//const table = document.querySelector("#table");

const arr = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author){
    let book = new Book(title, author);
    arr.push(book);
}

addBookToLibrary('Daily Rituals', 'Mason Currey');
addBookToLibrary('Digital Minimalism', 'Cal Newport' );

function displayBooks(arr){
  const table= document.createElement("table");
  table.className ="booksTable";
  document.body.appendChild(table);
  
  arr.forEach((element)=>{
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor =      document.createElement("td");
    const index =      document.createElement("td");
    
    const bookIndex=arr.indexOf(element);

    
    const deleteBtn= document.createElement("button");
    deleteBtn.className = "deleteButton";
    
    deleteBtn.dataset.bookindex =bookIndex;
    
    tdTitle.textContent = element.title;
    tdAuthor.textContent = element.author;
    index.textContent = bookIndex;
    
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(deleteBtn);
    newRow.appendChild(index);
    table.appendChild(newRow);
    
    deleteBtn.addEventListener("click",function () { 
      newRow.remove();
      arr.splice(deleteBtn.dataset.bookindex =bookIndex,1);
      table.remove();
  displayBooks(arr);
    });
  });
};

displayBooks(arr);

const showButton=document.getElementById("showDialog");
const createBook = document.getElementById("createBook");
const confirmBtn = document.querySelector("#confirmBtn");


showButton.addEventListener("click", () => {
  createBook.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  
  const table = document.querySelector(".booksTable");
  
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  
  addBookToLibrary(title,author);
  
  createBook.close();
  
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
   const index =      document.createElement("td");
    
    const bookIndex=(arr.length)-1;
  
    const deleteBtn= document.createElement("button");
    deleteBtn.className = "deleteButton";
    
    deleteBtn.dataset.bookindex =bookIndex;
    
    tdTitle.textContent = title;
    tdAuthor.textContent = author;
    index.textContent = bookIndex;
  
  newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(deleteBtn);
  newRow.appendChild(index);
    table.appendChild(newRow);
    
    deleteBtn.addEventListener("click",function () { 
      newRow.remove();
      arr.splice(deleteBtn.dataset.bookindex =bookIndex,1);
      table.remove();
  displayBooks(arr);
    });
});

              
              
