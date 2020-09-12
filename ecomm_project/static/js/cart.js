var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('ProductId:', productId, 'Action:', action)

         console.log('user:', user)
        if (user === 'AnonymousUser') {
            addCookieItem(productId, action)
        }else{
            updateUserOrder(productId, action)
        }
    })
}

function addCookieItem(productId, action){
    console.log('Not logged in')

    if(action == 'add') {
        if (cart[productId] == undefined){
            cart[productId] = {'quantity': 1}
        }else{
            cart[productId]['quantity'] += 1
        }
    }
    if(action == 'remove') {
       cart[productId]['quantity'] -= 1
       if(cart[productId]['quantity'] <= 0){
            console.log('Remove Item')
            delete cart[productId]
       }
    }
    console.log('Cart: ', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}

function updateUserOrder(productId, action){
    console.log('User is logged in, sending data...')

// to use the fetch API, call the url that you created
// to specify where you want to send the post data.
    var url = '/update_item/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId': productId, 'action': action})
    })

//A promise is a response you get after you send the data to the view
// (=> return response.json) helps turn the value to JSON data
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log('Data:', data)
        location.reload()
    });
}
