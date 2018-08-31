class notice_show_time_confirmation_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = false;
    }
    showResult() {
        var str = ``;


        document.getElementById(this.position_id).innerHTML = str;
    }
}
