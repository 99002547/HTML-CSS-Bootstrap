var nameFlag=0
var emailFlag=0
var phoneFlag=0
var qualificationFlag=0
var specializationFlag=0
var email
var name
var phone
var selectedLocationValue=""
var qualification=""
var specialization=""
var locationChoices = ["Mumbai","Banglore","Mysore","Chennai"];
const minimumLengthRequiredForNameErrorMessage="Name should have minimum of 3 characters"
const maximumLengthAcceptedForNameErrorMessage="Name exceeds 255 characters"
const invalidNameFormatErrorMessage="Name should have only alphabets and spaces"
const minimumLengthRequiredForEmailErrorMessage="Email should have minimum 8 characters"
const maximumLengthRequiredForEmailErrorMessage="Email exceeds 255 characters"
const invalidrEmailFormatErrorMessage="Invalid email id format"
const lessDigitsInPhoneNumberErrorMessage="Phone number is having less than 10 digits"
const moreDigitsInPhoneNumberErrorMessage="Phone number is having more than 10 digits"

function locationSelectOptions() {
    var selectHTML=document.getElementById("location")
    selectHTML.innerHTML = "<select><option value>--Select Location--</option>"
    for(i = 0; i < locationChoices.length; i = i + 1) {
        selectHTML.innerHTML += "<option value='" + locationChoices[i] + "'>" + locationChoices[i] + "</option>"
    }
    selectHTML.innerHTML += "</select>"
}
function validateName() {
  var regex = /^[a-zA-Z]+[\sa-zA-Z]+$/;
  name=document.getElementById("name").value;
  if(name.length<3){
    document.getElementById("nameError").innerText=minimumLengthRequiredForNameErrorMessage
    nameFlag=0
  } 
  else if( name.length>255) {
    document.getElementById("nameError").innerText=maximumLengthAcceptedForNameErrorMessage
    nameFlag=0
  } 
  else if( regex.test(name) == false) {
    document.getElementById("nameError").innerText=invalidNameFormatErrorMessage
    nameFlag=0
  }
  else {
    document.getElementById("nameError").innerText=""
    nameFlag=1
  }
}

function validateEmail() {
  email=document.getElementById("email").value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if(email.length<8){
    document.getElementById("emailError").innerText=minimumLengthRequiredForEmailErrorMessage
    emailFlag=0
  } 
  else if( email.length>65) {
    document.getElementById("emailError").innerText=maximumLengthRequiredForEmailErrorMessage
    emailFlag=0
  } 
  else if( atpos< 3 || ( dotpos-atpos< 3 ) || (email.length-dotpos < 3)) {
    document.getElementById("emailError").innerText=invalidrEmailFormatErrorMessage
    emailFlag=0
  }
  else {
    document.getElementById("emailError").innerText=""
    emailFlag=1
    }
}

function validatePhone() {
  phone=document.getElementById("phone").value;
  if(phone.length<10) {
    document.getElementById("phoneError").innerText=lessDigitsInPhoneNumberErrorMessage
    phoneFlag=0
  }
  else if(phone.length>10){
    document.getElementById("phoneError").innerText=moreDigitsInPhoneNumberErrorMessage
    phoneFlag=0
  }
  else {
    document.getElementById("phoneError").innerText=""
    phoneFlag=1
  }
}

function validateLocation() {
  selectedLocationValue=document.getElementById("location")
  if(selectedLocationValue.options[selectedLocationValue.selectedIndex].value=="")
  alert("Please select Location")
}

function showSpecialization() {
  document.getElementById("hid").style.display="block"
  qualificationFlag=1
  var qualificationChecked=document.getElementsByName("qualification")
  for(i=0;i<qualificationChecked.length;i++)
    if(qualificationChecked[i].checked)
      qualification=qualificationChecked[i].value
}

function validateSpecialization(){
  specializationFlag=1
  specialization=document.getElementById("specialization").value
}
function formValidate() { 
  validateLocation()
  if(nameFlag!=0 && emailFlag.length!=0 && phoneFlag.length!=0 && selectedLocationValue.options[selectedLocationValue.selectedIndex].value
    && qualificationFlag==1 && specializationFlag==1)
    alert("Employee registered successfully with details: \nName="+name+"\nEmail="+email+"\nPhone Number="+phone+"\nLocation="
    +selectedLocationValue.options[selectedLocationValue.selectedIndex].value+"\nQualification="+qualification+
    "\nSpecialization="+specialization)
  else if(nameFlag!=0 && emailFlag.length!=0 && phoneFlag.length!=0 && selectedLocationValue.options[selectedLocationValue.selectedIndex].value
    && qualificationFlag==1)
    alert("Employee registered successfully with details: \nName="+name+"\nEmail="+email+"\nPhone Number="+phone+"\nLocation="
    +selectedLocationValue.options[selectedLocationValue.selectedIndex].value+"\nQualification="+qualification)
  else
    alert("Employee registered successfully with details: \nName="+name+"\nEmail="+email+"\nPhone Number="+phone+"\nLocation="
    +selectedLocationValue.options[selectedLocationValue.selectedIndex].value)
}