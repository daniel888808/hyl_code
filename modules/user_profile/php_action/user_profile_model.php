<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    require_once 'include/php/model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class user_profile_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function get_user_info($user){
            $sql ="SELECT * FROM `user_profile` JOIN household_user on user_profile.id=household_user.user_profile_id JOIN household_profile ON household_user.household_profile_id=household_profile.id JOIN construction_project ON household_profile.construction_project_id=construction_project.id WHERE user_profile.id=$user";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                $return_value['data_set'] = $result;
            }
            return $return_value;
            // $sql ='SELECT * FROM `user_profile` JOIN household_user on user_profile.id=household_user.user_profile_id JOIN household_profile ON household_user.household_profile_id=household_profile.id JOIN construction_project ON household_profile.construction_project_id=construction_project.id WHERE user_profile.account=:user';
            // $stmt = $conn->prepare($sql);
            // $stmt->execute(array(':user'=>$user));
            // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // if ($result != null) {
            //     $return_value['data_set'] = $result;
            // }
            //return $return_value;
        }
            // $conn = PDO_mysql::getConnection();
            // $sql = "SELECT * FROM `repair_type`";
            // $post = $em->getPost();
            // $stmt = $conn->prepare($sql);
            // $result = $stmt->execute();
            // if($result){
            //     $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
?>
