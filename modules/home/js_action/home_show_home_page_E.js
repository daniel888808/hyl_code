class home_show_home_page_E extends ActionHandler {
    constructor(module, action, position_id, blank) {
        super(module, action);
        this.position_id = position_id;
        this.blank = blank;

    }
    prepareArgs() {
        this.php = true;
    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            var obj = JSON.parse(json_str);

            if (obj['status_code'] === 1) {
                (new news_do_select_action('news', 'do_select_action', 'news')).run();
                var str = `
                <header>
        <!-- Navbar -->
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg double-nav">
            <!-- SideNav slide-out button -->
            <div class="float-left">
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars"></i></a>
            </div>
            <!-- Breadcrumb-->
            <ul class="nav navbar-nav nav-flex-icons ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-gear fa-lg p-0" aria-hidden="true"></i> 設定
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="login.html">登出</a>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.Navbar -->
    </header>
    <!-- /.搜尋 -->
    <div class="tab-content px-1">
        <div class="tab-pane fade " id="search" role="tabpanel">
            <div class="container mt-4">
                <div class="fontsm">
                    <h4>搜尋</h4>
                    <div class="row">
                        <div class="form-check col-4">
                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap4" checked="checked">
                            <label class="form-check-label " for="radioWithGap4"><h4>案件</h4></label>
                        </div>

                        <div class="form-check col-4">
                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap5">
                            <label class="form-check-label" for="radioWithGap5"><h4>住戶</h4></label>
                        </div>
                        <div class="form-check col-4">
                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap6">
                            <label class="form-check-label" for="radioWithGap6"><h4>維修廠商</h4></label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            案名
                            <select class="mdb-select">
                    <option value="" disabled selected></option>
                    <option value="1">所有案名</option>
                    <option value="2">舞樂天</option>
                    <option value="3">世紀風華</option>
                    <option value="3">JIA</option>
                </select>
                        </div>
                        <div class="col-6">
                            戶號
                            <input class="form-control " type="text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            維修完成日期
                            <input type="date" id="new" class="form-control w-100" style="font-size:30px">
                        </div>
                        <div class="col-6">
                            聯絡人
                            <input class="form-control " type="text ">
                        </div>
                    </div>
                    <button type="button" class="btn btn-indigo"><h4>搜尋</h4></button>
                    <!-- /.<a href="E_set.html"><button type="button" class="btn btn-indigo"><h4>我的建案</h4></button></a>-->

                    <div class="col-12" id="min-h">

                        <table class="table  text-center">
                            <tr>
                                <th scope="col" class="px-2 fontsm">建案名稱</th>
                                <th scope="col" class="pl-2 fontsm">維修類型</th>
                                <th scope="col" class="pl-2 fontsm">完成日期</th>
                                <th scope="col" class="px-0 fontsm">詳細狀況</th>
                            </tr>
                            </thead>
                        </table>
                        <div class="overFlow">
                            <table class="table  text-center table-striped">
                                <tbody>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">電機類</td>
                                        <td class="pt-4 fontsm">2018/02/03</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">水電類</td>
                                        <td class="pt-4 fontsm">2018/02/02</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">水電類</td>
                                        <td class="pt-4 fontsm">2018/02/01</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">電機類</td>
                                        <td class="pt-4 fontsm">2018/01/23</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">清潔服務</td>
                                        <td class="pt-4 fontsm">2018/01/01</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">水電類</td>
                                        <td class="pt-4 fontsm">2017/12/23</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">安裝工程</td>
                                        <td class="pt-4 fontsm">2017/12/12</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- /.通知 -->
        <div class="tab-pane fade" id="notice" role="tabpanel">
            <div class="my-0 py-0 pt-3">
                <select class="mdb-select">
                        <option value="" disabled selected>全部顯示</option>
                        <option value="1">全部顯示</option>
                        <option value="2">完成通知</option>
                        <option value="3">時間通知</option>
                    </select>
            </div>
        </div>
        
        <!-- /首頁. -->
        <div class="tab-pane fade in show active" id="fix" role="tabpanel">
            <div class="container pt-3">
                <div class="row mt-4">
                    <div class="col-4">
                        <span class="h2">案件</span>
                    </div>
                    <div class="switch col-6">
                        <ul class="nav nav-tabs nav-justified bg-indigo">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#Yet_Finish" role="tab">待完成</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#New" role="tab">新案件</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row tab-content card mt-4" id="min-h">
                    <!--Panel 1-->
                    <div class="tab-pane fade in show active" id="Yet_Finish" role="tabpanel">
                        <table class="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-1 font-weight-bold h4">建案名稱 </th>
                                    <th scope="col" class="py-1 font-weight-bold h4">維修日期 </th>
                                    <th scope="col" class="py-1 font-weight-bold h4">維修事項</th>
                                    <th scope="col" class="py-1 font-weight-bold h4">維修進度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀峰華
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                2018/02/11
                                            </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                壁癌處理
                                            </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                維修中
                                            </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                JIA
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                               2018/02/02
                                           </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            油漆工程
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            維修中
                                        </a>
                                        </i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀峰華
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                 2018/01/03
                                            </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                水電處理
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                        維修中
                                    </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀峰華
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            2017/12/04
                                        </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            電器處理
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            維修中
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀之星
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            2017/11/05
                                        </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            家具維修
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            待維修
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                HAUS
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            2017/11/01
                                        </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            其他維修
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            待維修
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="casefinish.html">
                                                舞樂天
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm"><a href="E_progress.html">2017/10/17</a>
                                    </th>
                                    <td class="py-1 fontsm"><a href="E_progress.html">其他維修</a>
                                    </td>
                                    <td class="py-1 fontsm"><a href="E_progress.html">待維修</a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/.Panel 1-->
                    <!--Panel 2-->
                    <div class="tab-pane fade" id="New" role="tabpanel">
                        <table class="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-1 font-weight-bold h4">報修類別</th>
                                    <th scope="col" class="py-1 font-weight-bold h4">待修情形</th>
                                    <th scope="col" class="py-1 font-weight-bold h4">建案名稱 </th>
                                    <th scope="col" class="py-1 font-weight-bold h4">戶號</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm "><a href="case.html">豐花園</a></td>
                                    <td class="py-1 fontsm "><a href="case.html">3-9</a></td>

                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">3-12</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">油漆類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">壁癌</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">豐花園</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">3-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">電機類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">浴室抽風損壞</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">水岸</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">8-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水龍頭爆炸</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">水岸</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">13-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">其他類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">大門斷裂</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">豐花園</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">5-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">浴室排水堵塞</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">3-6</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">12-1</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">8-1</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/.Panel 2-->
                </div>
            </div>
        </div>
    </div>

    </div>



    <footer class="page-footer fixed-bottom font-small pt-0">
        <div class="container-fluid pl-0 pr-0">
            <div class="tabs-wrapper ">
                <ul class="nav classic-tabs tabs-dark" role="tablist">
                    <li class="nav-item maxWith">
                        <a href="#fix" class="nav-link waves-light active" data-toggle="tab" role="tab"><i class="fa fa-home  white-text fa-2x" aria-hidden="true"> </i>
                        </br>首頁</a>
                    </li>
                    <li class="nav-item maxWith">
                        <a href="#search" class="nav-link waves-light" data-toggle="tab" role="tab"><i class="fa fa-search  white-text fa-2x" aria-hidden="true"> </i>
                        </br>搜尋</a>
                    </li>
                <li class="nav-item maxWidth" onclick="(new notice_show_notice_page_E('notice','show_notice_page ','notice')).run()"> 
                        <a href="#notice" id="noticeb" class="nav-link waves-light" data-toggle="tab" role="tab"><i class="fa fa-bell white-text fa-2x" aria-hidden="true"></i>
                        <span class="counter">2</span>
                        </br>通知</a>
                    </li>
                </ul>
            </div>
        </div>



        <!--Footer Links-->


    </footer>


    <!-- /Start your project here-->


    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <script>
        // SideNav Button Initialization
        $(".button-collapse").sideNav();
        // SideNav Scrollbar Initialization
        var sideNavScrollbar = document.querySelector('.custom-scrollbar');
        Ps.initialize(sideNavScrollbar);
        // SideNav Options>

        $(function() {
            $('#myTab a:last').tab('show')
        })
        $(document).ready(function() {
            $('.mdb-select').material_select();
        });
    </script>`;

                document.getElementById(this.position_id).innerHTML = str;




                switch (this.blank) {
                    case 'home':
                        {
                            $('#homeb').click();
                            break;
                        }
                    case 'record':
                        {
                            $('#recordb').click();
                            break;
                        }
                    case 'notice':
                        {
                            $('#noticeb').click();
                            break;
                        }
                    default:
                        {
                            $('#homeb').click();
                            break;
                        }

                }



            }
            else if (obj['status_code'] == 2) {
                (new login_show_login_page("login", "show_login_page", "body")).run();
                var script = this.loadModuleScript("login", "show_login_page");
            }
            else {
                console.log("Invalid status code " + obj['status_code']);
            }
        }
        catch (e) {
            var msg = e + "<br>";
            msg += "JSON String: " + json_str;
            document.getElementById(this.position_id).innerHTML = msg;
        }
    }
    ajax_error(msg) {


    }


}
