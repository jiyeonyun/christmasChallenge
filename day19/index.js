const btn = document.getElementById("btn")
const foodHolder = document.getElementById('foodHolder');
var datas = '';
fetch('https://foodish-api.herokuapp.com/api/images/dessert')
    .then((response) => response.json())
    .then(json => {datas = json}
    );
        

btn.addEventListener("click", findYum)
function findYum(){
    for(let i = 0; i<3; i++){
        let img = document.createElement('img');
          img.setAttribute('src' , `${datas.image}`);
          foodHolder.appendChild(img);
    }
   
    
}
/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

