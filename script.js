const grids = document.querySelector(".grids");
const clear = document.querySelector("#clearAll");
const eraser = document.querySelector("#eraser");

const sketchPad = () => {
    
    // made a 16x16 grid using loops
    for (let i = 1; i <= 16; i++){
        for(let j = 1; j <= 16; j++){
            const box = document.createElement("div");
            grids.appendChild(box);

            box.addEventListener('mouseover', () =>{
            box.style.backgroundColor="black"
            })

            clear.addEventListener("click", ()=>{
                box.style.backgroundColor="white"
            })


            // ERASER function
            
            let count = 1;

            eraser.addEventListener("click", () =>{
                count += 1;
                if(count % 2 == 0){
                    eraser.textContent = "Sketch"
                    eraser.classList.add("active")
                    box.addEventListener("mouseover", () => {
                    box.style.backgroundColor="white"
                    })
                } else {
                    eraser.textContent = "Eraser"
                    eraser.classList.remove("active")
                    box.addEventListener('mouseover', () =>{
                    box.style.backgroundColor="black"
                    })
                }
                console.log(count)
            })
        }
    }

}



sketchPad()


