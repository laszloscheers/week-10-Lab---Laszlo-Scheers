function grade(){
    var number=parseInt(prompt("How many subjects do you wish to grade"));
    var subjectName = [];
    var subjectMark = [];
    var avarage,yourGrade,avarageGrade,msg;
    yourGrade="";
    msg="";
    for(i=0;i<number;i++){
        subjectName[i]=prompt("Please, enter the subject name number "+(i+1)+".");
        subjectMark[i]=parseInt(prompt("Please, enter the subject mark number "+(i+1)+", from 0 to 100 to be graded."));
        if(subjectMark[i]>=90){
            yourGrade="A+";
        } else if(subjectMark[i]>=75){
            yourGrade="B";
        } else if(subjectMark[i]>=65){
            yourGrade="B+";
        } else if(subjectMark[i]>=50){
            yourGrade="B";
        } else if(subjectMark[i]>=45){
            yourGrade="B-";
        } else if(subjectMark[i]<45){
            yourGrade="F";
        }
        msg+="For "+subjectName[i]+" you got "+subjectMark[i]+" marks, and a grade of "+yourGrade+".<br><br>";
    }
    avarage=0;
    for(i=0;i<subjectMark.length;i++){
        avarage+=subjectMark[i];
    }
    avarage=avarage/subjectMark.length;
    msg+="Your avarage is "+Math.floor(avarage)+" marks.<br><br>";
    avarageGrade="";
    if(avarage>=90){
        avarageGrade="A+";
    } else if(avarage>=75){
        avarageGrade="B";
    } else if(avarage>=65){
        avarageGrade="B+";
    } else if(avarage>=50){
        avarageGrade="B";
    } else if(avarage>=45){
        avarageGrade="B-";
    } else if(avarage<40){
        avarageGrade="F";
    }
    msg+="Your grade for this course is "+yourGrade+".";
    document.getElementById("msg").innerHTML+=msg;
}