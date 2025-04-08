function calculateAge() {
    const input = document.getElementById("birthdate").value;
    const result=document.getElementById("result");


    if(!input){
        result.innerText="please select a valid date.";
        return;
    }

    const birthdate=new Date(input);
    const today=new Date();

    let years=today.getFullYear()-birthdate.getFullYear();
    let months=today.getMonth()-birthdate.getMonth();

    if(today.getDate()<birthdate.getDate()){
        months--;
    }

    if (months<0) {
        years--;
        months+=12; 
    }

    result.innerHTML=`You are <strong> ${years} years ${months} months </strong> old`
}