function play(){
    var answer=false;
    var results = [];
    let count;
    for(i=0;i<5;i++){
        results[i]=Math.floor((Math.random()*10)+1);
        console.log("Results"+(i+1)+"="+results[i]);
    }
    do{
        document.getElementById("results").innerHTML=`<sapn id="bold">Result:</sapn><br><br></br>`;
        let userAnswer=parseInt(prompt("Enter a number to guess from 1 to 10."));
        count=0;
        for(i=0;i<5;i++){
            if(results[i]==userAnswer){
                count++;
            }
        }
        console.log("Count"+count);
        if(count>0){
            document.getElementById("results").innerHTML+=`You hit the number `+count+` time/s.<br><br> You win!<br><br><button onclick="play()">Play again</button>`;
        }else{
            document.getElementById("results").innerHTML+=`You did't hit the number.<br><br> You loose!<br><br><button onclick="play()">Play again</button>`;
        }
        answer=false;
    } while(answer==true)


}