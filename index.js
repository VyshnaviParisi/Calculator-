function display(num){
    document.getElementById('textarea').value+=num;

}

function cal()
{
    var value=document.getElementById('textarea').value;
    var ans=eval(value);
    document.getElementById('textarea').value=ans;
}

function Clr(){
    document.getElementById('textarea').value=null;
}