// // on form submit link to user save to favorites
const addFavorite = async function(e) {
 await fetch('api/favorite', {
    method: 'POST',
    body: JSON.stringify({
     ...body, //not sure if this is right
    }),
    headers: { 'Content-Type': 'application/json' },
 });
 document.location.replace('/favorite');

};

document
    .querySelector('#addFav')
    .addEventListener('submit', addFavorite);

    //add an if not logged in dont show heart