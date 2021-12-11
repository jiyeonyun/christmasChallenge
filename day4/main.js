const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
function createItem(){
  for(let i=0; i<items.length; i++){
    const item = document.createElement("div");
    item.setAttribute('class','checklist-item');
    item.setAttribute('id',`${i}`);
    item.innerHTML = `${items[i]} <input type="checkbox" name="${items[i]}" class="${items[i]}"><button class="delete" id=${i}>❌</button> `;
    checklist.appendChild(item);
}  
}

createItem();

checklist.addEventListener('click', event=>{
  const id = event.target.id;
  console.log(id);
  if (id){
      const tobedelete  = document.querySelector(`.checklist-item[id="${id}"]`);
        tobedelete.remove();
      }
      
    
});




// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

