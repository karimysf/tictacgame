document.addEventListener("DOMContentLoaded", function() {
    let tour=0;
    var whowon=-1;
    let blue=0;
    let red=0;
    const winner=document.getElementById("winner");
    const play=document.getElementById("play");
    const quit=document.getElementById("quit");
    const score=document.getElementById("scr")
    const window=document.getElementById("window");
    const container=document.getElementById("container");
    const div1 = document.getElementById("one");
    const div2 = document.getElementById("two");
    const div3 = document.getElementById("three");
    const div4 = document.getElementById("four");
    const div5 = document.getElementById("five");
    const div6 = document.getElementById("sixe"); // Check this ID name, ensure it matches HTML
    const div7 = document.getElementById("seven");
    const div8 = document.getElementById("eight");
    const div9 = document.getElementById("nine");

    const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9];

    const cr1 = document.getElementsByClassName("un")[0];
    const cr2 = document.getElementsByClassName("deux")[0];
    const cr3 = document.getElementsByClassName("trois")[0];
    const cr4 = document.getElementsByClassName("quatre")[0];
    const cr5 = document.getElementsByClassName("cinq")[0];
    const cr6 = document.getElementsByClassName("six")[0]; // Ensure this matches the correct ID
    const cr7 = document.getElementsByClassName("sept")[0];
    const cr8 = document.getElementsByClassName("huit")[0];
    const cr9 = document.getElementsByClassName("neuf")[0];
   let check=[0,0,0,0,0,0,0,0,0];
    const cercles = [cr1, cr2, cr3, cr4, cr5, cr6, cr7, cr8, cr9];
    const c1 = document.getElementsByClassName("_1")
    const c2 = document.getElementsByClassName("_2")
    const c3 = document.getElementsByClassName("_3")
    const c4 = document.getElementsByClassName("_4")
    const c5 = document.getElementsByClassName("_5")
    const c6 = document.getElementsByClassName("_6") // Ensure this matches the correct ID
    const c7 = document.getElementsByClassName("_7")
    const c8 = document.getElementsByClassName("_8")
    const c9 = document.getElementsByClassName("_9")

    function ce(index) {
if (check[index]==0)
    { 
    if (tour%2==0)
      {  c[index][1].style.visibility = "visible";
        c[index][0].style.visibility = "visible";
        tour++;
        check[index]=1;}
    else {
        cercles[index].style.visibility = "visible";
        tour++;
        check[index]=2;
    }
     
}
if (win() || !check.includes(0))
    {    let str=""
        reset();
        if (whowon==0)
            {
                str="Blue won";
                winner.style.color="blue"
                blue++;
                whowon=-1;
            }
        if (whowon==1)
            {
                str="red won";
                winner.style.color="red"
                red++;
                whowon=-1;
            }
        if (whowon==-1) {
            str="draw !!";
            winner.style.color="grey"
        }
        winner.innerText=str;
        score.innerText="blue :"+blue+" : "+red+" : red";
        container.style.visibility="hidden"
        window.style.visibility="visible";
        
    }


 }
function win()
{ if (check[0]==1)
    {
        if (check[1]==1 && check[2]==1 ||  check[3]==1 && check[6]==1 || check[4]==1 && check[8]==1)
            {
                whowon=0;
                return true
                
            }
        
    }
if (check[1]==1)
    {  if (check[4]==1 && check[7]==1)
        {
            whowon=0;
        return true
        }
        
    }
if (check[2]==1)
    {
        if (check[5]==1 && check[8]==1 ||  check[4]==1 && check[6]==1)
         {  
            whowon=0;
            return true
         }

    }
if (check[3]==1)
    {   if (check[5]==1 && check[4]==1 )
        {
            whowon=0;
        return true
        }
    }

if (check[6]==1)
    {
        if (check[7]==1 && check[8]==1) 
            {
                whowon=0;
            return true
            }
    }


//-------------------------------------------------------
if (check[0]==2)
    {
        if (check[1]==2 && check[2]==2 ||  check[3]==2 && check[6]==2 || check[4]==2 && check[8]==2)
            {
                whowon=1;
                return true
            }
        
    }
if (check[1]==2)
    {  if (check[4]==2 && check[7]==2)
        {
            whowon=1;
        return true
        }
    }
if (check[2]==2)
    {
        if (check[5]==2 && check[8]==2 ||  check[4]==2 && check[6]==2)
            {
                whowon=1;
            return true
            }

    }
if (check[3]==2)
    {   if (check[5]==2 && check[4]==2 )
        {
            whowon=1;
        return true
        }
    }

if (check[6]==2)
    {
        if (check[7]==2 && check[8]==2) 
            {
                whowon=1;
            return true
            }
    }


}
function reset()
{ for (let i=0;i<9;i++)
    { c[i][1].style.visibility = "hidden";
        c[i][0].style.visibility = "hidden";
        cercles[i].style.visibility = "hidden";
        check[i]=0;


    }

}

    
    const c = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
    // Loop through each div and add the click event listener
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            ce(i);
            // Display alert on click (can be removed or replaced with console.log)
        });
    }


    const but=this.getElementById("button");
    but.addEventListener("click",reset);

    play.addEventListener("click",function(){
        reset();
        container.style.visibility="visible"
        window.style.visibility="hidden";

    })
});
