if (typeof(Storage) !== "undefined") {
    
    var personas = [];
    var editIndex = 0;

    function SaveData(){
        data = JSON.stringify(personas);
        localStorage.setItem('dataPersonas', data);
    }
    function LoadData(){
        data = localStorage.getItem('dataPersonas');
        if(data != null){
            personas = JSON.parse(data);
            ShowContacts();
        }
    }
    function Persona(name,last,tel,email,id,date){
        this.name = name;
        this.last = last;
        this.tel = tel;
        this.email = email;
        this.id = id;
        this.date = date; 
    }

    function ClearForm(){
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('number').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cedula').value = '';
        document.getElementById('birthdate').value = '';
        
    }

    function NewContact(){
        //Get elements
        var name = document.getElementById('name').value;
        var last = document.getElementById('lastname').value;
        var tel = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var id = document.getElementById('cedula').value;
        var date = document.getElementById('birthdate').value;
        //Add person to array
        personas.push(new Persona(name,last,tel,email,id,date));

        SaveData();
        ClearForm();
        ShowContacts();
    }

    function ShowContacts(){
        table = document.getElementById('tbData');
        table.innerHTML = '';

        for(i = 0; i < personas.length; i++){
            p = personas[i];
            tr = document.createElement('tr');            
            tr.setAttribute('index', i);

            td = document.createElement('td');
            td.innerHTML = p.name;
            tr.appendChild(td);
            
            td = document.createElement('td');
            td.innerHTML = p.last;
            tr.appendChild(td);
            
            td = document.createElement('td');
            td.innerHTML = p.tel;
            tr.appendChild(td);
            
            td = document.createElement('td');
            td.innerHTML = p.email;
            tr.appendChild(td);
            
            td = document.createElement('td');
            td.innerHTML = p.id;
            tr.appendChild(td);
            
            td = document.createElement('td');
            td.innerHTML = p.date;
            tr.appendChild(td);
            
            td = document.createElement('td');
            td.setAttribute('class','text-center');
            td.innerHTML = "<a class='btn btn-info btn-xs' onclick='EditContact(this)'><span class='far fa-edit'></span> Editar</a> <a onclick='DeleteContact(this)' class='btn btn-danger btn-xs'><span class='far fa-trash-alt'></span> Eliminar</a>";
            tr.appendChild(td);

            table.appendChild(tr);
        }
    }

    function DeleteContact(e){
        tr = e.parentNode.parentNode;
        if(confirm('¿Esta seguro que desea eliminar?')){
            index = tr.getAttribute('index');
            personas.splice(index, 1);
            tr.parentNode.removeChild(tr);
            SaveData();
        }
    }

    function EditContact(e){
        tr = e.parentNode.parentNode;
        //Get index
        index = tr.getAttribute('index');
        //Fill form
        document.getElementById('name').value = personas[index].name;
        document.getElementById('lastname').value = personas[index].last;
        document.getElementById('number').value = personas[index].tel;
        document.getElementById('email').value = personas[index].email;
        document.getElementById('cedula').value = personas[index].id;
        document.getElementById('birthdate').value = personas[index].date;
        editIndex = index;
    }

    function SaveEdit(){
        //Get elements
        var name = document.getElementById('name').value;
        var last = document.getElementById('lastname').value;
        var tel = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var id = document.getElementById('cedula').value;
        var date = document.getElementById('birthdate').value;
        //Add person to array
        personas[editIndex] = new Persona(name,last,tel,email,id,date);

        SaveData();
        ClearForm();
        ShowContacts();
    }

    function GetZodiac(){
        
    }

  } else {
    document.getElementById("tbData").innerHTML = "Sorry, your browser does not support Web Storage...";
  }