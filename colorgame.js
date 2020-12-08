var numsquares=6;
var colors=generaterandomcolors(numsquares);
var squares= document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebutton=document.querySelectorAll(".mode");

for(i=0;i<modebutton.length;i++)
{
    modebutton[i].addEventListener("click",function()
    {
        modebutton[0].classList.remove("selected");
        modebutton[1].classList.remove("selected");
        this.classList.add("selected");
        //this.textContent === "easy" ? numsquares= 3: numsquares= 6;
        if(this.textContent==="easy")
        {
           numsquares=3;
        } 
        else
        {
           numsquares=6;
        }
        reset();
    });
};
function  reset(){
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    resetbutton.textContent="new colors";
    messagedisplay.textContent="";
    for(var i=0;i<squares.length;i++){
        if(colors[i])
        {
            squares[i].style.display= "block";
            squares[i].style.background= colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
        h1.style.background="steelblue";

}


resetbutton.addEventListener("click",function()
{
    reset();
});


colordisplay.textContent = pickedcolor;
for(var i=0;i<squares.length;i++)
{
   squares[i].style.background=colors[i];
   squares[i].addEventListener("click",function()
   {
        var clickedcolor=this.style.background;
        if(clickedcolor === pickedcolor)
        {
            messagedisplay.textContent="correct!";
            resetbutton.textContent="play again?";
            changecolors(clickedcolor);
             h1.style.background=clickedcolor;
        }
        else
        {
             this.style.background="#232323";
             messagedisplay.textContent="try again";
        }
    });
}


function changecolors(color)
{
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;    }
}


function pickcolor()
{
  var random= Math.floor(Math.random()*colors.length) ;
  return colors[random];
}


function generaterandomcolors(num)
{
    var arr=[]
    for(var i=0;i<num;i++)
    {
       arr.push(randomcolor());
    }
return arr;
};

function randomcolor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}