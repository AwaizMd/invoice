let nextItemNumber = 2; // Variable to track the next item number

function addRow() {
  let table = document.getElementById("item-table");
  let newRow = table.insertRow();
  let cells = [];

  // Add item number in the first column
  let itemNumberCell = newRow.insertCell(0);
  itemNumberCell.textContent = nextItemNumber;
  nextItemNumber++;

  for (let i = 1; i < 4; i++) {
    // Start from index 1
    cells.push(newRow.insertCell(i));
    cells[i - 1].contentEditable = true;
  }
}

function calculateTotal() {
  let table = document.getElementById("item-table");
  let rows = table.getElementsByTagName("tr");
  let total = 0;

  // Start from the second row (skipping the header row)
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let amount = parseFloat(cells[3].textContent);
    if (!isNaN(amount)) {
      total += amount;
    }
  }

  return total;
}

function updateTotal() {
  let totalAmount = calculateTotal();
  document.querySelector(".total-amount").textContent =
    "Total Amount: " + totalAmount.toFixed(2);
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed.");

  let table = document.getElementById("item-table");

  // Attach event listener to the table to listen for input changes
  table.addEventListener("input", function (event) {
    let target = event.target;
    if (target.tagName === "TD" && target.cellIndex === 3) {
      updateTotal();
    }
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed.");

  // Get today's date
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // January is 0
  let year = today.getFullYear();

  // Pad the day and month with leading zeros if needed
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let todayDate = year + "-" + month + "-" + day;

  // Set the current date in the HTML
  document.getElementById("currentDate").textContent = todayDate;
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed.");

  // Generate a random 8-digit alphanumeric invoice number
  function generateRandomInvoiceNumber() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let invoiceNumber = "";

    for (let i = 0; i < 8; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      invoiceNumber += characters.charAt(randomIndex);
    }

    return invoiceNumber;
  }

  // Set the generated invoice number in the HTML
  document.getElementById("generatedInvoiceNumber").textContent =
    generateRandomInvoiceNumber();
});

function printPage() {
  window.print();
}
