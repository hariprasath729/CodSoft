let show=document.getElementById("output");
function  display(num)
{
    show.value+=num;
}
function calculate() {
    try {
        show.value=eval(show.value);
    } catch (err) {
        show.value="error";
        
    }
}
function allclear() {
    show.value="";

}
function del() {
    show.value=show.value.slice(0,-1);
}