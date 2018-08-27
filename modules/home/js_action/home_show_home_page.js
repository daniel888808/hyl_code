class home_show_home_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
        //alert("home in");
    }
    prepareArgs() {
        this.php = true;
    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 1) {
                var str = `
                <header>
        <!-- Navbar -->
        <nav class="navbar fixed-top double-nav" style="height:51px">
            <!-- SideNav slide-out button -->
            <div class="float-left">
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars"></i> 
            </div>
            <!-- Breadcrumb-->
            <div class="breadcrumb-dn mr-auto">
                <p>華友聯</p>
            </div>
            <ul class="nav navbar-nav nav-flex-icons ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-gear fa-lg p-0" aria-hidden="true"></i> 設定
                     
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" onclick="(new user_profile_show_update_page('user_profile','show_update_page','body')).run()">基本資料</a> 
                        <a class="dropdown-item" onclick="(new login_do_logout_action('login','do_logout_action','body')).run()">登出</a>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.Navbar -->
    </header>
                
                
    <div class="tab-content px-0 mt-3">
        <div class="tab-pane fade in show active" id="fix" role="tabpanel">
            <div class="container pl-1 pr-0 mt-2">
                 <div class="mt-1">
                    <button type="button"  class="btn btn-ins m-0 w-32" onclick="(new repair_show_repair_page('repair','show_repair_page','body','Hydropowerrepair')).run()"><i class="fa fa-s15" aria-hidden="true"></i></br>水電<br>報修</button>
                    <button type="button"  class="btn btn-cyan m-0 w-32" onclick="(new repair_show_repair_page('repair','show_repair_page','body','ElectricalEngineering')).run()"><i class="fa fa-desktop" aria-hidden="true"></i></br>電機<br>相關</button>
                    <button type="button"  class="btn btn-indigo m-0 w-32" onclick="(new repair_show_repair_page('repair','show_repair_page','body','Installationwork')).run()"><i class="fa fa-wrench" aria-hidden="true" ></i></br>安裝<br>工程</button>
                </div>
                <div class="mt-1">
                    <button type="button"  class="btn btn-teal darken-3 m-0 w-32" onclick="(new repair_show_repair_page('repair','show_repair_page','body','Publicmaintenance')).run()"><i class="fa fa-building" aria-hidden="true" ></i></br>公設<br>維修</button>
                    <button type="button"  class="btn btn-red m-0 w-32" onclick="(new repair_show_repair_page('repair','show_repair_page','body','Furnituremaintenance')).run()"><i class="fa fa-bed" aria-hidden="true" ></i></br>家具<br>維修</button> 
                    <button type="button"  class="btn btn-deep-purple darken-3 m-0 w-32" onclick="(new repair_show_repair_page('repair','show_repair_page','body','CleaningServices')).run()"><i class="fa fa-bug" aria-hidden="true" ></i></br>清潔<br>服務</button>
                </div>
                <div class="mt-1">
                    <button type="button"  class="btn btn-warning m-0 w-49" onclick="(new repair_show_repair_page('repair','show_repair_page','body','Paintingworks')).run()"><i class="fa fa-paint-brush" aria-hidden="true" ></i></br>油漆工程</button>
                    <button type="button"  class="btn btn-pink m-0 w-49" onclick="(new repair_show_repair_page('repair','show_repair_page','body','Other')).run()"><i class="fa fa-info" aria-hidden="true" ></i></br>其他維修</button>
                </div>


            </div>

            <div class="container-fluid text-left maxHeight" id="news">
                <div class="row">
                    <div class="col-12">
                        <a href="http://www.huayulien.com/%E8%8F%AF%E5%8F%8B%E8%81%AF%E5%AE%B6%E6%97%8F%E5%B0%88%E5%B1%AC%F0%9F%92%95%E6%AF%8D%E8%A6%AA%E7%AF%80%E7%8F%8D%E6%84%9B%E5%B0%88%E6%A1%88/">
                            <div class="row mt-2">
                                <div class="col px-0">
                                    <div class="row border boxShadow mx-1 h-60">
                                        <div class="col-5 px-0">
                                            <img src="../include/lib/img/01.png" alt="" srcset="" width="85px" height="80px">
                                        </div>
                                        <div class="col-7 pl-0 pr-1 my-0">
                                            <h6 class="font-weight-bold my-1">
                                                華友聯家族專屬💕母親節珍愛專案
                                            </h6>
                                            <p class="mb-0">
                                                愛她，照護她的健康讓媽咪New一下...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="http://www.huayulien.com/%E9%9D%92%E5%AE%89%E8%B2%B8%E6%AC%BE%E7%A2%BA%E5%AE%9A%E5%B0%87%E5%BB%B6%E8%87%B32018%E5%B9%B4%E5%BA%95/">
                            <div class="row mt-2">
                                <div class="col px-0">
                                    <div class="row border boxShadow mx-1 h-60">
                                        <div class="col-5 px-0">
                                            <img src="../include/lib/img/03.png" alt="" srcset="" width="85px" height="80px">
                                        </div>
                                        <div class="col-7 pl-0 pr-1 my-0">
                                            <h6 class="font-weight-bold my-1">
                                                青安貸款確定將延至2018年底
                                            </h6>
                                            <p class="mb-0">
                                                行政院核定通過，青安貸款確定...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                 
                <div class="row">
                    <div class="col-12" id="news1">
                        <a href="" onclick="(new news_do_select_action('news','do_select_action','body').run())">
                            <div class="row mt-2">
                                <div class="col px-0">
                                    <div class="row border boxShadow mx-1 h-60">
                                        <div class="col-5 px-0">
                                            <img src="../include/lib/img/04.png" alt="" srcset="" width="85px" height="80px">
                                        </div>
                                        <div class="col-7 pl-0 pr-1 my-0">
                                            <h6 class="font-weight-bold my-1">
                                                九年來 我們一直都在…
                                            </h6>
                                            <p class="mb-0">
                                                優質的售後服務 盡在華友聯...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
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

        <!-- /.紀錄 -->
        <div class="tab-pane fade" id="record" role="tabpanel">
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
                                    <th class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">2018/02/11 </a></th>
                                    <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">壁癌處理 </a></td>
                                    <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">
                                        <i class = "fa fa-check light-blue-text" aria-hidden="true"></a></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm" ><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">2018/02/02</a></th>
                                    <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">油漆工程</a></td>
                                    <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body')).run()">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></a></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">2018/01/03</th>
                                    <td class="py-1 fontsm">水電處理</td>
                                    <td class="py-1 fontsm">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">2017/12/04</th>
                                    <td class="py-1 fontsm">電器處理</td>
                                    <td class="py-1 fontsm">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr=>
                                    <th class="py-1 fontsm">2017/11/05</th>
                                    <td class="py-1 fontsm">家具維修</td>
                                    <td class="py-1 fontsm">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr=>
                                    <th class="py-1 fontsm">2017/11/01</th>
                                    <td class="py-1 fontsm">其他維修</td>
                                    <td class="py-1 fontsm">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">2017/10/17</th>
                                    <td class="py-1 fontsm">其他維修</td>
                                    <td class="py-1 fontsm">
                                        <i class="fa fa-check light-blue-text" aria-hidden="true"></i>
                                    </td>
                                </tr>
                            </tshow_area>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer class="page-footer fixed-bottom font-small pt-0">
        <div class="container-fluid px-0">
            <div class="tabs-wrapper">
                <ul class="nav classic-tabs tabs-dark pl-3" role="tablist">
                    <li class="nav-item maxWidth" onclick="(new news_do_select_action('news', 'do_select_action', 'news')).run();">
                        <a href="#fix" class="nav-link waves-light active" data-toggle="tab" role="tab"><i class="fa fa-home  white-text fa-2x" aria-hidden="true"> </i>
                        </br>首頁</a>
                    </li>
                    <li class="nav-item maxWidth"onclick="(new case_show_select_page('case', 'show_select_page', 'record')).run();">
                        <a href="#record" class="nav-link waves-light" data-toggle="tab" role="tab"><i class="fa fa-history  white-text fa-2x" aria-hidden="true"> </i>
                        </br>紀錄</a>
                    </li>
                    <li class="nav-item maxWidth" onclick="(new notice_do_select_notice_action('notice','do_select_notice_action ','notice')).run()"> 
                        <a href="#notice" class="nav-link waves-light" data-toggle="tab" role="tab"><i class="fa fa-bell white-text fa-2x" aria-hidden="true"></i>
                        <span class="counter">2</span>
                        </br>通知</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
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
    </script>
                    `;
                document.getElementById(this.position_id).innerHTML = str;
                this.loadModuleScript("news", "do_select_action");
                this.loadModuleScript("repair", "show_repair_page");
                this.loadModuleScript("notice", "show_time_confirmation_page");
                this.loadModuleScript("notice", "show_repair_completed_page");
                this.loadModuleScript("notice", "do_select_notice_action");
                this.loadModuleScript("user_profile", "show_update_page");
                this.loadModuleScript("case", "do_select_action");
                this.loadModuleScript("login", "do_logout_action");
                this.loadModuleScript("case", "show_select_page");

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
