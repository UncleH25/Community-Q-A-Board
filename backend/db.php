<?php
//Database connection helper for Community Q&A Board

require_once __DIR__ . '/config.php';

//Returns the PDO instance from config.php
function getPDO() {
    global $pdo;
    return $pdo;
}

//Creates the necessary tables if they do not exist
function createTables() {
    $pdo = getPDO();

    try {
        //Questions table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS questions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                body TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ");

        //Answers table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS answers (
                id INT AUTO_INCREMENT PRIMARY KEY,
                question_id INT NOT NULL,
                body TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
            )
        ");

        echo "Tables created successfully!";
    } catch (PDOException $e) {
        echo "Error creating tables: " . $e->getMessage();
    }
}

//Create tables
createTables();
?>