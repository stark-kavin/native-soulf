var toast = new Notyf();

document.querySelector("select").addEventListener("change",function() {
    var container = this.parentNode;

    if(this.value == 1){
        container.querySelector("button.minus-btn").dataset.delete = true;
    }else{
        container.querySelector("button.minus-btn").dataset.delete = false;
    }
});

function changeCartItemQuantity(button,change) {
    var container = button.parentElement;
    var select = container.querySelector("select");
    var max = Number(select.dataset.max);

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
    
    if(select.value == 1){
        container.querySelector("button.minus-btn").dataset.delete = true;
    }else{
        container.querySelector("button.minus-btn").dataset.delete = false;
    }

}