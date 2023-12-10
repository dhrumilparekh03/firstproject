let input = document.getElementById('inputBox');
// console.log(input)
let buttons = document.querySelectorAll('button');
// console.log(buttons);
let string = "";
let arr = Array.from(buttons);
// console.log(arr);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        // console.log(buttons)
     if(e.target.innerHTML =='='){
        string = eval(string);
        // console.log(string)
        input.value = string;
        console.log(input.value);
     }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string ;
            // console.log(input.value);
       }
        else if(e.target.innerHTML == 'DEL'){
            // console.log(string)
            string = string.substring(0,string.length-1);
            input.value =string;
            // console.log(input.value);
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})

// const a = ["dhrumil", "aaryaan","krupal","aman","moksh","yash"];
// // console.log();
// console.log(a.indexOf("yash"));
