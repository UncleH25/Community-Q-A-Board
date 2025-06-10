<?php
//Database connection helper for Community Q&A Board

require_once __DIR__ . '/config.php';

//Returns the PDO instance from config.php
function getPDO() {
    global $pdo;
    return $pdo;
}
?>