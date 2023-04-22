let String = "";

let buttons = document.querySelectorAll('.button');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '='){
            String = eval(String);
        }else if(e.target.innerHTML == 'C'){
            String = "";
        }else{console.log(e.target);
            String += e.target.innerHTML;
            console.log(String);
        }

        document.querySelector('input').value = String;
        

    })
})