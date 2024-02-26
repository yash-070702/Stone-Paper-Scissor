const stone=document.querySelector(".stone");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const user=document.querySelector(".user");
const computer=document.querySelector(".computer");
const my_choice=document.querySelector(".my-choice");
const result=document.querySelector(".result");
const comp_choice=document.querySelector(".comp-choice");
const obtained=document.querySelector(".obtained");
const result_display=document.querySelector(".result-display");
let computer_score=0;
let user_score=0;
const footer=document.querySelector(".footer");
user.innerHTML=user_score;
computer.innerHTML=computer_score;


stone.addEventListener("click",()=>{
    footer.style.bottom="-17%";
    let rand=Math.ceil(Math.random()*3);
    console.log(rand);

    my_choice.style.backgroundImage = " url('./images/rock.png')";
    result.innerHTML=`Stone`;
    comp_choice.style.backgroundImage="url('./images/loading-gif.gif')";
result_display.innerHTML="";
result_display.style.backgroundColor="";

    setTimeout(()=>{
        footer.style.bottom="-11%";
        if(rand===2){
            console.log("computer wins");
            comp_choice.style.backgroundImage = " url('./images/paper.png')";
            obtained.innerHTML=`Paper`;
            result_display.innerHTML="You Lost.Paper beats Stone";
            result_display.style.backgroundColor="red";
            computer_score++;
            }
        
            else if(rand==1){
                comp_choice.style.backgroundImage = " url('./images/rock.png')";
                obtained.innerHTML=`Stone`;
                result_display.innerHTML="It Is Draw";
                result_display.style.backgroundColor="rgb(10, 4, 42)";
            console.log("draw");
            }
        
            else {
            console.log("user wins");
            comp_choice.style.backgroundImage = " url('./images/scissors.png')";
            obtained.innerHTML=`Scissors`;
            result_display.innerHTML="You Won!! Stone beats Scissors";
            result_display.style.backgroundColor="green";
            user_score++;
            }
            user.innerHTML=user_score;
        computer.innerHTML=computer_score;
    },500);
    
});

paper.addEventListener("click",()=>{
    footer.style.bottom="-17%";
    let rand=Math.ceil(Math.random()*3);
    console.log(rand);
    comp_choice.style.backgroundImage="url('./images/loading-gif.gif')";

    my_choice.style.backgroundImage = " url('./images/paper.png')";
    result.innerHTML=`Paper`;
    result_display.innerHTML="";
result_display.style.backgroundColor="";

    setTimeout(()=>{
        footer.style.bottom="-11%";
        if(rand===3){
            console.log("computer wins");
            comp_choice.style.backgroundImage = " url('./images/scissors.png')";
            obtained.innerHTML=`Scissors`;
            result_display.innerHTML="You Lost. Scissors beats Paper";
            result_display.style.backgroundColor="red";
            computer_score++;
            }
        
            else if(rand==2){
            console.log("draw");
            comp_choice.style.backgroundImage = " url('./images/paper.png')";
            obtained.innerHTML=`Paper`;
            result_display.innerHTML="It Is Draw";
            result_display.style.backgroundColor="rgb(10, 4, 42)";
            }
            else {
            console.log("user wins");
            result_display.innerHTML="You Won!! Paper beats Stone";
            result_display.style.backgroundColor="green";
            comp_choice.style.backgroundImage = " url('./images/rock.png')";
            obtained.innerHTML=`Stone`;
            
            user_score++;
            }
            user.innerHTML=user_score;
        computer.innerHTML=computer_score;
    },500);

    
});

scissors.addEventListener("click",()=>{
    footer.style.bottom="-17%";
    let rand=Math.ceil(Math.random()*3);
    console.log(rand);
    result.innerHTML=`Scissors`;
    result_display.innerHTML="";
    result_display.style.backgroundColor="";
    my_choice.style.backgroundImage = "url('./images/scissors.png')";
    comp_choice.style.backgroundImage="url('./images/loading-gif.gif')";
    setTimeout(()=>{
        footer.style.bottom="-11%";
        if(rand===2){
            console.log("computer wins");
            computer_score++;
            comp_choice.style.backgroundImage = "url('./images/rock.png')";
            obtained.innerHTML=`Stone`;
            result_display.innerHTML="You Lost.Stone beats Scissors";
            result_display.style.backgroundColor="red";
            }
        
            else if(rand==3){
            comp_choice.style.backgroundImage = " url('./images/scissors.png')";
            obtained.innerHTML=`Scissors`;
            console.log("draw");
            result_display.innerHTML="It Is Draw";
            result_display.style.backgroundColor="rgb(10, 4, 42)";
            }
        
            else {
            console.log("user wins");
            result_display.innerHTML="You Won!! Scissors beats Paper";
            result_display.style.backgroundColor="green";
            user_score++;
            comp_choice.style.backgroundImage = " url('./images/paper.png')";
            obtained.innerHTML=`Paper`;
            }
            user.innerHTML=user_score;
        computer.innerHTML=computer_score;
    },500);
    
});