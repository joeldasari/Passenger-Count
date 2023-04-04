var i = 0
var countnum = document.getElementById("countnum")
var savepoints = document.getElementById("savepoints")
function inc() 
{

    i += 1
    countnum.innerText = i
  
    // alert(i)
    
    // for(let k=0;k<temp.length;k++)
    // {
    //     alert(temp[k])
    // }
    // savepoints.innerText = temp.join(",")
    // var a = alert('count = '+i)
    // var b = alert('countnum = '+countnum)

}

function save()
{
    savepoints.textContent += countnum.innerText + ' - '



    // var temp = [5]

    // for(let j=0;j<temp.length;j++)
    // {
    //     temp[j] = save
    //     // savepoints.innerText = temp[j]
    // }

    // for(let k = 0;k<temp.length;k++)
    // {
    //     savepoints.innerText = temp[k]
    // }
    
    // var temp = [100]
    // for(let j=0;j<temp.length;j++)
    // {
    //     temp[j] = save
    // }
    // // for(let k=0;k<temp.length;k++)
    // {
    //     savepoints.innerText
    // }
    
    // var b = alert(temp)
}