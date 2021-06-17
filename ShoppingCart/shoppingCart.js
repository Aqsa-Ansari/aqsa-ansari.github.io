class Item {
    constructor(id, name, amount, count, imgRef) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.count = count;
        this.imgRef = imgRef;
    }
}

let items = [
    new Item('id1', "Nutella", 15, 0, "img1_nutella.jpeg"),
    new Item('id2', "Eclairs", 5, 0, "img2_eclairs.jpeg"),
    new Item('id3', "Perk", 5, 0, "img3_perk.jpeg"),
    new Item('id4', "Cupcake", 7, 0, "img4_cupcake.jpeg"),
    new Item('id5', "Cream", 12, 0, "img5_footCream.jpeg"),
    new Item('id6', "Doughnut", 8, 0, "img6_doughnut.jpeg"),
    new Item('id7', "Chocolatto", 5, 0, "img7_chocolatto.jpeg"),
    new Item('id8', "M&Ms", 4, 0, "img8_mm.jpeg"),
];


function addItem(itemID) {
    let c = items.find(item => item.id === itemID).count;
    console.log(c);
    if (c == 0) {
        let elems = document.getElementById(itemID).children;
        let elem = elems[0].children;
        let el = elem[0].children;
        let e = el[0];
        e.classList.remove("d-none");

        let i = items.find(item => item.id === itemID);

        // TODO: add item to cart

        var cartRow = document.createElement('tr');
        var cartItems = document.getElementById("list");

        let newCartRow = `
        <td class="col-sm-6 col-md-3">
                   <div class="media">
                    <img class="media-object"src=${i.imgRef} style="width: 72px; height: 72px;"> 
                     <p class="cart-item-title">${i.name}</p>
                       </div>
                   </div>
                 </td>
                   <td class="col-sm-3 col-md-3" style="text-align: center">
                   <span class="qty">1</span>
                   <span class="d-inline-block minus" onclick='DQty();'>-</span>
                   <span class="d-inline-block plus" onclick='IQty();'>+</span>
                   <span class="d-inline-block delete"onclick='Dlete();'><i class="far fa-trash-alt"></i></span> 
                   </td>
                   <td class="col-sm-2 col-md-2 text-center price"><strong>${amount}</strong></td>
                    <td class="col-sm-2 col-md-2 text-center tpt" ><strong>${100}</strong></td>
                   <td class="col-sm-1 col-md-1"> `
    }

    cartRow.innerHTML = newCartRow;
    cartItems.append(cartRow);
    // updateTotalPrice()



    items.find(item => item.id === itemID).count = c + 1;
    // increase count in cart

}

function deleteItem(itemID) {
    let c = items.find(item => item.id === itemID).count;
    if (c > 0) {
        items.find(item => item.id === itemID).count = c - 1;
        if (items.find(item => item.id === itemID).count == 0) {
            let elems = document.getElementById(itemID).children;
            let elem = elems[0].children;
            let el = elem[0].children;
            let e = el[0];
            e.classList.add("d-none");
            //TODO: remove item from cart
        }
        else {
            //decrese count in cart
        }
    }
}

function deleteItemFromCart() {

}