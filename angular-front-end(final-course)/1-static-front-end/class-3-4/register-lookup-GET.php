<?php

// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

// Verifica se o ID do cliente foi passado pela URL
if (isset($_GET['id'])) {
    // Obtém o ID do cliente da URL
    $clientID = $_GET['id'];

    // Cria a conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica se houve algum erro na conexão
    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Prepara a query SQL para obter os detalhes do cliente
    $sql = "SELECT * FROM clientes WHERE id = '$clientID'";

    // Executa a query SQL
    $result = $conn->query($sql);

    // Verifica se foram encontrados resultados
    if ($result->num_rows > 0) {
        // Exibe os detalhes do cliente
        $client = $result->fetch_assoc();
        echo "<h1>Detalhes do Cliente</h1>";
        echo "<p>ID: " . $client['id'] . "</p>";
        echo "<p>Nome: " . $client['nome'] . "</p>";
        echo "<p>Email: " . $client['email'] . "</p>";
        echo "<p>Telefone: " . $client['telefone'] . "</p>";
        // Exiba outros campos do cliente, se necessário
    } else {
        echo "<p>Nenhum cliente encontrado com o ID fornecido.</p>";
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
} else {
    echo "<p>ID do cliente não fornecido.</p>";
}

  ?>