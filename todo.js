let task = document.querySelector('.input');
let btnadd = document.querySelector('.btnadd');
let mytodolist = document.querySelector('.mytodolist');

let btnmodifier = document.getElementById('bdlgmodifier');
let inputmodif = document.querySelector('.inputmodif');

let btnmodif = document.querySelector('.btnmodif');

btnmodifier.style.display='none';
let tableaudetaches = new Array();

let numtache = 0;

let trid;

function addtask()
{
    numtache++;
    tableaudetaches["tache"+numtache]=task.value;
    showtask();
}

let tbody;

function showtask(){
     
    if(tbody){
          mytodolist.removeChild(tbody);
    }
  
   tbody =  document.createElement('tbody');
   tbody.setAttribute("description","corps de la table")
    let TR ;
    for(let key in tableaudetaches)
    {
        TR = document.createElement('tr');
        TR.setAttribute("id",key);
        TR.innerHTML="<td>"+key+"</td><td>"+tableaudetaches[key]+"</td><td><i  numtask ='"+key+"' onclick='modifEl(event)' class='fas fa-edit' style='font-size:24px; color:green'></i><i numtask ='"+key+"' onclick='removeEl(event)' class='fas fa-trash-alt ml-3' style='font-size:24px;color:red'></i></td>"
        tbody.appendChild(TR);
    }

    mytodolist.appendChild(tbody);

}


function removeEl(event){

     trid = event.currentTarget.getAttribute("numtask");
    console.log('supprimer la tâche '+trid);
    let trclique = document.getElementById(trid);
    //trclique.remove();
    delete tableaudetaches[trid];
    console.log(tableaudetaches);
    showtask();
}


function modifEl(event){

     trid = event.currentTarget.getAttribute("numtask");
    console.log('modifier la tâche '+trid);
     btnmodifier.style.display="block";
    inputmodif.value = tableaudetaches[trid];

}

btnmodif.addEventListener('click',function(){

    let newTask = inputmodif.value;
    tableaudetaches[trid]=newTask;
    showtask();
    //console.log(newTask);
    btnmodifier.style.display="none";
})


/*

let btnsup = document.getElementById("btnsup");

function deletebtn(){
    btnsup.remove();
}
*/

