class repair_do_repair_action extends ActionHandler {
    constructor(module, action, position_id, repair_type) {
        super(module, action);
        this.position_id = position_id;
        this.repair_type = repair_type;
    }
    prepareArgs() {
        var value1 = $("select[name='select1']").val(); //抓select的值
        this.addArgs('class', value1);
        this.addArgsbyid('id');
        this.addArgsbyid('location');
    }
    ajax_success(json_str) {
        var obj = JSON.parse(json_str);
        var msg = obj['status_message'];
        console.log(obj);

        if (obj['status_code'] === 0) {

        }
        else {

        }
    }
    ajax_error(xhttp) {
        $('#' + this.position_id).html(msg);
    }
}
