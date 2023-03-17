<?php
try{
  function getUtmParametersFromReferrer()
  {
      if (!isset($_SERVER['HTTP_REFERER'])) {
          return [];
      }

      $referrerUrl = $_SERVER['HTTP_REFERER'];
      $parsedUrl = parse_url($referrerUrl);

      if (!isset($parsedUrl['query'])) {
          return [];
      }

      parse_str($parsedUrl['query'], $queryParameters);

      $utmParameters = [];
      $utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

      foreach ($utmKeys as $utmKey) {
          if (isset($queryParameters[$utmKey])) {
              $utmParameters[$utmKey] = $queryParameters[$utmKey];
          }
      }

      return $utmParameters;
  }

  $utmParameters = getUtmParametersFromReferrer();

  $url = "https://cc.swr.work/lead"; //"https://swr-api.app/lead";
  $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRlc19pZCI6MzUsImlhdCI6MTY3OTA4NjgxNn0.GAY7-vf08ZfjGTVlkiDsCOKa-6Ci1pTnfmWRBIKMhaweyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRlc19pZCI6MzUsImlhdCI6MTY3OTA4NjgxNn0.GAY7-vf08ZfjGTVlkiDsCOKa-6Ci1pTnfmWRBIKMhaw";
  $nome = $_POST["nome"] . ' ' . $_POST["sobrenome"];
  $telefone = $_POST["tel"];
  $email = $_POST["email"];

  $utm_source = $utmParameters["utm_source"];
  $utm_campaign = $utmParameters["utm_campaign"];
  $utm_medium = $utmParameters["utm_medium"];
  $utm_content = $utmParameters["utm_content"];

  $data = [
      'token' => $token,
      'nome' => $nome,
      'telefone' => $telefone,
      'email' => $email,
    ];
    
  if (isset($utm_source)) {
    $data['utm_source'] = $utm_source;
  }
  if (isset($utm_campaign)) {
    $data['utm_campaign'] = $utm_campaign;
  }
  if (isset($utm_medium)) {
    $data['utm_medium'] = $utm_medium;
  }
  if (isset($utm_content)) {
    $data['utm_content'] = $utm_content;
  }

  //print_r($data);

  $postData = http_build_query($data);

  // Initialize cURL session
  $ch = curl_init($url);

  // Set cURL options
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
  curl_setopt($ch, CURLOPT_POST, true); // Set the request method to POST
  curl_setopt($ch, CURLOPT_POSTFIELDS, $postData); // Set the POST data
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Content-Type: application/x-www-form-urlencoded'
  ]);

  // Execute the cURL session and get the response
  $response = curl_exec($ch);

  $errorLogFile = __DIR__ . '/error.log';

  // Check for errors
  if ($response === false) {
      //echo "Error: " . curl_error($ch);
      $errorMessage = "Error: " . curl_error($ch) . "\n\n" . print_r($data, true);

      // Log the error message to the error log file
      error_log($errorMessage . PHP_EOL, 3, $errorLogFile);
  } else {
      // Decode the JSON response
      $responseJson = json_decode($response, true);

      // Do something with the response data
      //print_r($responseJson);
  }

  // Close the cURL session
  curl_close($ch);
} catch(Exception $e) {
  $errorLogFile = __DIR__ . '/error.log';

  $errorMessage = 'Caught exception: ' .  $e->getMessage() . "\n\n" . print_r($data, true);

  error_log($errorMessage . PHP_EOL, 3, $errorLogFile);
}

// Set the URL to redirect to
$redirectUrl = 'obrigado';

// Perform the redirect
header('Location: ' . $redirectUrl);
exit();
?>