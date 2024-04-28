let iconcart = document.querySelector(".icon");
let amount = [];
let totalamount = document.querySelector(".totalamount");
let removeitem = document.querySelector(".removeitem");
const itemincart = document.querySelector(".itemsincart");

document.addEventListener("DOMContentLoaded", function () {
  let iconmain = document.querySelector(".iconmain");
  let body = document.querySelector("body");
  let close = document.querySelector(".close");

  iconmain.addEventListener("click", () => {
    body.classList.toggle("showcart");
    console.log("kirti");
  });
  close.addEventListener("click", () => {
    body.classList.toggle("showcart");
  });
});
let products = [];
fetch("product.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    products = data;
    console.log(products);
    console.log("products from then");
  })
  .catch(function (error) {
    console.log(error);
  });

const listCart = document.querySelector(".listcart ul");
listCart.style.paddingLeft = "0";
const item = document.createElement("div");

let count = 0;

function addToCart(product) {
  const existingItems = document.querySelectorAll(".item");
  let productFound = false;

  console.log("Product ID:", product.id);

  existingItems.forEach((existingItem) => {
    if (existingItem.id === String(product.id)) {
      const numjs = existingItem.querySelector(".num");
      incrementQuantity(numjs);
      productFound = true;
      // amount.push(product.price);
    }
  });

  if (!productFound) {
    console.log("Product not found in cart. Adding new item.");
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.id = product.id;
    listItem.innerHTML = `
            <div class="image">
                <img src="${product.image}" />
            </div>
            <div class="name">${product.name}</div>
            <div class="totalprice">$${product.price}</div>

            <div class="quantity">
                <span class="minus">-</span>
                <span class="num">1</span>
                <span class="plus">+</span>
            </div>
            <button class="removeicon" onclick="removeListItem(this)">

              
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 69 14"
class="svgIcon bin-top"
>
<g clip-path="url(#clip0_35_24)">
<path
  fill="black"
  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
></path>
</g>
<defs>
<clipPath id="clip0_35_24">
  <rect fill="white" height="15" width="71"></rect>
</clipPath>
</defs>
</svg>

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 69 57"
class="svgIcon bin-bottom"
>
<g clip-path="url(#clip0_35_22)">
<path
  fill="black"
  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
></path>
</g>
<defs>
<clipPath id="clip0_35_22">
  <rect fill="white" height="59" width="71"></rect>
</clipPath>
</defs>
</svg>
</button>


        `;

    const listCart = document.querySelector("ul");
    listCart.appendChild(listItem);

    const numjs = listItem.querySelector(".num");
    const pluss = listItem.querySelector(".plus");
    const minuss = listItem.querySelector(".minus");

    pluss.addEventListener("click", () => {
      incrementQuantity(numjs);
      updateItemCount();
      amount.push(product.price);
      console.log(amount);
      updateTotalAmount();
    });

    minuss.addEventListener("click", () => {
      if (parseInt(numjs.innerText) > 1) {
        decrementQuantity(numjs);
        updateItemCount();
        removePriceFromAmount(product.price); // Call a function to remove the price
        console.log(amount);
        updateTotalAmount();
      }
    });

    count++; // Increment count for new item
  }

  console.log("Number of existing items:", count);
  updateItemCount();
  amount.push(product.price);
  console.log(amount);
  updateTotalAmount();
}
function removePriceFromAmount(price) {
  const indexToRemove = amount.lastIndexOf(price);
  if (indexToRemove !== -1) {
    amount.splice(indexToRemove, 1);
  }
}

function incrementQuantity(numjs) {
  let num = parseInt(numjs.innerText);
  num++;
  numjs.innerText = num;
  count++;
}

function decrementQuantity(numjs) {
  let num = parseInt(numjs.innerText);
  if (num > 1) {
    num--;
    numjs.innerText = num;
    count--;
  }
}

function updateItemCount() {
  itemincart.innerText = count;
}

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".items");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.id;
      const product = products.find((prod) => prod.id === parseInt(id));
      addToCart(product);
    });
  });
});

//let price = 0;
function removeListItem(button) {
  // Find the parent li element of the button
  const listItem = button.closest("li");
  const priceElement = listItem.querySelector(".totalprice").innerText;
  const quantityElement = listItem.querySelector(".num").innerText;
  console.log(listItem);
  console.log(priceElement);
  let price = 0;
  let quantity = 1;

  // Extract the price and quantity
  if (priceElement) {
    price = parseFloat(priceElement.replace(/[^\d.]/g, ""));
  }
  if (quantityElement) {
    quantity = parseInt(quantityElement);
  }

  // Calculate the total price by multiplying price and quantity

  // Remove the li element from the ul element

  console.log(price);
  if (listItem) {
    listItem.remove();
    for (let i = 0; i < quantity; i++) {
      removePriceFromAmount(price);
    }
    console.log(amount);
    updateTotalAmount();

    console.log(quantity);

    count = count - quantity;
    updateItemCount();
    console.log("After Update");
  }
}
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  let listCart = document.querySelector(".listcart ul");
  listCart.innerHTML = "";
  count = 0;
  updateItemCount();
  amount.length = 0;
  updateTotalAmount();
});

function calculateTotalAmount() {
  let sum = 0;
  // Iterate over the amount array and sum up all the values
  for (let i = 0; i < amount.length; i++) {
    sum += amount[i];
  }
  return sum;
}

function updateTotalAmount() {
  let total = calculateTotalAmount();

  totalamount.innerText = total;
}

const removeButtons = document.querySelectorAll(".removeicon");

removeButtons.forEach(function (button) {
  button.onclick = removeListItem;
});
