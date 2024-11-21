//const table = document.querySelector(".books-table");
//
const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author){
    let book = new Book(title, author);
    myLibrary.push(book);
}

addBookToLibrary('Daily Rituals', 'Mason Currey');
addBookToLibrary('Digital Minimalism', 'Cal Newport' );
addBookToLibrary('Atomic Habits','James Clear');

function displayBooks(arr){
    const table= document.createElement("table");
    table.className="booksTable";
    document.body.appendChild(table);
  arr.forEach((element)=>{

    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    
    const deleteBtn= document.createElement("button");
    deleteBtn.className = "deleteButton";
    
    const bookIndex=myLibrary.indexOf(element);
    const bookIndexDiv = document.createElement("td");
    bookIndexDiv.textContent=bookIndex;
    
    deleteBtn.dataset.bookindex =bookIndex;
    newRow.dataset.bookindex=bookIndex;
    
    tdTitle.textContent = element.title;
    tdAuthor.textContent = element.author;
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(deleteBtn);
    newRow.appendChild(bookIndexDiv);
    table.appendChild(newRow);
  })
}






displayBooks(myLibrary);

  
//método de remover livro de myLibrary e apaga a tabela anterior e apresenta uma nova
//tive que definir o click eventListener numa função, porque senão na nova tabela, como os botões de apagar são novos, tem de se gerar uma nova NodeList para lhes adicionar o click eventListener

function delButtons(){
  const delBtn = document.querySelectorAll(".deleteButton");

    delBtn.forEach((item)=>{
    item.addEventListener("click", function(e){
      const buttonBookIndex = e.target.dataset.bookindex;
      
      const table= document.querySelector(".booksTable");
          
      myLibrary.splice(buttonBookIndex,1);
      const tableParent = table.parentElement;
      tableParent.removeChild(table);
      displayBooks(myLibrary);
      delButtons();
    })
  })
}

delButtons();

const showButton=document.getElementById("showDialog");

const createBook = document.getElementById("createBook");

const confirmBtn = document.querySelector("#confirmBtn");


showButton.addEventListener("click", () => {
  createBook.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  
  addBookToLibrary(title,author);
  
  createBook.close();
  
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor =              document.createElement("td");
    tdTitle.textContent = title;
    tdAuthor.textContent = author;
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    table.appendChild(newRow);
  
});