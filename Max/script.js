function play(){
    var results = [];
    var max;
    for(i=0;i<5;i++){
        results[i]=Math.floor((Math.random()*100)+1);
        console.log("Results"+(i+1)+"="+results[i]);
    }
    max=0;
    for(i=0;i<5;i++){
        if(results[i]>max){
            max=results[i];
        }
    }
    document.getElementById("results").innerHTML+="The array is "+results.toString(",")+".<br><br>The max number is "+max+".";
}