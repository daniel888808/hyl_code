class case_do_select_action extends ActionHandler {
    constructor(module, action, position_id, case_id) {
        super(module, action);
        this.position_id = position_id;
        this.case_id = case_id;

    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'do_select_action';
        console.log(this.case_id);
        this.addArgs('cid', this.case_id)
        // this.addArgs('where_statement', 'id = ' + value);
    }
    ajax_success(json_str) {
        try {
            var json_str = json_str.responseText;
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 0) {
                var ds = obj['data_set'];
                console.log(json_str);
                var content = `
               <header>
                            <!-- Navbar -->
                            <nav class="navbar bgdark text-white">
                                <div onclick="(new home_show_home_page('home','show_home_page','body','record')).run()">
                                <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
                                </div>
                                <span class="h6 m-auto pr-3 py-2"> 維修單</span>
                            </nav>
                            <!-- /.Navbar -->
                            </header>
                  <!-- /Start your project here-->
    <div class="container mt-3">
        <div class="form-group">
            <form>
                <!--Textarea with icon prefix-->
                <div class="form-group">
                    <label for="exampleFormControlTextarea2">你的狀況</label>
                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3">` + ds[0]['content'] + `</textarea>
                </div>
                <div class="md-form my-0">
                    <label for="textareaPrefix" class="mb-0">你的狀況</label>
                    <i class="fa fa-pencil prefix"></i>`;
                content += `
                    <textarea type="text" id="textareaPrefix" class="form-control md-textarea my-0" rows="3" readonly="readonly">` + ds[0]['content'] + `</textarea>
				</div>
						      <label for="time" class="mt-1">報修日期:</label>
						`;
                content += "<div>日期:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='" + st_time_to_min(ds[0]['start_datetime']) + "'></div>";
                content += "<div>維修內容:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='" + ds[0]['title'] + "'></div>";
                if (ds[0]['status'] == "finish") {
                    content += "<div>維修狀態追蹤:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='完成'></div>";
                }
                else {
                    content += "<div>維修狀態追蹤:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='未完成'></div>";
                }
                if (obj['check_apply'] == "no") {
                    content += `
                        <div class="row my-0" id="showBlock">
                            <label for="time" class="font-weight-bold col-12">請輸入您方便的時間<a type="button" id="addbtn" value="addItem"><i class="fa fa-plus" aria-hidden="true"></i></a></label>
                            <div class="col-4">
                                <input type="date" class="form-control" id="date1" placeholder="Enter month">
                            </div>
                            <div class="col-4" >
                                <input placeholder="起始時間" type="text" id="input_starttime1-1" class="form-control timepicker">
                            </div>
                            <div class="col-4">
                                <input placeholder="結束時間" type="text" id="input_starttime1-2" class="form-control timepicker">
                            </div>
                                                
                        </div>
                        </br>
                    <div id="timearea" class="row"></div>
                    <div id="time_err"></div>
                    `;
                }
                if (ds[0]['rank'] == null) {
                    content += ``;
                }
                else {
                    content += `<div>評分:</div>
                        <div>
                            <!--沒辦法就暫時用這個簡單版的 -->
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <!--沒辦法就暫時用這個簡單版的 -->
                        </div>
                            `;

                }
                content += `
                    <a onclick="(new home_show_home_page('home','show_home_page','body','record')).run()"><button type="button" class="btn btn-primary mt-3">確定</button></a>
                    </form>
                    </div>
                    </div>
                           `;

                $('#' + this.position_id).html(content);

                function st_time_to_min(tt1) {
                    var tt3;
                    tt3 = tt1.split(" ")[0].split("-")[0] + "/" + tt1.split(" ")[0].split("-")[1] + "/" + tt1.split(" ")[0].split("-")[2] + " " + tt1.split(" ")[1].split(":")[0] + ":" + tt1.split(" ")[1].split(":")[1];
                    return tt3;
                };
                $(document).ready(function() {
                    function checktime(time1, time2) {
                        if (time1 > time2) {
                            for (var i = 1; i < txtna; i++) {}
                            document.getElementById("time_err").innerHTML = `<p class="red-text">時間選擇有誤</p>`;
                        }
                        else {
                            document.getElementById("time_err").innerHTML = `<p class="red-text">時間ok</p>`;
                        }

                    }
                    //remove div

                    function deltxt(id) {
                        $("div" + id).remove();
                        txtna = txtna - 1;
                        console.log(txtna);
                    }

                    $("#btnd2").click(function() {
                        $(div2).remove();
                        txtna = txtna - 1;
                        console.log(txtna);

                    });
                    $("#btnd3").click(function() {
                        $(div3).remove();
                        txtna = txtna - 1;
                        console.log(txtna);

                    });

                    $("#addbtn").click(function() {
                        var n1 = txtna;
                        if (n1 < 3) {
                            var x = document.getElementById("div2");
                            var y = document.getElementById("div3");
                            if (x) { txtId = 3; }
                            else if (y) { txtId = 2; }
                            else { txtId = 2; }
                            //$("#timearea").append('<div class="row" id="div' + txtId + '"><div class="col-1"></div><div class="col-3 p-0"><input type="date" class="form-control" name="test[]" id="date' + txtId + '" placeholder="Enter month" /></div><div class="col-3 p-0"><input type="text" name="test[]" class="form-control timepicker" id="input_starttime' + txtId + '-1" placeholder="起始時間"/></div><div class="col-3 p-0"><input type="text" class="form-control timepicker" name="test[]"id="input_starttime' + txtId + '-2" placeholder="結束時間"/></div><div class="col-1 p-0 w-32"><button type="button" id="btnd' + txtId + '" class="btn btn-primary m-0 p-0"  style="height:38px;width:38px;" value="del">X</button></div></br>');
                            $("#timearea").append(`<div class="row" id="div` + txtId + `">
                                                        <div class="col-4 p-0">
                                                            <input type="date" class="form-control" name="test[]" id="date` + txtId + `" placeholder="Enter month" />
                                                        </div>
                                                        <div class="col-4 p-0">
                                                            <input type="text" name="test[]" class="form-control timepicker" id="input_starttime` + txtId + `-1" placeholder="起始時間"/>
                                                        </div>
                                                        <div class="col-4 p-0 row">
                                                            <div class="col-10">
                                                                <input type="text" class="form-control timepicker" name="test[]" id="input_starttime` + txtId + `-2" placeholder="結束時間"/>
                                                            </div>
                                                            <div class="col-2 p-0 w-32">
                                                                <button type="button" id="btnd` + txtId + `" class="btn btn-primary m-0 p-0"  style="height:38px;width:38px;" value="del">
                                                                    ×
                                                                </button>
                                                            </div>
                                                        </div></br>`);
                            $('#input_starttime' + txtId + '-1').pickatime({});
                            $('#input_starttime' + txtId + '-2').pickatime({});
                            txtna = txtna + 1;
                        }
                        else {
                            document.getElementById("time_err").innerHTML = `<p class="red-text">只能選三個時間喔</p>`;
                        }
                    });
                });
            }

            else {
                $('#' + this.position_id).html(obj['status_message']);
            }
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
