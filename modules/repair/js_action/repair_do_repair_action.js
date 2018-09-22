class repair_do_repair_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;

    }
    prepareArgs() {
        this.php = true;
        //this.php_action = 'do_repair_action';
        var value1 = $("select[name='select1']").val(); //抓select的值
        this.addArgs('class', value1);
        //this.addArgsbyid('id');
        this.addArgsbyid('input_starttime1-1');
        this.addArgsbyid('input_starttime1-2');
        this.addArgsbyid('case_content');
        this.addArgsbyid('case_title');
        this.addArgsbyid('month1');

    }
    ajax_success(xhttp) {
        console.log(xhttp);
        var json_str = xhttp.responseText;
        var obj = JSON.parse(json_str);
        var msg = obj['status_message'];
        console.log(obj);
        console.log("id " + obj['case_id']);
        console.log("rid " + obj['repair_history_id']);

        if (obj['status_code'] === 0) {

        }
        else {

        }
    }
    ajax_error(xhttp) {

    }
}
