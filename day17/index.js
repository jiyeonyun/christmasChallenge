const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
];
btn.addEventListener("click",()=>{
    for(let i=0 ; i<sorteesArr.length; i++){
        const names = document.createElement('li');
        if(sorteesArr[i].hasBeenGood === true){
        names.innerText = `${sorteesArr[i].name}`;
        niceList.appendChild(names);
    }
    else{
        names.innerText = `${sorteesArr[i].name}`;
          naughtyList.appendChild(names);
    }
    }
});

// function createItem(){
//     for(let i=0; i<items.length; i++){
//       const item = document.createElement("div");
//       item.setAttribute('class','checklist-item');
//       item.setAttribute('id',`${i}`);
//       item.innerHTML = `${items[i]} <input type="checkbox" name="${items[i]}" class="${items[i]}"><button class="delete" id=${i}>❌</button> `;
//       checklist.appendChild(item);
//   }  


// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.