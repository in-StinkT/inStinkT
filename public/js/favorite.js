
// // on form submit link to user save to favorites
var addFavorite = async function(e) {
   let target = e.target;
   const prodID = document.querySelector('i').attributes[1].value
   console.log(target, "click working")
   let response = await fetch('/api/favorites', {
    method: 'POST',
    body: JSON.stringify({
         product_id: prodID,
    }),
    headers: { 'Content-Type': 'application/json' },
 });
 console.log(response);
//  document.location.replace('/favorites');
 
};

document.querySelector('.addFav').addEventListener('click', addFavorite);

   