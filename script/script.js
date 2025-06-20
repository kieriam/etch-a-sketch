let how_many;
let how_many_squares;
let i;
let j;


how_many = prompt("How many squers you want in a row ? (MAX 100)");
how_many_squares = parseInt(how_many);
if(how_many_squares>100){
    how_many_squares=100;
}
console.log(how_many_squares);

const container = document.querySelector(".container");
const button = document.querySelector("button");


for(i=0;i<how_many_squares;i++){
        const content = document.createElement("div");
        content.classList.add("content");
        //content.textContent="Aloha";
        content.style.background = "white";
        content.setAttribute("style","display: flex;");

        for(j=0;j<how_many_squares;j++){
            const inside_content = document.createElement("div");
            inside_content.classList.add("inside_content");
            //inside_content.textContent="l ";
            //inside_content.setAttribute("style","background:red;");
            inside_content.style.background = "white";
            //inside_content.style.padding="20px";
           inside_content.style.width = "30px";
        inside_content.style.height = "10px";
        inside_content.style.margin = "0px";
        inside_content.style.cursor = "pointer";
            
             inside_content.addEventListener("mouseover",() => {
                    inside_content.style.background = "black";
                });

           content.appendChild(inside_content);
        }

       // how_many_squares--;
       container.appendChild(content);
    }

   button.addEventListener('click', function () {
    const allSquares = container.querySelectorAll(".inside_content");
    allSquares.forEach(square => {
        square.style.background = "white";
    });
});