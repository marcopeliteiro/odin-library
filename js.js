const table = document.querySelector("#table");

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
addBookToLibrary('Digital Minimalism', 'Cal Newport');

function displayBooks(arr){
  arr.forEach((element)=>{
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor =      document.createElement("td");
    
    const bookIndex=arr.indexOf(element);

    
    const deleteBtn= document.createElement("button");
    deleteBtn.className = "deleteButton";
    
    deleteBtn.dataset.bookindex =bookIndex;
    
    tdTitle.textContent = element.title;
    tdAuthor.textContent = element.author;
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(deleteBtn);
    table.appendChild(newRow);
    
    deleteBtn.addEventListener("click",function () { 
      newRow.remove();
    });
  });
};

displayBooks(arr);



              
              
