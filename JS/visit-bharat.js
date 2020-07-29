var preloader=document.getElementById('loading');

  function myFunction(){
    preloader.style.display= 'none';
  }
  
$(document).ready(function(){
    $('#mymodel').modal('show');
  });

function varification(){

          var uname = document.getElementById('uname').value;
          var pass=document.getElementById('pass').value;
          var confirmpass=document.getElementById('confirmpass').value;
          var capcha=document.getElementById('capcha').value;

        if(uname == ""){
        document.getElementById('uname1').innerHTML =" ** Please fill the username field";
        return false;
      }
      if((uname.length <= 2) || (uname.length > 30)) {
        document.getElementById('uname1').innerHTML =" ** Username lenght must be between 2 and 20";
        return false; 
      }
            if(!isNaN(uname)){
        document.getElementById('uname1').innerHTML =" ** only characters are allowed";
        return false;
      }
      // password
      if(pass == ""){
        document.getElementById('password').innerHTML =" ** Please fill the password field";
        return false;
      }
      if((pass.length <= 4) || (pass.length > 9)) {
        document.getElementById('password').innerHTML =" ** Password lenght must be between 4 and 9";
        return false; 
      }
            if(!isNaN(pass)){
        document.getElementById('password').innerHTML =" ** only characters are allowed";
        return false;
      }
      // password confirm
      if(confirmpass == ""){
        document.getElementById('confirm').innerHTML =" ** Please fill the confirmpassword field";
        return false;
      }
      if(pass!=confirmpass){
        document.getElementById('confirm').innerHTML =" ** Password does not match";
        return false;
      }
      if(capcha == ""){
        document.getElementById('capcha1').innerHTML =" ** Please fill the capcha field";
        return false;
      }

      if(uname=="kulpreetsingh0128@gmail.com" && pass=="kulpreet")
        {
         window.alert("login Successfully!!");
        }
        else
        {
      window.alert("login failed!!");
        }
      
}
function validsex(male,female){
  y=0;
  if(male.checked){
    y++;
  }
  else if(female.checked)
  {
    y++;
  }
   else if(y==0)
  {
    document.getElementById('gender').innerHTML =" ** Please choose the Gender field";
  }
  else{
    alert("Registered Successfully");
    }

}

function kulpreet(yes,no){
  s=0;
  if(yes.checked){
    s++;
  }
  else if(no.checked)
  {
    s++;
  }
  else if(s==0){
    document.getElementById('kulp').innerHTML =" ** Please select anyone";
    return false;
    }
    else{
     alert("Registered Successfully"); 
    }
}

function validation(){

      var user = document.getElementById('user').value;
      var email=document.getElementById('email').value;
      var mobile=document.getElementById('mobile').value;
      var add=document.getElementById('add').value;
      var male=document.getElementById('gen1').value;
      var female=document.getElementById('gen2').value;
      var date=document.getElementById('date').value;
      var occu=document.getElementById('occu').value;
      var city=document.getElementById('city').value;
      var zip=document.getElementById('zip').value;
      var state=document.getElementById('state').value;
      var country=document.getElementById('country').value;
      var yes=document.getElementById('myes').value;
      var no=document.getElementById('mno').value;
      

      //user
      if(user == ""){
        document.getElementById('username').innerHTML =" ** Please fill the username field";
        return false;
      }
      if((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
        return false; 
      }
            if(!isNaN(user)){
        document.getElementById('username').innerHTML =" ** only characters are allowed";
        return false;
      }
      // email
      if(email == ""){
        document.getElementById('emailid').innerHTML =" ** Please fill the email id field";
        return false;
      }
      if(email.indexOf('@') <= 0 ){
        document.getElementById('emailid').innerHTML =" ** @ Invalid Position";
        return false;
      }

      if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emailid').innerHTML =" ** . Invalid Position";
        return false;
      }
      // mobile
      if(mobile == ""){
        document.getElementById('mob').innerHTML =" ** Please fill the Mobile Number";
        return false;
      }
      if(mobile.length != 10) {
        document.getElementById('mob').innerHTML =" ** Mobile Number must be 10 digit number";
        return false; 
      }
            if(isNaN(mobile)){
        document.getElementById('mob').innerHTML =" ** only digits are allowed";
        return false;
      }
      
      //address
      if(add == ""){
        document.getElementById('address').innerHTML =" ** Please fill the address field";
        return false;
      }
      if((add.length <= 8) || (add.length > 30)) {
        document.getElementById('address').innerHTML =" ** Address lenght must be between 8 and 30";
        return false; 
      }
      //gender
      if(validsex(male,female)){
        
      }
      //bdate
      if(date == ""){
        document.getElementById('bdate').innerHTML =" ** Please fill the date of birth field";
        return false;
      }
      //occupation
      if(occu == "-1"){
        document.getElementById('occupation').innerHTML =" ** Please choose the occupation feild ";
        return false;
      }
      //city
      if(city == "-1"){
        document.getElementById('ecity').innerHTML =" ** Please fill the city field";
        return false;
      }
       if(!isNaN(city)){
        document.getElementById('ecity').innerHTML =" ** only characters are allowed";
        return false;
      }
      //zip
      if(zip == ""){
        document.getElementById('zipcode').innerHTML =" ** Please fill the zipcode field";
        return false;
      }
       if(isNaN(zip)){
        document.getElementById('zipcode').innerHTML =" ** only digits are allowed";
        return false;
      }
      if(zip.length != 6) {
        document.getElementById('zipcode').innerHTML =" ** zipcode must be 6 digit number";
        return false; 
      }
      //state
      if(state == "-1"){
        document.getElementById('states').innerHTML =" ** Please choose the state feild ";
        return false;
      }
      //agree
      if(kulpreet(yes,no)){
      
      }
      
      //country
      if(country == "-1"){
        document.getElementById('mcountry').innerHTML =" ** Please choose the country feild ";
        return false;
      }
      
      else{
      alert("Registered Successfully!!");
      }

    
    
    }
