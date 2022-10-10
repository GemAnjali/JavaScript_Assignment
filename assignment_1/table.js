(function () {


        //heading of the assignment
          var headtag = document.createElement("h3");
          headtag.innerText = "ASSIGNMENT 1";
          headtag.style.textAlign = "center";
          headtag.style.color = "#FF7F50";
          headtag.style.fontSize = "40px";
          document.body.appendChild(headtag);

  
         //Build an array containing Customer records.
         var people = Array(
           Array ("Harry",23,"29th jan", "harry@gmail.com","Gemini solutons"),
          Array("Manny",24,"26th Jul", "manny@gmail.com","Gemini solutons"),
          Array ("Sandy",33,"12th Aug", "sandy@gmail.com","Gemini solutons"),
           Array ("Nora", 29,"21th Sep", "nora@gmail.com","Gemini solutons"),
           Array ("Monty",29,"11th Oct", "monty@gmail.com","Gemini solutons"),
);

      //creating the headings of each column
      var heading = Array("NAME","AGE", "DOB", "EMAIL", "COMPANY");

         const tbl = document.createElement("table");
         const tblBody = document.createElement("tbody");

         var headRow = tbl.insertRow(-1);
         headRow.style.color = "turquoise";
        

         for(var i = 0; i<5; i++){
            var headcell = document.createElement("Td");

           //styling
            headcell.style.border = 'solid 2px'
            headcell.style.padding = "20px";
            headcell.style.textAlign = "center";
            headcell.style.fontWeight = "bold";

            headcell.innerHTML = heading[i];
            headRow.appendChild(headcell);
         }


      //adding the celles int the table 
       var cell,row;
         // creating all cells
         for (let i = 0; i < 5; i++) {
           // creates a table row
           row = document.createElement("tr");
       
           for (let j = 0; j < 5; j++) {
             // Create a <td> element and a text node, make the text
             // node the contents of the <td>, and put the <td> at
             // the end of the table row
            cell = document.createElement("td");

            //styling
            cell.style.border = 'solid 1px';
            cell.style.padding = "20px";

             const cellText = document.createTextNode(people[i][j]);
             cell.appendChild(cellText);
             row.appendChild(cell);
           }
       
           // add the row to the end of the table body
           tblBody.appendChild(row);
         }
       
         // put the <tbody> in the <table>
         tbl.appendChild(tblBody);

         //adding styles to table

          tbl.style.border = 'solid 2px black';
          tbl.style.marginLeft = "350px";
          tbl.style.marginTop = "100px";
        

         // appends <table> into <body>
         document.body.appendChild(tbl);

})();