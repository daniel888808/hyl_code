<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    require_once 'modules/user_profile/php_action/user_profile_model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class show_update_page implements action_listener{
        public function actionPerformed(event_message $em) {
            $post = $em->getPost();
            if(isset($_SESSION['useracc'])){
			$user=$_SESSION['userid'];
		    }
		    $get_user_info = new user_profile_model();
            $user_info = $get_user_info->get_user_info($user);
            $return_value['data_set']=$user_info['data_set'];
            if($user_info['data_set'] != null){
                $return_value['status_code']= 0;
            }else{
                $return_value['status_code']=2;
            }
            return json_encode($return_value);
        }    
    }
    
?>
