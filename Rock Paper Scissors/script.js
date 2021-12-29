function play(){
    var answer=false;
    var count=5;
    var results = [0,0,0];
    do{
        count--;
        var userAnswer=prompt("Enter Rock, Paper or Scissors to play the game.");
        var randomAnswer= Math.floor((Math.random() * 3) + 1);
        //alert(randomAnswer);
        var computerOption,finalResult;
        
        if(randomAnswer==1){
            computerOption="Rock";
        } else if(randomAnswer==2){
            computerOption="Paper";
        } else{
            computerOption="Scissors";
        }
        alert("The computer has choosen "+computerOption+" and you have choosen "+userAnswer+".");
    
        if(userAnswer==computerOption){
            alert("That's a draw!");
            results[2]+=1;
        } else if(userAnswer=="Rock"){
            if(computerOption=="Scissors"){
                alert("You win!");
                results[0]+=1;
            } else{
                alert("You loose!");
                results[1]+=1;
            }
        } else if(userAnswer=="Paper"){
            if(computerOption=="Rock"){
                alert("You win!");
                results[0]+=1;
            } else{
                alert("You loose!");
                results[1]+=1;
            }
        } else if(userAnswer=="Scissors" && computerOption=="Paper"){
            if(computerOption=="Paper"){
                alert("You win!");
                results[0]+=1;
            } else{
                alert("You loose!");
                results[1]+=1;
            }
        } else{
            alert("Please, enter a valid input.");
        }
        var answer=false;
        if(count>0){
            answer=confirm("Do you want to play again?");
        }
    } while(answer==true)
    if(results[0]>results[1]){
        finalResult="You won the match.";
    } else if(results[0]==results[1]){
        finalResult="That's a draw!";
    } else{
        finalResult="You lost the match.";
    }
    document.getElementById("results").innerHTML+="You won "+results[0]+" time/s.<br><br> You loosed "+results[1]+" time/s.<br><br>And you drawn "+results[0]+" time/s.<br><br>"+finalResult;
}