<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Find the fastest path</title>

        <!-- Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
        <!-- /Bootstrap -->

		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"> <!-- Font awesome -->
        <link rel="stylesheet" type="text/css" href="<?= base_url(); ?>css/styling.css">

        <script src="<?= base_url(); ?>js/general-variables.js" defer></script>
        <script src="<?= base_url(); ?>js/navigation-calls.js" defer></script>
        <script src="<?= base_url(); ?>js/nodes.js" defer></script>


        <!--<script src="<?= base_url(); ?>js/starting-functionality.js" defer></script> <!-- Add the attributes / onclicks to let the page work -->
        <!--<script src="<?= base_url(); ?>js/board-styling.js"></script> <!-- Functions to change the styling for the board -->
        <!-- <script src="<?= base_url(); ?>js/call-pathfinding.js"></script> <!-- Functions to get the path  -->
        
        


        <!-- Pathfinding algorithm codes -->
        <script src="<?= base_url(); ?>js/bfs.js"></script>
        <script src="<?= base_url(); ?>js/dfs.js"></script>
        <!-- /Pathfinding algorithm codes -->
    </head>
    <body>