function Message(){

      var user3 = document.getElementById('user3').value;
      var email3=document.getElementById('email3').value;
      var mobile3=document.getElementById('mobile3').value;
      var mess=document.getElementById('mess').value;

      //user
      if(user3 == ""){
        document.getElementById('username3').innerHTML =" ** Please fill the username field";
        return false;
      }
      if((user3.length <= 2) || (user3.length > 20)) {
        document.getElementById('username3').innerHTML =" ** Username lenght must be between 2 and 20";
        return false; 
      }
            if(!isNaN(user3)){
        document.getElementById('username3').innerHTML =" ** only characters are allowed";
        return false;
      }
      
      // email
      if(email3 == ""){
        document.getElementById('emailid3').innerHTML =" ** Please fill the email id field";
        return false;
      }
      if(email3.indexOf('@') <= 0 ){
        document.getElementById('emailid3').innerHTML =" ** @ Invalid Position";
        return false;
      }

      if((email3.charAt(email3.length-4)!='.') && (email3.charAt(email3.length-3)!='.')){
        document.getElementById('emailid3').innerHTML =" ** . Invalid Position";
        return false;
      }
      // mobile
      if(mobile3 == ""){
        document.getElementById('mob3').innerHTML =" ** Please fill the Mobile Number";
        return false;
      }
      if(mobile3.length != 10) {
        document.getElementById('mob3').innerHTML =" ** Mobile Number must be 10 digit number";
        return false; 
      }
            if(isNaN(mobile3)){
        document.getElementById('mob3').innerHTML =" ** only digits are allowed";
        return false;
      }
      //message
      if(mess == ""){
        document.getElementById('message').innerHTML =" ** Please fill the Message field";
        return false;
      }
      else{
      alert("Message Registered Successfully!!");
      }
}

function validsex1(male1,female1){
  r=0;
  if(male1.checked){
    r++;
  }
  else if(female1.checked)
  {
    r++;
  }
   else if(r==0)
  {
    document.getElementById('gender1').innerHTML =" ** Please choose the Gender field";
  }
  else{
    alert("Booked Successfully!!");
    }

}

function kulpreet1(yes1,no1){
  j=0;
  if(yes1.checked){
    j++;
  }
  else if(no1.checked)
  {
    j++;
  }
  else if(j==0){
    document.getElementById('kulp1').innerHTML =" ** Please select anyone";
    return false;
    }
    else{
     alert("Booked Successfully!!"); 
    }
}


