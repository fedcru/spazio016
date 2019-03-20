<?php
function my_theme_enqueue_styles() {

    $parent_style = 'frontend-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

    // wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' , 99 );

// function get_enqueued_scripts () {
//     $scripts = wp_scripts();
//     debug( array_keys( $scripts->groups ) );
// }
// add_action( 'wp_head', 'get_enqueued_scripts' );

// function get_enqueued_styles () {
//   global $wp_styles;
//   foreach( $wp_styles->queue as $style ) :
//       debug($style);
//   endforeach;
// }
// add_action( 'wp_head', 'get_enqueued_styles' );

function remove_some_styles() {
  wp_dequeue_style( 'elementor-animations' );
  wp_dequeue_style( 'elementor-frontend' );
  wp_deregister_style( 'elementor-frontend' );



  if (!is_admin()) {
    // wp_dequeue_style( 'elementor-icons' );
    // wp_dequeue_style( 'font-awesome' );
    // wp_dequeue_style( 'elementor-frontend' );
    // wp_deregister_style( 'elementor-frontend' );
    // wp_dequeue_style( 'elementor-animations' );
    // wp_dequeue_style( 'elementor-icons' );
    // wp_dequeue_style( 'font-awesome' );
    // wp_dequeue_style( 'elementor-frontend' );
    // wp_deregister_style( 'elementor-frontend' );
  }
}
add_action( 'wp_print_styles', 'remove_some_styles', 100 );

add_action( 'elementor/frontend/after_enqueue_styles', function() {



}, 20);
