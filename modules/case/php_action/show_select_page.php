<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class show_select_page implements action_listener{
        public function actionPerformed(event_message $em) {
            $user_id=$_SESSION['userid'];
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * FROM `case_profile` A WHERE A.household_user_id=$user_id";
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
?>