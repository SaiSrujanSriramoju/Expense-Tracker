 
       let table = document.getElementById("table")
       console.log("table:",table);
       function deleteRow(row)
       {
           row.remove();
       }
      function addRow(){
        let date = document.getElementsByClassName("date-input")[0].value
        let amount = document.getElementsByClassName("amount-input")[0].value
        let transactionType = document.getElementsByClassName("transaction-type")[0].value

        if (date === "" || amount === "" || isNaN(amount) || transactionType === "Transaction Type") 
        {
          alert("Please enter Date, Amount, and select a Transaction Type.");
           return;
        }

        
        let row = document.createElement("tr")
        let amountCell = document.createElement("td")
        amountCell.innerText= amount;
        let transactionCell = document.createElement("td")
        transactionCell.innerText = transactionType
        let dateCell = document.createElement("td")
        dateCell.innerText = date;
        let binCell = document.createElement("td")
        let deleteButton = document.createElement("button")
        let binImage = document.createElement("img")
        binImage.src="../images/bin symbol.jpg"
        binImage.style.width="25px"
        binImage.style.height = "25px"


        deleteButton.appendChild(binImage)
        deleteButton.classList.add("delete-button")
        deleteButton.onclick=()=>deleteRow(row)
        binCell.appendChild(deleteButton)
        row.appendChild(amountCell)
        row.appendChild(transactionCell)
        row.appendChild(dateCell)
        row.appendChild(binCell)
        table.appendChild(row)
        let totalIncome = document.getElementById("totalincome").innerText
        let totalExpense = document.getElementById("expense").innerText
        let balance = document.getElementById("balance").innerText
        if(transactionType=="Income")
      {
        if(totalIncome=="0")
       { 
        document.getElementById("totalincome").innerText=amount
       }
       else
       {
         document.getElementById("totalincome").innerText= parseInt(totalIncome)+parseInt(amount)
       }
       if(balance=="0")
       {
         document.getElementById("balance").innerText=amount
       }
       else
       {
        document.getElementById("balance").innerText=parseInt(balance)+parseInt(amount)
       }
      }

      else if(transactionType=="Expense")
      {
        if(totalExpense=="0")
       {
         document.getElementById("expense").innerText=amount
       }
       else 
       {
         document.getElementById("expense").innerText=parseInt(totalExpense)+parseInt(amount)
       }
       if(balance=="0")
       {
         document.getElementById("balance").innerText=amount
       }
       else
       {
         document.getElementById("balance").innerText=parseInt(balance)-parseInt(amount)
       }
      }
      
        console.log("line 124:",amountCell,transactionCell,dateCell);

      }