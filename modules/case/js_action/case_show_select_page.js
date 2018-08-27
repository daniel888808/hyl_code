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
    ajax_success(json_str) {

        try {
            var json_str = json_str.responseText;
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 0) {
                var ds = obj['data_set'];
                var content = "";




                content += `
            <div class="container">
                <div class="row " id="min-h">
                    <div class="col-12 px-0">
                        <table class="table table-striped text-center mt-3">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-1 font-weight-bold h6">維修日期 </th>
                                    <th scope="col" class="py-1 font-weight-bold h6">維修事項</th>
                                    <th scope="col" class="py-1 font-weight-bold h6" style="width:120px">維修狀況</th>
                                </tr>
                            </thead>
                            <tshow_area>
                                <tr>
                                    <th class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">${ds[0]['start_datetime']} </a></th>
                                    <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">${ds[0]['title']} </a></td>
                                    <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">
                                        <i class = "fa fa-check light-blue-text" aria-hidden="true"></a></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">${ds[0]['start_datetime']}</th>
                                    <td class="py-1 fontsm">${ds[0]['title']}</td>
                                    <td class="py-1 fontsm">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></i>
                                    </td>
                                </tr>
                            </tshow_area>
                        </table>
                    </div>
                </div>
            </div>
 
               `;
                for (var i in ds) {
                    content += $ { ds[i]['title'] };

                }




                $('#' + this.position_id).html(content);

            }



            else {
                $('#' + this.position_id).html(obj['status_message']);
            }

            this.loadModuleScript("case", "do_select_action");
        }
        catch (e) {
            var msg = e + "<br>";
            msg += "JSON String: " + json_str;
            $('#' + this.position_id).html(msg);
        }

    }
    ajax_error(msg) {
        $('#' + this.position_id).html(msg.status);
    }
}
