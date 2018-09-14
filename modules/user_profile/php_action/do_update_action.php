<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    require_once 'modules/user_profile/php_action/user_profile_model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class do_update_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $post = $em->getPost();
            $name = $post['name'];
            $cp = $post['cp'];
            $address = $post['address'];
            $id = $post['phonenum'];
            $acc= $post['email'];
            $password = $post['password'];
            if(isset($_SESSION['useracc'])){
			$user=$_SESSION['userid'];
		    }
            $user_model = new user_profile_model();
            $user_model->update_user_info($name,$id,$acc,$password,$user);
            // $conn = PDO_mysql::getConnection();
            // $sql = "UPDATE user_profile SET acc=:acc, name=:name, email=:email, pw=:pw, tel=:tel, addr=:addr WHERE id=:id";
            // $stmt = $conn->prepare($sql);
            // $result = $stmt->execute(array(':name'=>$name, ':email'=>$email, ':pw'=>$password, ':tel'=>$tel ,':id'=>$id));
            if($result) {
                $msg = '更新成功';
                $return_value['status_code']=0;
            }
            else{
                $msg = "更新失敗";
                $return_value['status_code']=2;
            }
            return $return_value;
        }
    }
    
?>
