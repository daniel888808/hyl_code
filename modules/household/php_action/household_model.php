<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    require_once 'include/php/model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class household_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function get_something_from_household_user($something,$userid){//從household_user取戶ID
            $sql ="SELECT $something FROM `household_user` WHERE user_profile_id = $userid";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                $return_value = $result;
            }
            return $return_value;

        }
        public function get_construction_project_from_household_profile($household_id){//從household_profile(戶)取建案ID
            $sql ="SELECT construction_project_id FROM `household_profile` WHERE construction_project_id=$household_id";
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
