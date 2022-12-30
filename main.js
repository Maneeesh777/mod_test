function submitForm(){
    let firstname = document.getElementById('First_Name').value;
    let lastname = document.getElementById('Last_Name').value;
    let email_ID = document.getElementById('Email_ID').value;
    console.log(firstname,lastname,email_ID);
 
    if(firstname && lastname && email_ID){
        alert("Form Submitted Successfully!!");
    }
    else{
        alert("Please fill the mandaotory fields");
    }
   
}
