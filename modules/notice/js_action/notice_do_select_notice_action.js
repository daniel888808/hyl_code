class notice_do_select_notice_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
    }

    ajax_success(xhttp) {
        var data = null;
        var notices = JSON.parse(xhttp.responseText);
        try {
            if (notices['status_num'] === 0) {
                for (var notice in notices['data_set']) {
                    //console.log(notices['data_set'][notice]);
                    if (notices['data_set'][notice]['type'] === "finish") {
                        data = data + `
                   <div class="list-group font-weight-bold pt-0">
                       <a onclick="(new notice_show_repair_completed_page('notice','show_repair_completed_page','body')).run()">
                           <div class="list-group-item text-dark py-2 list-group-item-warning">${notices['data_set'][notice]['content']} 維修單完成 2018/03/01</div>
                       </a>     
                   </div>`;
                    }

                    else if (notices['data_set'][notice]['type'] === "confirm") {
                        data = data + `
                   <div class="list-group font-weight-bold pt-0">
                       <a onclick="(new notice_show_time_confirmation_page('notice','show_time_confirmation_page','body')).run()">
                           <div class="list-group-item text-dark py-2 list-group-item-success">${notices['data_set'][notice]['content']} 時間確認 2018/03/01</div>
                       </a>     
                   </div>`;
                    }

                    else if (notices['data_set'][notice]['type'] === "cancel") {
                        data = data + `
                   <div class="list-group font-weight-bold pt-0">
                       <a onclick="(new notice_show_time_confirmation_page('notice','show_time_confirmation_page','body')).run()">
                           <div class="list-group-item text-white py-2 list-group-item- red accent-4s">${notices['data_set'][notice]['content']} 取消維修單 2018/03/01</div>
                       </a>     
                   </div>`;
                    }
                    else {
                        data = '查無值...';
                    }
                }
                data = data.slice(5);
            }
            else {
                data = "<h1>此帳號無維修通知</h1>";
            }
        }
        catch (e) {
            console.log(e);
        }
        //         var str = `
        // </div>
        // <!-- /.通知 -->
        // <div class="tab-pane fade" id="notice" role="tabpanel">
        //     <div class="my-0 py-0 pt-3">
        //         <select class="mdb-select">
        //             <option value="" disabled selected>全部顯示</option>
        //             <option value="1">全部顯示</option>
        //             <option value="2">完成通知</option>
        //             <option value="3">時間通知</option>
        //         </select>
        //     </div>
        //     
        //   `;
        document.getElementById(this.position_id).innerHTML = data;
    }
    ajax_error(xhttp) {
        // console.log(xhttp.responseText);
    }
}
