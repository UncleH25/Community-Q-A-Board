<?php
//Fetches all questions from the database and returns them as JSON

require_once __DIR__ . '/db.php';

//Set response header to JSON
header('Content-Type: application/json');

try {
    $pdo = getPDO();

    //Query to get all questions, newest first
    $stmt = $pdo->query("SELECT id, title, body, created_at FROM questions ORDER BY created_at DESC");
    $questions = $stmt->fetchAll();

    // Return questions as JSON
    echo json_encode([
        'success' => true,
        'questions' => $questions
    ]);
} catch (PDOException $e) {
    // Return error as JSON with HTTP 500 status
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to fetch questions: ' . $e->getMessage()
    ]);
}
?>