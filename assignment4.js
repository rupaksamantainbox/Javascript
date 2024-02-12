//Question 1

// function Counter(){
//     let count = 0

//     return function(){
//         count ++
//         console.log("Count :"+count)
//     }
// }

// let myCounter = Counter()
// myCounter()
// myCounter()
// myCounter()


//Question 2

// const order = {
//     orderId : '1234',
//     productName : 'I phone 15',
//     quantity: 1
// }

// let {orderId,productName,quantity} = order

// console.log(orderId)
// console.log(productName)
// console.log(quantity)


//Question 3 

// function Cart(){
//     const items = ['Iphone 15','laptop','tshirt'];
//     return {
//             getCartItems : function(){
//             return items;
//         }
//     }
// }
// const myCart = Cart();
// console.log("Cart Items :",myCart.getCartItems())


//Question 4 

// function shoppingCart(){

//     const cartItems = [];
//     function itemIndexInCart(productID){
//         return cartItems.findIndex(item => item.id === productID);
//     }
//     return{
//         addItem : function(product){
//             const itemIndex = itemIndexInCart(product.id);

//             if(itemIndex !== -1){
//                 cartItems[itemIndex].quantity++;
//             }else{
//                 cartItems.push({id:product.id,name:product.name,price:product.price,quantity:1});
//             }
//         },
//         getCartItems : function(){
//             return cartItems;
//         }
//     };   
// }

// const cart = shoppingCart();
// console.log("Cart Items :",cart.getCartItems())

// const product1 = {id:1, name:"Iphone 15 pro max", price:150000}
// const product2 = {id:2, name:"S24 Ultra", price:159000}

// cart.addItem(product1)
// cart.addItem(product2)

// console.log("Cart Items :",cart.getCartItems())


//Question 5

// function shoppingCart(){

//     const cartItems = [];
//     function itemIndexInCart(productID){
//         return cartItems.findIndex(item => item.id === productID);
//     }
//     return{
//         addItem : function(product){
//             const itemIndex = itemIndexInCart(product.id);

//             if(itemIndex !== -1){
//                 cartItems[itemIndex].quantity++;
//             }else{
//                 cartItems.push({id:product.id,name:product.name,price:product.price,quantity:1});
//             }
//         },
//         getCartItems : function(){
//             return cartItems;
//         },
//         removeItem : function(productId){
//             const itemIndex = itemIndexInCart(productId);

//             if(itemIndex !== -1){
//                 cartItems.splice(itemIndex,1)
//             }
//         }
//     };   
// }

// const cart = shoppingCart();
// console.log("Cart Items :",cart.getCartItems())

// const product1 = {id:1, name:"Iphone 15 pro max", price:150000}
// const product2 = {id:2, name:"S24 Ultra", price:159000}

// cart.addItem(product1)
// cart.addItem(product2)

// console.log("Cart Items :",cart.getCartItems())

// cart.removeItem(2)

// console.log("Cart Items :",cart.getCartItems())


//Question 6

function createPlaylist(playlistName){
    let playlist = [];

    return{
        addSong : function (songname,artist){
            playlist.push({songname,artist});
        },
        listSongs : function (){
            if(playlist.length === 0){
                console.log(`${playlistName} is Empty.`);
            }else{
                console.log(`${playlistName} Playlist : ${playlist.map(song => `${song.songname} by ${song.artist}`).join(', ')}`);
            }
        }
    };
}

 function addSong(playlist,songname,artist){
     playlist.addSong(songname,artist);
 }
function listSongs(playlist){
    playlist.listSongs();
}

const myPlaylist = createPlaylist("My Fevourites")

addSong(myPlaylist,"song1","artist1")
addSong(myPlaylist,"song2","artist2")
addSong(myPlaylist,"song3","artist3")

listSongs(myPlaylist)