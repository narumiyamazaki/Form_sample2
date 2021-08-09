// プライバシーポリシーにチェックが入ってないとエラーメッセージを出す
//id="privacyPolicy--agree"

$(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.p-form__submit').prop("disabled", true);
    //プライバシーポリシーがチェックされていたら
    $('#privacyPolicy--agree').on('click', function() {
        if ( $(this).prop('checked') == false ) {
            //送信ボタンを復活
            $('.p-form__submit').prop("disabled", true);
        }
        else {
            //送信ボタンを閉じる
            $('.p-form__submit').prop("disabled", false);
        }
    });
});