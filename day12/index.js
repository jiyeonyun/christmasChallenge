const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
const del = document.querySelector('.del');
// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
btn.addEventListener('click',()=>{
    var newguest = input.value
    guests.push(newguest);
    var gest = document.createElement('li');
    gest.innerText = guests[guests.length-1];
    guestList.appendChild(gest);

});
del.addEventListener('click',()=>{
        while ( guestList.hasChildNodes() ) { 
            guestList.removeChild( guestList.firstChild ); 
        };
});

