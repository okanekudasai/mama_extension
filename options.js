console.log("시작!");

var init = () => {
    /**
     * 로그인 된 앱의 시리얼 넘버를 익스텐션의 스토리지에 저장하는 이벤트입니다.
     */
    app_serial_number_button.addEventListener("click", () => {
        chrome.storage.sync.set({ 'app_serial_number': app_serial_number_input.value }, function() {
            alert(app_serial_number_input.value);
        });
    })
    /**
     * 시리얼 넘버를 입력하는 input 안에 숫자 이외의 것을 입려할 수 없도록 하는 이벤트입니다.
     */
    app_serial_number_input.addEventListener('input', function() {
        app_serial_number_input.value = app_serial_number_input.value.replace(/\D/g, '');
    });
}

init();