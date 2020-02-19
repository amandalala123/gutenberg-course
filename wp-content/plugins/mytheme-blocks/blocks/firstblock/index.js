// wp.block

const registerBlockType = wp.blocks.registerBlockType;
const __ = wp.i18n.__;
const el = wp.element.createElement;

registerBlockType('mytheme-blocks/firstblock', {
	title: __('First Block', 'mytheme-blocks'),
	description: __('My first block', 'mytheme-blocks'),
	category:'layout',
	icon: {
		background: '#f03',
		foreground: '#fff',
		src: 'admin-network'
	},
	keywords: [__('photo', 'mytheme-blocks'), __('image', 'mytheme-blocks')],
	edit: function(){
		return el('p', null, 'Editor');
	},
	save: function(){
		return el('p', null, 'Saved Content');
	}
});