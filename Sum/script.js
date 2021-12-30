function play(){
    var results = [];
    var sum;
    document.getElementById("results").innerHTML=`<sapn id="bold">Result:</sapn><br><br>`;
    for(i=0;i<5;i++){
        results[i]=Math.floor((Math.random()*20)+1);
        console.log("Results"+(i+1)+"="+results[i]);
    }
    sum=0;
    for(i=0;i<5;i++){
        sum+=results[i];
    }
    document.getElementById("results").innerHTML+="The array is "+results.toString(",")+".<br><br>The sum is "+sum+".";
}