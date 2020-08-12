<?php

  function deliver_rating($id) {
  
	switch($id){
		
		case 1:
		$resultado='1';
		break;
		
		case 2:
		$resultado='2';
		break;
		
		case 3:
		$resultado='3';
		break;
		
		case 4:
		$resultado='4';
		break;
		
		case 5:
		$resultado='5';
		break;
		
		default:
		 $resultado='';
		break;
		
	}
     
	echo  json_encode($resultado);
        
  }

  if(isset($_GET['id'])) {
	  
    $id = htmlspecialchars($_GET['id']);
    
    deliver_rating($id);

  }

?>
