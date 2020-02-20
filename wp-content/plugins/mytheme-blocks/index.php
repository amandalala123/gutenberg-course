<?php 
/*
Plugin Name: My Theme Blocks
Plugin URI: https://amandagoodrick.com/
Description: Blocks for my theme
Version: 1
Author: Amanda Goodrick
Author URI: https://amandagoodrick.com/
*/

if(! defined('ABSPATH') ){
	exit;
}

function mytheme_blocks_register_block_type($block, $options = array()){
	register_block_type(
		'mytheme-blocks/' . $block,
		array_merge(
			array(
				'editor_script' => 'mytheme-blocks-editor-script',
				'editor_style' => 'mytheme-blocks-editor-style',
				'script' => 'mytheme-blocks-script',
				'style' => 'mytheme-blocks-style',
			),
			$options
		)
	);
}

function mytheme_blocks_register(){

	wp_register_script(
		'mytheme-blocks-editor-script',
		plugins_url('dist/editor.js', __FILE__),
		array('wp-blocks', 'wp-i18n', 'wp-element')
	);

	wp_register_script(
		'mytheme-blocks-script',
		plugins_url('dist/script.js', __FILE__),
		array('')
	);

	wp_register_style( 
		'mytheme-blocks-editor-style', 
		plugins_url('dist/editor.css', __FILE__), 
		array('wp-edit-blocks')
	);

	wp_register_style( 
		'mytheme-blocks-style', 
		plugins_url('dist/style.css', __FILE__), 
		array('')
	);


	mytheme_blocks_register_block_type('firstblock');
	mytheme_blocks_register_block_type('secondblock', array());


}

add_action('init', 'mytheme_blocks_register');