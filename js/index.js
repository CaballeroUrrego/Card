/* crear funcion para cambiar el año en el futter 
*/
window.addEventListener("load",()=>{
    const currentDate=newDate();
    document.getElementById("currentYear").innertext=currentDate.getFullYear();
});