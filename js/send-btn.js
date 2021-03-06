// プライバシーポリシーにチェックが入ってないとエラーメッセージを出す
//id="privacyPolicy--agree"

$(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.p-form__submit').prop("disabled", true);
    
    //始めにjQueryで必須欄を加工する
    //$('form input:required').each(function () {
        //$(this).prev("label").addClass("required");
    //});
    
    //入力欄の操作時
    $('form input:required').change(function () {
        //必須項目が空かどうかフラグ
        let flag = true;
        //必須項目をひとつずつチェック
        $('form input:required').each(function(e) {
            //もしinput textの必須項目が空なら
            if ($('form input:required').eq(e).val() === "") {
                flag = false;
                //メールアドレスのタイプが選ばれていない場合は
            }else if($(".p-form__mailType:checked").length == 0){
                flag = false;
                //基本情報登録がされてされていなければ
            }else if(!$('input[name=register]').is(":checked")){
                flag = false;
                //プライバシーポリシーがチェックされてされていなければ
            }else if( $('#privacyPolicy--agree').prop('checked') == false ){
                flag = false;
            }else{
                //何もしない
            }
        });
        //全て埋まっていたら
        if (flag) {
            //送信ボタンを復活
            $('.p-form__submit').prop("disabled", false);
        }
        else {
            //送信ボタンを閉じる
            $('.p-form__submit').prop("disabled", true);
        }
    });
});