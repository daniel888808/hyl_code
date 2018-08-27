<?php
	require_once 'include/php/event_message.php';
	require_once 'include/php/action_listener.php';
	require_once 'include/php/PDO_mysql.php';
	class do_repair_action implements action_listener{
		public function actionPerformed(event_message $g)
		{
			$return_value = "llllll";
            return $return_value;
		}
	}


?>