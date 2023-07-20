<?php
  // Verifica se a solicitação é do tipo POST
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Configurações do banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ecommerce";

    // Dados do formulário
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $email = $_POST["email"];

    echo "<p>Nome: " . $name . "</p>";
    echo "<p>Telefone: " . $phone . "</p>";
    echo "<p>Endereco: " . $address . "</p>";
    echo "<p>Email: " . $email . "</p>";

    //Cria a conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica se houve algum erro na conexão
    if ($conn->connect_error) {
      die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Prepara a query SQL para inserir os dados no banco
    $sql = "INSERT INTO clientes (nome, telefone, endereco, email) VALUES ('$name', '$phone', '$address', '$email')";

    // Executa a query SQL
    if ($conn->query($sql) === TRUE) {
      echo "<p>Dados salvos com sucesso!</p>";
    } else {
      echo "<p>Ocorreu um erro ao salvar os dados: " . $conn->error . "</p>";
    }

    // Fecha a conexão com o banco de dados
    $conn->close();

  }

?>