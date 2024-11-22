//const table = document.querySelector("#table");

const arr = [];
let idCounter =0;


function Book(title, author){
  this.id = idCounter;
  idCounter++;
  this.title = title;
    this.author = author;
  //by default, read status is Read
  this.readStatus = "Read";
}

Book.prototype.toggleRead = function(book,btn){
  
    btn.addEventListener("click",function(e){
         if(e.target.textContent=="Read"){
           e.target.textContent="Not Read";
           book.readStatus="Not Read";
         }
        else{
          e.target.textContent="Read";
          book.readStatus="Not Read";
        }
    }); 
}

function addBookToLibrary(title, author){
    let book = new Book(title, author);
    arr.push(book);
}

addBookToLibrary('Daily Rituals', 'Mason Currey');
addBookToLibrary('Digital Minimalism', 'Cal Newport' );


function appendRows(newRow,tdTitle,tdAuthor,deleteBtn,index,readButton,table){
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(deleteBtn);
    newRow.appendChild(index);
    newRow.appendChild(readButton);
    table.appendChild(newRow);
}

function displayBooks(arr){
 const table=document.querySelector("#tabli");
  // const table= document.createElement("table");
  //table.className ="booksTable";
  //document.body.appendChild(table);
  
  arr.forEach((element)=>{
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor =      document.createElement("td");
    const index =      document.createElement("td");
    const deleteBtn=      document.createElement("button");
    const readButton = document.createElement("button");
    
    const bookId=element.id;

    deleteBtn.className = "deleteButton";
    readButton.className="readStatusBtn";
    
    deleteBtn.dataset.bookindex=bookId;
    
    tdTitle.textContent = element.title;
    tdAuthor.textContent = element.author;
    index.textContent = bookId;
    readButton.textContent = element.readStatus;
    
    element.toggleRead(element, readButton);
    
    appendRows(newRow,tdTitle,tdAuthor,deleteBtn,index,readButton,table);
        
    deleteBtn.addEventListener("click",function () { 
      //arr.splice(deleteBtn.dataset.bookindex =bookIndex,1);
      const indexToRemove = arr.findIndex(x => x.id == deleteBtn.dataset.bookindex);
  if (indexToRemove !== -1) {
    arr.splice(indexToRemove, 1); // Modifica o array original
  }
  //arr = arr.filter(x => x.id !== deleteBtn.dataset.bookindex);
  //tem de se ter cuidado ao usar o filter, pois só copia para uma nova variável definida localmente
  //é preferível usar o splice, que modifica a variável original diretamente
      
      newRow.remove();      
      //table.remove();
  //displayBooks(arr);
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
  
  //const table = document.querySelector(".booksTable");
  const table=document.querySelector("#tabli");
  
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const readButton = document.createElement("button");
    
  createBook.close();
  
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
   const index =      document.createElement("td");
  const deleteBtn= document.createElement("button");
    deleteBtn.className = "deleteButton";
    

    
    tdTitle.textContent = title;
    tdAuthor.textContent = author;

    readButton.textContent = "Read";
  
  addBookToLibrary(title,author);
  
//tive que ir buscar o elemento ao array
  const bookIndex=(arr.length)-1;
  const bookAppended = arr[bookIndex];
 //para aqui lhe aplicar a função toggleRead 
bookAppended.toggleRead(bookAppended,readButton);
 
   index.textContent = bookAppended.id;
  deleteBtn.dataset.bookindex =bookAppended.id;
  
  appendRows(newRow,tdTitle,tdAuthor,deleteBtn,index,readButton,table);
    
  
  
    deleteBtn.addEventListener("click",function () { 
      //arr.splice(deleteBtn.dataset.bookindex=bookIndex,1);
     //arr = arr.filter(x => x.id !== deleteBtn.dataset.bookindex);
     const indexToRemove = arr.findIndex(x => x.id == deleteBtn.dataset.bookindex);
     if (indexToRemove !== -1) {
       arr.splice(indexToRemove, 1); // Modifica o array original
     }
      newRow.remove();
      
      //table.remove();
  //displayBooks(arr);
    });
});


              
