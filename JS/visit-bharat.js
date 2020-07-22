function varification(){

          var uname = document.getElementById('uname').value;
          var pass=document.getElementById('pass').value;
          var confirmpass=document.getElementById('confirmpass').value;

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

      if(uname=="kulpreetsingh0128@gmail.com" && pass=="kulpreet")
        {
         window.alert("login Successfully");
        }
        else
        {
      window.alert("login failed");
        }
      
}
function validation(){

      var user = document.getElementById('user').value;
      var email=document.getElementById('email').value;
      var mobile=document.getElementById('mobile').value;
      var add=document.getElementById('add').value;
      var gen=document.getElementById('gen').value;
      var date=document.getElementById('date').value;
      var occu=document.getElementById('occu').value;
      var city=document.getElementById('city').value;
      var zip=document.getElementById('zip').value;
      


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
      //gender
      if((gen[0].checked == false)&&(gen[1]==false)){
        document.getElementById('gender').innerHTML =" ** Please choose the Gender field";
        return false;
      }
      //bdate
      if(date == ""){
        document.getElementById('bdate').innerHTML =" ** Please fill the date of birth field";
        return false;
      }
      //occupation
      if(occu == ""){
        document.getElementById('occupation').innerHTML =" ** Please fill the date of birth field";
        return false;
      }
      //city
      if(city == ""){
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
      else{
      alert("Registered Successfully");
      }

    
    
    }

function Message(){

      var user1 = document.getElementById('user1').value;
      var email1=document.getElementById('email1').value;
      var mobile1=document.getElementById('mobile1').value;
      var mess=document.getElementById('mess').value;

      //user
      if(user1 == ""){
        document.getElementById('username1').innerHTML =" ** Please fill the username field";
        return false;
      }
      if((user1.length <= 2) || (user.length > 20)) {
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
      //message
      if(mess == ""){
        document.getElementById('message').innerHTML =" ** Please fill the Message field";
        return false;
      }
      else{
      alert("Message Registered Successfully");
      }
}

function Book(){

      var user2 = document.getElementById('user2').value;
      var email2=document.getElementById('email2').value;
      var mobile2=document.getElementById('mobile2').value;
      var add2=document.getElementById('add2').value;
      var gen2=document.getElementById('gen2').value;
      var occu2=document.getElementById('occu2').value;
      var date2=document.getElementById('date2').value;
      var zip2=document.getElementById('zip2').value;
      var acno=document.getElementById('acno').value;
      var ifscno=document.getElementById('ifscno').value;
      var otp=document.getElementById('otp').value;

      
      //user
      if(user2 == ""){
        document.getElementById('username2').innerHTML =" ** Please fill the username field";
        return false;
      }
      if((user2.length <= 2) || (user2.length > 20)) {
        document.getElementById('username2').innerHTML =" ** Username lenght must be between 2 and 20";
        return false; 
      }
            if(!isNaN(user2)){
        document.getElementById('username2').innerHTML =" ** only characters are allowed";
        return false;
      }
      // email
      if(email2 == ""){
        document.getElementById('emailid2').innerHTML =" ** Please fill the email id field";
        return false;
      }
      if(email2.indexOf('@') <= 0 ){
        document.getElementById('emailid2').innerHTML =" ** @ Invalid Position";
        return false;
      }

      if((email2.charAt(email2.length-4)!='.') && (email2.charAt(email2.length-3)!='.')){
        document.getElementById('emailid2').innerHTML =" ** . Invalid Position";
        return false;
      }
      // mobile
      if(mobile2 == ""){
        document.getElementById('mob2').innerHTML =" ** Please fill the Mobile Number";
        return false;
      }
      if(mobile2.length != 10) {
        document.getElementById('mob2').innerHTML =" ** Mobile Number must be 10 digit number";
        return false; 
      }
            if(isNaN(mobile2)){
        document.getElementById('mob2').innerHTML =" ** only digits are allowed";
        return false;
      }
      
      //address
      if(add2 == ""){
        document.getElementById('address2').innerHTML =" ** Please fill the address field";
        return false;
      }
      //gender
      if((gen2[0].checked == false)&&(gen2[1]==false)){
        document.getElementById('gender2').innerHTML =" ** Please choose the Gender field";
        return false;
      }
      
      //occupation
      if(occu2 == ""){
        document.getElementById('occupation2').innerHTML =" ** Please fill the date of birth field";
        return false;
      }
      //tdate
      if(date2 == ""){
        document.getElementById('bdate2').innerHTML =" ** Please fill the date of birth field";
        return false;
      }
      
      //zip
      if(zip2 == ""){
        document.getElementById('zipcode2').innerHTML =" ** Please fill the zipcode field";
        return false;
      }
       if(isNaN(zip2)){
        document.getElementById('zipcode2').innerHTML =" ** only digits are allowed";
        return false;
      }
      if(zip2.length != 6) {
        document.getElementById('zipcode2').innerHTML =" ** zipcode must be 6 digit number";
        return false; 
      }
      // select trip

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
      window.alert("Registered Successfully");
      }

    
    
}
