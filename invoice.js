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

// menu

function addMenuItem(menuItem) {
  const menuList = document.getElementById("menu-list");
  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu-item");
  menuItemDiv.innerHTML = `
      <img src="${menuItem.image}"  class="item-image">
      <div class="menu-item-info">
          <div class="menu-item-name">${menuItem.name}</div>
          <div class="menu-item-price">${menuItem.price}</div>
      </div>
  `;
  menuList.appendChild(menuItemDiv);
}

// menu click

// Add click event listeners to menu items to update the item table
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((menuItemDiv) => {
    menuItemDiv.addEventListener("click", () => {
      const menuItemName =
        menuItemDiv.querySelector(".menu-item-name").textContent;
      const menuItem = menu.find((item) => item.name === menuItemName);
      if (menuItem) {
        updateItemTable(menuItem);
      }
    });
  });
});

// Function to update the item table based on the selected menu item
function updateItemTable(menuItem) {
  let table = document.getElementById("item-table");
  let rows = table.getElementsByTagName("tr");

  // Find the row where the item name matches the menu item name
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let itemName = cells[1].textContent;
    if (itemName === menuItem.name) {
      // Increment the quantity and update the amount
      let quantityCell = cells[2];
      let amountCell = cells[3];
      let quantity = parseInt(quantityCell.textContent) || 0;
      let itemPrice = parseFloat(menuItem.price.replace("$", ""));
      quantity++;
      quantityCell.textContent = quantity;
      amountCell.textContent = (quantity * itemPrice).toFixed(2);

      // Update the total amount
      updateTotal();
      break; // No need to check further rows
    }
  }
}

