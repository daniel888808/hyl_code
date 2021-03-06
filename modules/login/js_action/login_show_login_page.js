class login_show_login_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = false;
    }
    showResult() {
        var str = `
          <div class="container ">
        <div class="col-lg-6 col-md-6">
            <!-- Start your project here-->
            <section class="form-dark">
                <!-- Material form login -->
                <div class="container p-3 mt-5">
                    <form>
                        <div class="text-center mb-3 col-md-12">
                            <a href="#"><img src="http://i1.wp.com/www.huayulien.com/wp-content/uploads/2015/02/H_logo.png?zoom=1.5&resize=112%2C48" class="img-fluid flex-center"></a>
                        </div>
                        <!-- Material input email -->
                        <div class="md-form text-gray">
                            <i class="fa fa-envelope prefix gray-text"></i>
                            <input type="text" id="account" class="form-control gray-text">
                            <label for="account">電子郵件</label>
                        </div>
                        <div class="md-form pb-3 ">
                            <i class="fa fa-lock prefix gray-text"></i>
                            <input type="password" id="password" class="form-control gray-text">
                            <label for="password">密碼</label>
                            <div id="login_err_msg"></div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck17">
                                <label class="form-check-label gray-text" for="defaultCheck17">記住我</label>
                    
                            </div>
                        </div>

                        <div class="text-center mb-3 col-md-12">
                            <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1" onclick="(new login_do_login_action('login','do_login_action','body')).run()">登入</button>
                        </div>
                    </form>
                </div>
                <!-- Material form login -->
            </section>
            <!--Section: Live preview-->
        </div>
    </div>	`;
        this.loadScript("include/lib/CryptoJSv3.1.2/rollups/aes.js", "CryptoJS_AES");

        document.getElementById(this.position_id).innerHTML = str;
        this.loadModuleScript('login', 'do_login_action');
    }
}
