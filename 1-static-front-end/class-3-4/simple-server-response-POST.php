<?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = $_POST["user"];
    $password = $_POST["password"];


    echo "<p>Nome: " . $user . "</p>";
    echo "<p>Password: " . $password . "</p>";

  } else {
    echo "<p>Nenhum valor recebido.</p>";
  }
  ?>
</body>
</html>