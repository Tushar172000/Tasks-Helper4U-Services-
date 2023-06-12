
<?php

// Retrieve form data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$dob = $_POST['dob'];

// Validate the form data
if (empty($name) || empty($email) || empty($address) || empty($phone) || empty($dob)) {
  // Handle validation failure and return an error response
  $response = array('success' => false, 'message' => 'All fields are required');
  echo json_encode($response);
  exit();
}

// Save the form data to the database
// Assuming you have set up a MySQL database connection
$servername = 'localhost';
$username = 'your_username';
$password = 'your_password';
$dbname = 'your_database';

// Create a new mysqli instance for database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
  // Handle database connection error and return an error response
  $response = array('success' => false, 'message' => 'Database connection error: ' . $conn->connect_error);
  echo json_encode($response);
  exit();
}

// Prepare and execute the SQL query
$stmt = $conn->prepare("INSERT INTO users (name, email, address, phone, dob) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $address, $phone, $dob);

if ($stmt->execute()) {
  // Handle success and return a success response
  $response = array('success' => true, 'message' => 'Form data saved successfully');
  echo json_encode($response);
} else {
  // Handle database error and return an error response
  $response = array('success' => false, 'message' => 'Error saving form data: ' . $stmt->error);
  echo json_encode($response);
}

// Close the database connection
$stmt->close();
$conn->close();

?>