function Book(){

      var user1 = document.getElementById('user1').value;
      var email1=document.getElementById('email1').value;
      var mobile1=document.getElementById('mobile1').value;
      var add1=document.getElementById('add1').value;
      var male1=document.getElementById('genn1').value;
      var female1=document.getElementById('genn2').value;
      var date1=document.getElementById('date1').value;
      var occu1=document.getElementById('occu1').value;
      var city1=document.getElementById('city1').value;
      var zip1=document.getElementById('zip1').value;
      var state1=document.getElementById('state1').value;
      var country1=document.getElementById('country1').value;
      var yes1=document.getElementById('myes1').value;
      var no1=document.getElementById('mno1').value;
      var acno=document.getElementById('acno').value;
      var ifscno=document.getElementById('ifscno').value;
      var otp=document.getElementById('otp').value;
      

      //user
      if(user1 == ""){
        document.getElementById('username1').innerHTML =" ** Please fill the username field";
        return false;
      }
      if((user1.length <= 2) || (user1.length > 20)) {
        document.getElementById('username1').innerHTML =" ** Username lenght must be between 2 and 20";
        return false; 
      }
            if(!isNaN(user1)){
        document.getElementById('username1').innerHTML =" ** only characters are allowed";
        return false;
      }
      // email
      if(email1 == ""){
        document.getElementById('emailid1').innerHTML =" ** Please fill the email id field";
        return false;
      }
      if(email1.indexOf('@') <= 0 ){
        document.getElementById('emailid1').innerHTML =" ** @ Invalid Position";
        return false;
      }

      if((email1.charAt(email1.length-4)!='.') && (email1.charAt(email1.length-3)!='.')){
        document.getElementById('emailid1').innerHTML =" ** . Invalid Position";
        return false;
      }
      // mobile
      if(mobile1 == ""){
        document.getElementById('mob1').innerHTML =" ** Please fill the Mobile Number";
        return false;
      }
      if(mobile1.length != 10) {
        document.getElementById('mob1').innerHTML =" ** Mobile Number must be 10 digit number";
        return false; 
      }
            if(isNaN(mobile1)){
        document.getElementById('mob1').innerHTML =" ** only digits are allowed";
        return false;
      }
      
      //address
      if(add1 == ""){
        document.getElementById('address1').innerHTML =" ** Please fill the address field";
        return false;
      }
      if((add1.length <= 8) || (add1.length > 30)) {
        document.getElementById('address1').innerHTML =" ** Address lenght must be between 8 and 30";
        return false; 
      }
      //gender
      if(validsex1(male1,female1)){
        
      }
      //occupation
      if(occu1 == "-1"){
        document.getElementById('occupation1').innerHTML =" ** Please choose the occupation feild ";
        return false;
      }
      //bdate
      if(date1 == ""){
        document.getElementById('bdate1').innerHTML =" ** Please fill the date of trip";
        return false;
      }
      //city
      if(city1 == "-1"){
        document.getElementById('ecity1').innerHTML =" ** Please fill the city field";
        return false;
      }
       if(!isNaN(city1)){
        document.getElementById('ecity1').innerHTML =" ** only characters are allowed";
        return false;
      }
      //zip
      if(zip1 == ""){
        document.getElementById('zipcode1').innerHTML =" ** Please fill the zipcode field";
        return false;
      }
       if(isNaN(zip1)){
        document.getElementById('zipcode1').innerHTML =" ** only digits are allowed";
        return false;
      }
      if(zip1.length != 4) {
        document.getElementById('zipcode1').innerHTML =" ** zipcode must be 4 digit number";
        return false; 
      }
      //trip
      if(state1 == "-1"){
        document.getElementById('states1').innerHTML =" ** Please select trip feild ";
        return false;
      }
      //agree
      if(kulpreet1(yes1,no1)){
      
      }
      
      //payement
      if(country1 == "-1"){
        document.getElementById('mcountry1').innerHTML =" ** Please select the payement feild ";
        return false;
      }
      //payement
      
      // acc no
      if(acno == ""){
        document.getElementById('acnumber').innerHTML =" ** Please fill the account number field";
        return false;
      }
       if(isNaN(acno)){
        document.getElementById('acnumber').innerHTML =" ** only digits are allowed";
        return false;
      }
      //ifsc
      if(ifscno == ""){
        document.getElementById('ifscnumber').innerHTML =" ** Please fill the IFSC code field";
        return false;
      }
       if(isNaN(ifscno)){
        document.getElementById('ifscnumber').innerHTML =" ** only digits are allowed";
        return false;
      }
      //otp
      if(otp == ""){
        document.getElementById('otpno').innerHTML =" ** Please fill the 6 digit OTP";
        return false;
      }
       if(isNaN(otp)){
        document.getElementById('otpno').innerHTML =" ** only digits are allowed";
        return false;
      }
      if(otp.length != 6) {
        document.getElementById('otpno').innerHTML =" ** OTP must be 6 digit number";
        return false; 
      }
      
      else{
      window.alert("Booked Successfully!!");
      }

}

