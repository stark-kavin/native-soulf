selectValueChange(document.querySelector("#select-cart"));

function selectValueChange(select) {
    var container = select.parentNode;
    var sub_total = document.getElementById("sub_total");

    sub_total.innerHTML = Number(select.value) * 275;
    if(select.value == 1){
        container.querySelector("button.minus-btn").dataset.delete = true;
    }else{
        container.querySelector("button.minus-btn").dataset.delete = false;
    }
}

document.querySelector(".cart-page").addEventListener("click",function(e) {
    if(e.target == document.querySelector(".cart-page")){
        document.getElementById("close").checked = true
    }
})

function changeCartItemQuantity(button,change) {
    var container = button.parentElement;
    var select = container.querySelector("select");
    var max = Number(select.dataset.max);
    var toast = new Notyf();

    if(change<0){
        if(Number(select.value)<=1){
            if(window.confirm("Do want to remove item from cart?")){
                container.parentElement.parentElement.parentElement.style.display = "none"
                toast.success("Deleted The item in cart")
            }else{
                toast.success("No items are removed from cart")
            }
        }else{
            select.value = Number(select.value) - 1
        }
    }else{
        if(Number(select.value)>=max){
            toast.error("Reached Max Quantity")
        }else{
            select.value = Number(select.value) + 1
        }
    }

    selectValueChange(select)

}