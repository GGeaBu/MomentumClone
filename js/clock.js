const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    // 숫자를 문자열로 변환시에는 String() 함수 사용!!
    // (toString() 함수는 전혀 다른 것임!)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //웹사이트가 실행되자마자 시간이 보여지도록 하기 위해
setInterval(getClock, 1000); //첫 번쨰 인자는 함수명, 두번쨰 인자는 ms 단위의 시간

// setTimeout(sayHello, 5000); //일정 시간이 지난후에 우리가 지정한 함수를 실행시켜 주는 함수

