class repair_show_repair_page extends ActionHandler {
    constructor(module, action, position_id, repair_type, repair_id) {
        super(module, action);
        this.position_id = position_id;
        this.repair_type = repair_type;
        this.repair_id = repair_id;
    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'do_select_action';
    }
    ajax_success(json_str) {
        var txtId = 2;
        var txtna = 1;
        $(document).ready(function() {
            $("select").on("change", function() {
                var s = $("select[name='select1']").val();
                var r = s;
                console.log(r);
            });
            $("#progressbarTWInput").change(function() {
                $("#preview_progressbarTW_imgs").html(""); // 清除預覽
                readURL(this);
                // console.log(this);
            });

            function readURL(input) {
                var str = "";
                var imgtype = "";
                var gs = $("#progressbarTWInput").val(); //獲取圖片url
                // console.log(gs);
                var src = "";

                imgtype = gs.toLowerCase().split('.'); //截取圖片格式 png，jpg，是一個數組
                imgtype = imgtype[1]; //選取

                if (input.files && input.files.length >= 0) {
                    for (var i = 0; i < input.files.length; i++) {
                        var reader = new FileReader();
                        reader.readAsDataURL(input.files[i]);
                        reader.onload = function(e) {
                            src = e.target.result; //base64圖片
                            // str += "<img src='" + e.target.result + "'/>";
                            // $("#preview_progressbarTW_imgs").html(str); //預覽圖片
                            var img = $("<img width='300' height='200'>").attr('src', e.target.result);
                            $("#preview_progressbarTW_imgs").append(img);
                        }
                        console.log(src);

                        // $.ajax({

                        //     url: "module_dispatcher.php?module=" + this.module + "&action="
                        //     do_uploadphoto_action,
                        //     type: "post",
                        //     data: {
                        //         src: src,
                        //         imgtype: imgtype
                        //     },
                        //     success: function(data) {
                        //         console.log(data)
                        //     }

                        // })

                    }
                }
                else {
                    var noPictures = $("<p>目前沒有圖片</p>");
                    $("#preview_progressbarTW_imgs").append(noPictures);
                }
            }
            //add input block in showBlock
            function deltxt(id) {
                var di = "div" + id;
                $(di).detach();
                txtna = txtna - 1;
                console.log(txtna);
            }
        });
        try {
            var json_str = json_str.responseText;
            var obj = JSON.parse(json_str);
            // alert(obj['status_code']);
            if (obj['status_code'] === 0) {
                console.log(txtna);
                var ds = obj['data_set'];
                var x1 = document.getElementById("timearea");
                console.log(x1);
                var r = this.repair_type;
                if (r == 4) {
                    var str = `<div id ="pf1">pf1</div>`;
                }
                else {

                    var str = `<header>
                            <!-- Navbar -->
                            <nav class="navbar bgdark text-white">
                                <div onclick="(new home_show_home_page('home','show_home_page','body')).run()">
                                <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
                                </div>
                                <span class="h6 m-auto pr-3 py-2"> 維修單</span>
                            </nav>
                            <!-- /.Navbar -->
                            </header>   
                            <div class="container px-3 mt-2">
                                <div class="form-group">
                                    <form>
                                    <div class="row">
                                            <div class="col-4">
                                                <label class="font-weight-bold">維修類型:</label>
                                            </div>
                                            <div class="col-8 form-group">`;
                    str += '<select class="mdb-select" name="select1">';
                    for (var index in ds) {
                        if (ds[index]['name'] == this.repair_type) {
                            str += '<option value="' + ds[index]['id'] + '"  selected>' + ds[index]['namech'] + '</option>';

                        }
                        else {
                            str += '<option value="' + ds[index]['id'] + '">' + ds[index]['namech'] + '</option>';
                        }
                    }
                    str += '</select>';
                    str += `</div></div>
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
                    <div class="row">
                        <div class="col-4" >
                            <label class="font-weight-bold ">待修狀況:</label>
                        </div>
                        <div class="col-8" >
                            <input type="text" id="case_title" name="" length="30" style="border:1px solid #ced4da;border-radius:2px"/>
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="font-weight-bold ">說明:</label>
                        <div class="md-form mt-1 mb-3">
                            <i class="fa fa-pencil prefix grey-text mt-2"></i>
                            <textarea type="text" id="case_content" class="form-control md-textarea ml-4" rows="4"></textarea>
                        </div>
                    </div>
                                        <div class="col-12">
                                            <div class="md-form row">
                                               <input type="file" id="progressbarTWInput" accept="image/gif, image/jpeg, image/png" multiple/ >
                                               <div id="preview_progressbarTW_imgs" style="width:100%; height: 300px; overflow:scroll;">
                                                   <p>目前沒有圖片</p>
                                               </div>
                                            </div>
                                        </div>
                                       <button type="button"  class="btn btn-primary rounded" onclick="(new repair_do_repair_action('repair','do_repair_action','body')).run()">提交</button>
                                                                                   <!--(new repair_do_repair_action('repair','do_repair_action','body')).run()-->
                                    </form>
                                </div>
                            </div>
                            <script>
                                $(document).ready(function() {
                                    $('.mdb-select').material_select();
                                });
                        
                                var input = $('#manual-operations-input').pickatime({
                                    autoclose: true,
                                    'default': 'now'
                                });
                                
                                $('#check-minutes').click(function(e) {
                                    e.stopPropagation();
                                    input.pickatime('show').pickatime('toggleView', 'minutes');
                                });
                                $('#input_starttime1-1').pickatime({});
                                $('#input_starttime1-2').pickatime({});
                                $('#input_starttime2-1').pickatime({});
                                $('#input_starttime2-2').pickatime({});
                                $('#input_starttime3-1').pickatime({});
                                $('#input_starttime3-2').pickatime({});
                                
                            </script>
                                `;
                }
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
                $('#' + this.position_id).html(str);
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
        // document.getElementById(this.position_id).innerHTML = str;
        this.loadModuleScript(this.module, "do_repair_action");
    }
    ajax_error(msg) {}
}
