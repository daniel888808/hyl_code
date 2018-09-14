<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    require_once 'include/php/model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class building_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function get_user_construction_project($construction_project_id){//取得用戶之建案名稱
            $sql ="SELECT name FROM `construction_project` WHERE construction_project.id=$construction_project_id";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                $return_value = $result;
            }
            return $return_value;

        }
    }
    
?>
