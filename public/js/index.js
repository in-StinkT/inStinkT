const $ = require('jquery');

const nextPageBtn = $('.nextPage');
const previousPageBtn = $('.previousPage');


if(nextPageBtn.attr('href')==='/product/page='){
    nextPageBtn.addClass('disabled');
}