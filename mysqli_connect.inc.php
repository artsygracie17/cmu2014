<?php
   
  // ***** mysqli_connect.inc.php *****
  // ***** Script 7.1 *****
  // Developed by Larry E. Ullman
  // MySQL: Visual QuickStart Guide
  // SECOND EDITION
  // Contact: mysql2@DMCinsights.com
  // Created: February 15, 2006
  // Last modified: February 15, 2006
  // This file contains the database access information
  // for the accounting database.
  // This file also establishes a connection to MySQL
  // and selects the accounting database.
  
  // Database-specific information:
  DEFINE ('DB_USER', 'username');
  DEFINE ('DB_PASSWORD', 'password');
  DEFINE ('DB_HOST', 'localhost');
  DEFINE ('DB_NAME', 'accounting');
  
  //Connect to MySQL and select the database:
  $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  ?>