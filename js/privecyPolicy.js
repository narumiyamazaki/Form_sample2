// プライバシーポリシーにチェックが入ってないとエラーメッセージを出す
//id="privacyPolicy--agree"

$(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.p-form__submit').prop("disabled", true);
    let flag = true;
    //プライバシーポリシーがチェックされていたら
    $('#privacyPolicy--agree').on('click', function() {
        if ( $(this).prop('checked') == false ) {
                flag = false;
            }
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