<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class do_select_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $user=$_SESSION['userid'];
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * FROM `case_profile` A JOIN `notice` B ON B.case_profile_id=A.id JOIN household_user C ON A.household_user_id=C.id JOIN user_profile D ON C.user_profile_id=D.id WHERE D.id=$user";
            $post = $em->getPost();
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
                if($ds){
                $return_value['status_num'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set'] = $ds;
                }else{
                $return_value['status_num'] = -1;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set'] = $ds;
                }
            }
            else{
                $return_value['status_num'] = -2;
                $return_value['status_message'] = 'Execute error';
            }
            return json_encode($return_value);
        }        
    }
?>