import './style.scss';
// Using it this way imports jquery from the node modules folder insted of the browser. 
import $ from 'jquery';

//const $ = jQuery;


$(document).on("click", ".wp-block-mytheme-blocks-secondblock", () => {
	alert(true)
})