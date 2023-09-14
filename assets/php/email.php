<?php
try{
            $para = "teste@lucascassiano.dev.br";
			$corpo = "Nome: Lucas\r\n"."Mensagem: \r\n Deu certo";
			$cabecalho = "From: teste2@lucascassiano.dev.br"."\r\n"."Reply-To: lucasyoou@gmail.com\r\n"."X-Mailer: PHP/".phpversion();
			mail($para, $assunto, $corpo, $cabecalho);
}catch(Exception $e){
    exit($e->getMessage());
}
?>