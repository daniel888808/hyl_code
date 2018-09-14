class case_show_select_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'show_select_action';
        // var value = $('input[name=id]:checked').val();
        // this.addArgs('where_statement', 'id = ' + value);
    }
    ajax_success(json_str) {}
    ajax_error(msg) {
        $('#' + this.position_id).html(msg.status);
    }
}
