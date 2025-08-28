let add = document.querySelector('#add');
let boxCard = document.querySelector('.box-card');
let form = document.querySelector('.form');
let close = document.querySelector('#close-button');

// Add button click event
add.addEventListener('click', function(e) {

 const current = window.getComputedStyle(form).display;
    console.log('Add button clicked');
    boxCard.style.display = boxCard.style.display === 'none' ? 'flex' : 'none';
    form.style.display = current === 'none' ? 'block' : 'none';
});

// Close button click event
close.addEventListener('click', function(e) {
    
     console.log('Close button clicked');
    boxCard.style.display = 'flex';
    form.style.display = 'none';
    
   

});






//save local storage
function saveLocalStorage(obj){
  if(localStorage.getItem("tasks") === null){
   let oldtask = [];
   oldtask.push(obj);
   localStorage.setItem("tasks", JSON.stringify(oldtask));

  }
  else{
    let oldtask = JSON.parse(localStorage.getItem("tasks"));
    oldtask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldtask));
  }

}
// saveLocalStorage(task);


function FormData() {

    let formElement = document.querySelector("form");
    let input = document.querySelectorAll("input[type='text']");
    let check = document.querySelectorAll(".category  input");

    formElement.addEventListener("submit", function(event) {
        event.preventDefault();

        const imgeUrl = input[0].value;
        const title = input[1].value;
        const town = input[2].value;
        const phone = input[3].value;
        const purpose = input[4].value;

        console.log(imgeUrl);
        console.log(title);
        console.log(town);
        console.log(phone);
        console.log(purpose);


        let category = false;
        check.forEach(elem => {
            if (elem.checked) {
                category = elem.value;
                console.log(elem.value);
            }
        });
        if (!category) {
            console.log("Please select a category");
            return;
        }

        console.log("Form submitted");

        saveLocalStorage({
            imgeUrl,
            title,
            town,
            phone,
            purpose,
            category
        });


        formElement.reset();
        boxCard.style.display = 'flex';
        form.style.display = 'none';
    MakeCard();

    });

}
FormData();



//make card
function MakeCard(){

    let allTask = JSON.parse(localStorage.getItem("tasks"));

    allTask.forEach(function(task){

    let cardsContainer =  document.createElement("div");
    cardsContainer.classList.add("card1-div");
  

    // img container
    let imgBox = document.createElement("div");   // <- yaha div hona chahiye
    imgBox.classList.add("img");

    let picture = document.createElement("img");
    picture.setAttribute("src", task.imgeUrl);

    imgBox.appendChild(picture);

    // text div
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-card1-div");

    let h2 = document.createElement("h2");
    h2.textContent = task.title;

    // row1
    let row = document.createElement("div");
    row.classList.add("row");

    let label = document.createElement("span");
    label.classList.add("label");
    label.textContent = "Home Town";

    let value = document.createElement("span");
    value.classList.add("value");
    value.textContent = task.town;

    row.appendChild(label);
    row.appendChild(value);

    // row2
    let row2 = document.createElement("div");
    row2.classList.add("row");

    let label2 = document.createElement("span");
    label2.classList.add("label");
    label2.textContent = "Purpose";

    let value2 = document.createElement("span");
    value2.classList.add("value");
    value2.textContent = task.purpose;

    row2.appendChild(label2);
    row2.appendChild(value2);

    // icons
    let icon1 = document.createElement("div");
    icon1.classList.add("icon");
    icon1.innerHTML = `<i class="ri-phone-line">  </i> Call`;
    icon1.addEventListener("click", function() {
        window.location.href = `tel:${task.phone}`;
    });

    let icon2 = document.createElement("div");
    icon2.classList.add("icon2");
    icon2.innerHTML = `<i class="ri-message-2-line"></i> Message`;
    icon2.addEventListener("click", function() {
        window.location.href = `sms:${task.phone}`;
    });

    // assemble card
    textDiv.appendChild(h2);
    textDiv.appendChild(row);
    textDiv.appendChild(row2);
    textDiv.appendChild(icon1);
    textDiv.appendChild(icon2);

    cardsContainer.appendChild(imgBox);
    cardsContainer.appendChild(textDiv);

 console.log(cardsContainer);

 let BoxCard =  document.querySelector(".box-card");
 BoxCard.appendChild(cardsContainer);
 console.log(BoxCard);


 })

}
MakeCard()



//update card
let boxCardupdate = document.querySelector(".box-card");
let upbtn = document.querySelector("#up");
let downbtn = document.querySelector("#down");

function updateCardOrder() {
    const allCardDivs = boxCardupdate.querySelectorAll(".card1-div");

    allCardDivs.forEach((card, i) => {
        if (i < 3) {
            card.style.zIndex = allCardDivs.length - i;
            card.style.transform = `
                translateY(${i * 15}px) 
                scale(${1 - i * 0.03})
                rotate(${i * 0.2}deg)
            `;
            card.style.opacity = 1 - i * 0.15;
            card.style.display = "block";
            card.style.transition = "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
            card.style.filter = "blur(0px)";
            card.style.boxShadow = `0 ${i * 3}px ${8 + i * 3}px rgba(0,0,0,0.2)`;



            
        } else {
            card.style.display = "none"; // 👈 baaki cards hide ho jayenge
        }
    });
}

// 🔼 Move last card to top
upbtn.addEventListener("click", function () {
    let lastChild = boxCardupdate.lastElementChild;
    if (lastChild) {
        boxCardupdate.insertBefore(lastChild, boxCardupdate.firstElementChild);
        updateCardOrder();
    }
});

// 🔽 Move first card to bottom
downbtn.addEventListener("click", function () {
    let firstChild = boxCardupdate.firstElementChild;
    if (firstChild) {
        boxCardupdate.appendChild(firstChild);
        updateCardOrder();
    }
});

updateCardOrder();



//colour change
let colours = document.querySelectorAll(".colour-div div");
let boxCard2 = document.querySelector(".box-card");
const colourdivs = boxCard2.querySelectorAll(".card1-div");

colours.forEach(function(elem) {
    elem.addEventListener("click", function() {
        colourdivs.forEach(function(colourdiv) {
            if(elem.classList.contains("one")){
                colourdiv.style.background = "#141414e3";
                colourdiv.style.color = "white";
            }
            else if(elem.classList.contains("two")){
              colourdiv.style.background = "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)";
                colourdiv.style.color = "black";
            }
            else if(elem.classList.contains("three")){
                colourdiv.style.background = "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)";
                colourdiv.style.color = "white";
            }
            else if(elem.classList.contains("four")){
                colourdiv.style.background = "rgb(236, 236, 236)";
                colourdiv.style.color = "black";
            }
        });
    });
});



