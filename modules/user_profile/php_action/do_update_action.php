<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class do_update_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $post = $em->getPost();
            $id = $post['phonenum'];
            $acc= $post['email'];
            $password = $post['password'];
            $conn = PDO_mysql::getConnection();
            $sql = "UPDATE user_profile SET acc=:acc, name=:name, email=:email, pw=:pw, tel=:tel, addr=:addr WHERE id=:id";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array(':name'=>$name, ':email'=>$email, ':pw'=>$password, ':tel'=>$tel ,':id'=>$id));
            if($result) 
                $msg = '更新成功';
            else
                $msg = "更新失敗";
            return $msg;
        }    
    }
    
?>
