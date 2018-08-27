class notice_show_repair_completed_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = false;
    }
    showResult() {
        var str = "";
        str += `
        <!--/. Sidebar navigation -->
        <!-- Navbar -->

        <nav class="navbar bgdark text-white py-1" style="height:51px">
      <div onclick="(new home_show_home_page('home','show_home_page','body')).run()">
        <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
    </div>
            <span class="h6 m-auto pr-3">
                   評價
            </span>
        </nav>
        <!-- /.Navbar -->
    </header>
    <div class="row mr-1 ml-1">
        <div class="col-12 border boxShadow rounded p-3">
            <p class="h6">此次維修已完成，請給予我們評價和意見，感謝您!</p>

        </div>
        <div class="col-12 mt-2 font-weight-bold">
            維修項目:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="水電報修">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            待修狀況:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="壁癌">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            維修內容:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="壁癌處理、重新粉刷">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            地點:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="舞樂天B5-5">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            日期:<input type="text" class="form-control my-0" id="month1" placeholder="Enter month" readonly="readonly" value="03/08/2018 4:00PM">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            維修廠商:<input type="text" class="form-control my-0" id="month1" placeholder="Enter month" readonly="readonly" value="03/08/2018 4:00PM">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            評價:
            <!--<div>
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label class="full p-0" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                </fieldset>
                <br>
            </div>-->
            <!--沒辦法就暫時用這個簡單版的 -->
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <!--沒辦法就暫時用這個簡單版的 -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            意見回復:
            <textarea type="text" id="materialFormContactMessageEx" class="form-control md-textarea" rows="5"></textarea>

        </div>
        <a href="testindex.html "><button type="button " class="btn btn-primary rounded ">送出</button></a>

    </div>
  	`;

        document.getElementById(this.position_id).innerHTML = str;
    }
}
