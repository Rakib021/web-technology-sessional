const countWords =()=>{
    let noc=document.getElementById("inputField").value.length;
    let now=document.getElementById("inputField").value;
    let noL=document.getElementById("inputField").value.split(/\r\n|\r|\n/).length;


    now= now.match( /\w+/g);
    now= now.length;

    document.getElementById("showC").innerHTML="Total charecter "+ noc;
    document.getElementById("show").innerHTML="Total word "+ now;
    document.getElementById("showL").innerHTML="Total Line "+ noL;

}