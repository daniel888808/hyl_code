class notice_show_time_confirmation_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = false;
    }
    showResult() {
        var str = `
      <!--/. Sidebar navigation -->
<!-- Navbar -->
<nav class="navbar bgdark text-white py-1" style="height:51px">
    <div onclick="(new home_show_home_page('home','show_home_page','body')).run()">
        <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
    </div>
    
    <span class="h6 m-auto pr-3">
        報修確認通知
    </span>
</nav>
<!-- /.Navbar -->
</header>

<div class="container mt-2">
    <div class="row mr-1 ml-1">
        <div class="col-12 border boxShadow rounded p-3">
            <p class="h5">報修確認通知</p>
            <p class="h6">我們將會在以下時間為您服務</p>
            <div class="font-weight-bold">
                時間:
                <input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="1月1日12:00時">
            </div>
            <div class="mt-1 font-weight-bold">
                維修項目:
                <input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="水電">
                <!--<label>Example label</label> -->
            </div>
            <div class="mt-1 font-weight-bold">
                維修原因:
                <input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="壁癌處理">
                <!--<label>Example label</label> -->
            </div>
            <div class="mt-1 font-weight-bold">
                地點:
                <input type="text" class="form-control my-0 pb-0" id="month1 " placeholder="Enter month " readonly="readonly" value="舞樂天B5-5 ">
                <!--<label>Example label</label> -->
            </div>
            <div class="mt-1 font-weight-bold">
                維修廠商:
                <input type="text" class="form-control my-0 pb-0" id="month1 " placeholder="Enter month " readonly="readonly" value="洪彬水電 ">
                <!--<label>Example label</label> -->
            </div>
        </div>
        <a href="testindex.html ">
            <button type="button " class="btn btn-primary rounded ">確認</button>
        </a>
        <a href="testindex.html ">
            <button type="button " class="btn btn-danger rounded ">取消維修</button>
        </a>
    </div>
</div>

<!-- /Start your project here-->

  	`;

        document.getElementById(this.position_id).innerHTML = str;
    }
}
