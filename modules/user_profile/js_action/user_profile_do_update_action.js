class user_profile_do_update_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        this.addArgsById('name');
        this.addArgsById('cp');
        this.addArgsById('address');
        this.addArgsById('phonenum');
        this.addArgsById('email');
        this.addArgsById('password');
    }
    ajax_success(json_str) {
        $('#' + this.position_id).html(json_str);
    }
    ajax_error(msg) {
        console.log(msg.status);
    }
}
