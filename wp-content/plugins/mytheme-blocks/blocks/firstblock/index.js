// wp.block

const registerBlockType = wp.blocks.registerBlockType;
const __ = wp.i18n.__;
const el = wp.element.createElement;

registerBlockType('mytheme-blocks/firstblock', {
	title: __('First Block', 'mytheme-blocks'),
	description: __('My first block', 'mytheme-blocks'),
	category:'layout',
	edit: function(){
		return el('p', null, 'Editor');
	},
	save: function(){
		return el('p', null, 'Saved Content');
	}
})