$(document).ready(function (){
   $(window).scroll(function (){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }
       else{
            $('.navbar').removeClass("sticky");
       }
   });
   $('.navbar-toggler').click(function (){
       $('.navbar .collapse').toggleClass("active");
       $('.navbar-toggler').toggleClass("active");
   });

   var typed1 = new Typed(".typing1",{
        strings:["CHANDIGARH UNIVERSITY"],
        typeSpeed: 40,
       backSpeed: 20,
       loop: true
   });

   var typed2 = new Typed(".typing2",{
        strings:["UI/UX DESIGNER","PYTHON PROGRAMMER","C++ PROGRAMMER","FRONTEND DEVELOPER","BACKEND DEVELOPER","C PROGRAMMER","JAVA PROGRAMMER"],
        typeSpeed: 80,
       backSpeed: 40,
       loop: true
   });
});