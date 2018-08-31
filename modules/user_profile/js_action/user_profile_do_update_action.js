class user_profile_do_update_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        this.addArgsbyid('name');
        this.addArgsbyid('cp');
        this.addArgsbyid('address');
        this.addArgsbyid('phonenum');
        this.addArgsbyid('email');
        this.addArgsbyid('password');
    }
    ajax_success(xhttp) {
        //$('#' + this.position_id).html(json_str);
        var json_str = xhttp.responseText;
        var obj = JSON.parse(json_str);
        console.log(obj['status_code']);
    }
    ajax_error(msg) {
        console.log(msg.status);
    }
}