const menu = [
  {
    name: "Cappuccino",
    price: "$3.99",
    description:
      "A classic Italian coffee made with espresso and steamed milk, topped with foamed milk.",
    image: "https://cdn-icons-png.flaticon.com/512/1318/1318650.png",
  },
  {
    name: "Espresso",
    price: "$2.49",
    description:
      "A strong and concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
    image: "https://cdn-icons-png.flaticon.com/512/4857/4857193.png",
  },
  {
    name: "Latte",
    price: "$4.49",
    description:
      "A creamy coffee made with espresso and steamed milk, usually topped with a small amount of foam.",
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/64/65/coffee-latte-drink-cup-flat-icon-for-cafe-vector-13666465.jpg",
  },
  {
    name: "Mocha",
    price: "$4.99",
    description:
      "A delicious blend of espresso, steamed milk, chocolate, and whipped cream.",
    image: "https://cdn-icons-png.flaticon.com/512/263/263736.png",
  },
  {
    name: "Iced Coffee",
    price: "$3.49",
    description:
      "Chilled coffee served over ice, often sweetened and with a splash of milk.",
    image: "https://cdn-icons-png.flaticon.com/512/5847/5847649.png",
  },
  {
    name: "Chai Latte",
    price: "$4.99",
    description:
      "A soothing and aromatic blend of spiced tea and steamed milk.",
    image: "https://cdn-icons-png.flaticon.com/512/3694/3694892.png",
  },
  {
    name: "Caramel Macchiato",
    price: "$4.79",
    description:
      "Espresso with steamed milk, vanilla syrup, and caramel drizzle.",
    image:
      "https://media.istockphoto.com/id/1221180985/vector/stained-caramel.jpg?s=612x612&w=0&k=20&c=gbVuuckmlXNZEJtxknP5EJOKbkIYgNXjCwPVx-aAkVs=",
  },
  {
    name: "Iced Tea",
    price: "$2.99",
    description:
      "Refreshing iced tea served with lemon and optional sweeteners.",
    image:
      "https://thumbs.dreamstime.com/z/ice-tea-lemon-cube-cartoon-style-vector-illustration-isolated-white-background-design-banner-poster-card-print-181988579.jpg",
  },
  {
    name: "Croissant",
    price: "$2.99",
    description:
      "A buttery and flaky pastry, perfect for a quick breakfast or snack.",
    image:
      "https://img.freepik.com/free-vector/isolated-delicious-french-chocolate-croissant_1308-120836.jpg",
  },
  {
    name: "Bagel with Cream Cheese",
    price: "$3.49",
    description:
      "A classic breakfast option with a choice of plain or flavored cream cheese.",
    image:
      "https://media.gettyimages.com/id/1283627446/vector/bagel-with-cream-cheese-icon-on-transparent-background.jpg?s=1024x1024&w=gi&k=20&c=SdCW9vVOgBZowCCQ6iDxg4GijumYIcHkAcBSCEbui8E=",
  },
  {
    name: "Fruit Parfait",
    price: "$4.99",
    description:
      "Layers of yogurt, fresh fruit, and granola for a healthy and delicious treat.",
    image:
      "https://media.istockphoto.com/id/1156142344/vector/parfait-dessert-with-berries-icon-cartoon-vector-illustration-series-of-food-and-drink-and.jpg?s=612x612&w=0&k=20&c=wmLaAW_BTGskpgNswRPDszvaDKbXSe8tKFA3D0BNvQw=",
  },
  {
    name: "Egg and Cheese Breakfast Sandwich",
    price: "$5.49",
    description:
      "Scrambled eggs and melted cheese on a toasted bun, served with your choice of toppings.",
    image:
      "https://img.freepik.com/premium-vector/sandwich-with-cheese-tomato-lettuce-end-egg-fresh-nutritious-breakfast-food-design-element-menu-cafe-restaurant-vector-illustration-isolated-white-background_223337-9497.jpg",
  },
  {
    name: "Avocado Toast",
    price: "$6.99",
    description:
      "Sliced avocado on toasted artisan bread, garnished with seasonings and optional toppings.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1693526737/display_1500/stock-vector-cute-happy-funny-toast-and-avocado-vector-cartoon-character-illustration-icon-design-isolated-on-1693526737.jpg",
  },
  {
    name: "Caprese Panini",
    price: "$7.99",
    description:
      "A grilled sandwich with fresh mozzarella, tomatoes, basil, and balsamic glaze.",
    image:
      "https://media.istockphoto.com/id/1022963120/photo/panini-sandwich-with-mozzarella.jpg?s=612x612&w=0&k=20&c=Bj6C0fdcPUfNcU1sBc7T_1cGs2rPQfA_IV-pvHS9R2U=",
  },
  {
    name: "Chicken Caesar Wrap",
    price: "$8.49",
    description:
      "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing in a wrap.",
    image:
      "https://img.freepik.com/premium-photo/photo-chicken-caesar-wrap_933496-17793.jpg",
  },
  {
    name: "Vegetarian Quiche",
    price: "$6.99",
    description:
      "A savory pie filled with a medley of vegetables, cheese, and a flaky crust.",
    image:
      "https://media.istockphoto.com/id/1370689985/vector/collection-of-cakes-pies-and-desserts-for-all-letters-of-alphabet-letter-q-quiche-french.jpg?s=612x612&w=0&k=20&c=A0k8oSLB8G3POw9QLrmFAaYRJybRdUq611D55XH5eX8=",
  },
  {
    name: "Chocolate Chip Cookie",
    price: "$2.49",
    description:
      "A soft and chewy chocolate chip cookie, a sweet treat to enjoy with your coffee.",
    image:
      "https://cdn5.vectorstock.com/i/1000x1000/45/04/chocolate-chips-cookie-icon-vector-17154504.jpg",
  },
  {
    name: "Blueberry Muffin",
    price: "$2.99",
    description:
      "A moist and tender blueberry muffin, bursting with blueberry goodness.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2311616825/display_1500/stock-vector-fresh-blueberry-muffin-with-creamy-chocolate-icing-icon-isolated-2311616825.jpg",
  },
  {
    name: "Fruit Smoothie",
    price: "$4.49",
    description:
      "A refreshing blend of fresh fruits, yogurt, and a touch of honey.",
    image:
      "https://img.freepik.com/free-vector/five-organic-smoothies-icons_603843-1607.jpg",
  },
  {
    name: "Iced Caramel Latte",
    price: "$5.49",
    description: "Iced latte with caramel syrup and a swirl of whipped cream.",
    image:
      "https://img.freepik.com/premium-photo/frappe-drink-with-caramel-nuts-isolated-white-background-ai-generative_590796-2991.jpg?w=2000",
  },
];

menu.forEach(addMenuItem);
