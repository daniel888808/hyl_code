<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class show_select_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $user_id=$_SESSION['user'];
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * FROM `case_profile` A JOIN `repair_type` B ON A.repair_type_id=B.id";
            $post = $em->getPost();
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set'] = $ds;
                $return_value['sql'] = $sql;
            }
            
            else{
                $return_value['status_code'] = -1;
                $return_value['status_message'] = '最近沒有維修紀錄';
                $return_value['sql'] = $sql;
            }
            
            return json_encode($return_value);
        }        
    }

//SELECT * FROM `case_profile` A JOIN `notice` B ON B.case_profile_id=A.id JOIN household_user C ON A.household_user_id=C.id JOIN user_profile D ON C.user_profile_id=D.id WHERE D.id=$user_id
//SELECT * FROM `case_profile` A JOIN `repair_type` B ON A.repair_type_id=B.id
?>

