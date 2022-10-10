
  function validateForm(){


    var name = document.getElementById("name").value;
    var nameResult = validateName(name);
    // window.alert(nameResult);

     var email = document.getElementById("email").value;
     var emailResult = validateEmail(email);
    //  window.alert(emailResult);
    
     var mobile = document.getElementById("mobile").value;
     var mobileResult = true;

     if(mobile != null || mobile != ""){
      mobileResult = validateMobile(mobile);
    }

    // window.alert(name+" "+email+" "+mobile);
    // window.alert(mobileResult);

    if(nameResult == true && emailResult == true && mobileResult == true){
    storeData(name,email,mobile);
    }
  
  }

  //user name validation
  function validateName(name){

    var result = false;
    
    if (name == "" || name == null){
      alert ("name is required");
    }
    else{
      
      var regex = /[a-zA-Z ]/;
      result = regex.test(name);
      if(result == false)
        alert("Name should contain only letters and space");
    }

  return result;

  }

  //user email validation
  function validateEmail(email){
    var result = false;

    if(email == "" || name == null){
      alert("email is required");
    }

    else{

      var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      result = regex.test(email);

      if(result == false)
        alert("Enter a valid email");
      
    }
    return result;

  }

  //user mobile number validation
  function validateMobile(mobile){

    var regex =/^[0-9]{10}/;
  
    var result = regex.test(mobile);

    if(result == false)
      alert("Invalid mobile number");
    
    return result;

  }

  //method to store the data into local storage
  function storeData(name,email,mobile){

    let user_records=new Array();

    user_records.push({

        "name":name,
        "email":email,
        "mobile":mobile
    })

    localStorage.setItem("users",JSON.stringify(user_records))

  displayData();
  }
  
  //method to display the data in a table
  function displayData(){    
    document.getElementById("showUsers").innerHTML = "";
    let user_records = new Array();

    user_records = JSON.parse(localStorage.getItem("users"));
    
    if(user_records)
    {
      var heading = new Array("NAME", "EMAIL","MOBILE");
      const tbl = document.createElement("table");
      const tblBody = document.createElement("tbody");

      var headRow = tbl.insertRow(-1);
      headRow.style.color = "turquoise";


      for(var i = 0;i<3;i++){
        var headcell = document.createElement("td");
        headcell.style.border = 'solid 2px';
        headcell.style.padding = "20px";
        headcell.style.textAlign = "center";
        headcell.style.fontWeight = "bold";

        headcell.innerHTML = heading[i];
        headRow.appendChild(headcell);

      }

      for(let i=0;i<user_records.length;i++)
      {
        let addRow = document.createElement('tr');
        addRow.style.border = "2px solid black";
        addRow.style.color = "turquoise";

        for(let j = 0; j < user_records.length; j++){
          let td1 = document.createElement('td');
          let td2 = document.createElement('td');
          let td3 = document.createElement('td');

          var text1 = document.createTextNode(user_records[i].name);
          var text2 = document.createTextNode(user_records[i].email);
          var text3 = document.createTextNode(user_records[i].mobile);
          
          // td1==============
          td1.appendChild(text1);
          
          td1.style.border = 'solid 2px';
          td1.style.padding = "20px";
          td1.style.textAlign = "center";
          td1.style.fontWeight = "bold";
          // td2===========
          td2.appendChild(text2);
          td2.style.border = 'solid 2px';
          td2.style.padding = "20px";
          td2.style.textAlign = "center";
          td2.style.fontWeight = "bold";
          // td3================
          td3.appendChild(text3);
          td3.style.border = 'solid 2px';
          td3.style.padding = "20px";
          td3.style.textAlign = "center";
          td3.style.fontWeight = "bold";

3
          addRow.appendChild(td1);
          addRow.appendChild(td2);
          addRow.appendChild(td3);

      
        }
        tblBody.appendChild(addRow);
      }
      
    tbl.appendChild(tblBody);
    document.getElementById("showUsers").appendChild(tbl);

    }
  }


  