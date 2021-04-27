(function(window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    window.addEventListener('resize', function() {
        if (window, innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        }); // 토글이라는 클래스를 가지고있는 요소에다가 on이라는 토글버튼을 클릭할때마다 클래스를 지속적으로 토글할것이다.

    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)