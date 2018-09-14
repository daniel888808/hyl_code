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
        console.log("in_u_update");
        //$('#' + this.position_id).html(json_str);
        var json_str = xhttp.responseText;
        //var obj = JSON.parse(json_str);
        console.log(json_str);
        document.getElementById(this.position_id).innerHTML = json_str;
    }
    ajax_error(msg) {
        console.log(msg.status);
    }
}
