<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<title>Todo js</title>

<style>
 #bdlgmodifier{

     display: flex;
     flex-direction: column;
     justify-content: center;
     width: 250px;
     padding: 10px;
     height: 150px;
     background-color: aqua;
     position:fixed;
     top: 250px;
     left: 40%;

 }

 

</style>

</head>
<body>
    <h1>Todo</h1>
    <div class="row">

        <div class="form-group col-12">
            <input type="text" class="input">
            <button class="btn btn-primary btnadd" onclick="addtask()">Ajouter</button>
            <!--<button class="btn btn-primary" id="btnsup">bouton à supprimer</button>
            <button class="btn btn-primary" onclick="deletebtn()">supprimer le bouton</button>-->
        </div>
    </div>


    
  <div class="row m-4 ">
    <div class="form-group  col-12">

<table class="table table-striped table-hover text-center mytodolist">
    <thead>
         <tr><th>No</th><th>Tâche</th><th>Actions</th></tr>
    </thead>
  
 
 

   <!--
        <tr>
            <td>tache1</td><td>Faire du vélo</td>
            <td>
                <i class='fas fa-edit' style='font-size:24px; color:green'></i>
                <i class='fas fa-trash-alt ml-3' style='font-size:24px;color:red'></i>
            </td>
        </tr>

        -->

 
     
 



  </table>


 

</div>
</div>


  <div id="bdlgmodifier">
    <input type="text" class="inputmodif">
    <button class="btn btn-primary m-3 btnmodif">Modifier</button>
  </div>


<!--
<h1 id="token"></h1>
<button id="#identifiant">Obtenir un code</button>-->


    <!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="todo.js"></script>
</body>
</html>