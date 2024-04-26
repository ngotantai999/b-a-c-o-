

var addItemId = 0;
function addtocarl(item){
    addItemId += 1;
    var selectedIem = document.createElement('div');
    selectedIem.classList.add('cartImg');
    selectedIem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var cartItems = document.getElementById(title);
    selectedIem.append(img);
    cartItems.append(selectedIem);
}