let num1 = '';
let num2 = '';
let operator = '';
let key_flag = false;
let keydown = '';
console.log(num1 , num2 , operator);

// result를 수정하기 위해 태그를 만듦
const $result = document.querySelector('#result'); 

// Comma search
function comma_search(check_num) {
  let comma_num = '';
  // .을 넣고
  comma_num = check_num.match(/\./g);
  console.log(comma_num);
  // comma_num이 true라면 comma_num의 길이를 담는다.
  if(comma_num){
    comma_num = comma_num.length;
  }
  console.log(comma_num);
  // 아니면 그냥 return
    return comma_num;
}


// 내일 할 것(7/29)
// x² X2로 바꿔주기
// 함수를 하나 만들고 그 안에 if문으로 마우스변수에 마우스 클릭 발생시/
// 키보드 다운 발생할때(함수 만들기) 어떤 함수를 실행해야 할지 판단하는 함수를 만들고 
// addEventListener에 키보든지 마우슨지 판단하는 함수를 호출한다.


// Number
function onClickNum(event) {
  // event된 것의 text를 변수에 담는다. 
  // let clicked_num = keydown ? event : event.target.textContent;
  let clicked_num = event.target.textContent;
  // operator가 false일때
  if(!operator){
    if(!num1 && clicked_num === '.') {
      num1 = 0;
    }
    num1 += clicked_num;
    if (comma_search(num1) >= 2) {
      num1 = num1.slice(0, -1);
    }
    $result.textContent = num1;
  }
  // operator가 true면 (들어와있으면)
  else{
    if(!num2 && clicked_num === '.') {
      num2 = 0;
    }
    num2 += clicked_num;
    comma_search(num2);
    if (comma_search(num2) >= 2) {
      num2 = num2.slice(0, -1);
    }
    // operator가 x²가 아니면 1 + 3 이렇게 출력하고
    if(operator !== 'x²'){
      $result.textContent = num1 + operator + num2;
      console.log('onClickNum !x²')
    }
    // 아니면 operator가 x²일때 숫자를 누르면 다시 제곱을 해야하므로 num2를 num1에 넣어서 처음부터 다시 계산하게 한다.
    else {
      num1 = num2;
      $result.textContent = num1;
    }
  }
  if(num1[0] === '0' && comma_search(num1) == null){
   num1 = num1.slice(1);   
  }
  if(num2[0] === '0' && comma_search(num2) == null){
    num2 = num2.slice(1);
  }
}

// Select Number
document.querySelector('#num-0').addEventListener('click', onClickNum);
document.querySelector('#num-1').addEventListener('click', onClickNum);
document.querySelector('#num-2').addEventListener('click', onClickNum);
document.querySelector('#num-3').addEventListener('click', onClickNum);
document.querySelector('#num-4').addEventListener('click', onClickNum);
document.querySelector('#num-5').addEventListener('click', onClickNum);
document.querySelector('#num-6').addEventListener('click', onClickNum);
document.querySelector('#num-7').addEventListener('click', onClickNum);
document.querySelector('#num-8').addEventListener('click', onClickNum);
document.querySelector('#num-9').addEventListener('click', onClickNum); 
document.querySelector('#comma').addEventListener('click', onClickNum);

// function onKeyDown(event) {
//   keydown = event.key;
//   // 키를 누르면 true로 바꿔서 실행
//   key_flag = true;
//   // flag가 false면 이미 눌렸거나 눌리지 않은거임
//   if(!key_flag) {
//     $result
//     return;
//   }
//   // 눌리면
//   if(key_flag) {
//     switch(keydown) {
//       case '1':
//         onClickNum('1');
//         break;
//     }
//   }
// }


// Select Keyboard
// window.addEventListener('keydown', onKeyDown);

// Select operator
document.querySelector('#squared').addEventListener('click', onClickOperator);
document.querySelector('#devide').addEventListener('click', onClickOperator);
document.querySelector('#multiplication').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#plus').addEventListener('click', onClickOperator);

let minus = '-';

// Operator
function onClickOperator(event) {
  clicked_op = event.target.textContent;
  // 연산자를 클릭했을 때 num1이 들어있지 않다면 num1에 0을 대입
  if(!num1) {
    num1 = '0';
    $result.textContent += clicked_op;
  } 
  
  // num2가 '' 이고 연산자로 x²가 들어오면 num2를 2로 지정. 
  // 연산자가 x²이고 num2입력이 들어오면 num2를 2로 지정하면 안됨
  if(!num2  && clicked_op === 'x²'){
    operator = clicked_op;
    num2 = '2';
    console.log('num2 = 2');
  }
  
  // num1이 입력되어 있고 연산자가 오면 앞에 식을 계산 후 표시
  if(num1 && clicked_op === 'x²') {
    onClickEqual();
    console.log('num1 true Click x²');
    $result.textContent = num1;
    console.log('textContent = num1');
  }
  
  // 연산자가 입력되어 있는데 연산자로 제곱이 아닌 것이 들어오면 계산 후 출력
  if(clicked_op && clicked_op !== 'x²') {
    onClickEqual();
    $result.textContent = num1;
    $result.textContent += clicked_op;
  }
  operator = clicked_op;
};

// Select equal, clear, back
document.querySelector('#equal').addEventListener('click', onClickEqual);
document.querySelector('#clear').addEventListener('click', onClickClear);
document.querySelector('#back').addEventListener('click', onClickBack);


// Equal
function onClickEqual() {
  console.log('equal click')
  
  // num2를 입력하지 않은 상태로 =을 누르면 num1만 출력됨
  if(num2 === '') {
    num2 ='';
    $result.textContent = num1;
  }
  // 정수일 때 계산
  if (num2 && (comma_search(num1) == null && comma_search(num2) == null)){
    switch(operator){
      case '+':
        num1 = parseInt(num1) + parseInt(num2);
        $result.textContent = num1;
        break;
      case '-':
        num1 = num1 - num2;
        $result.textContent = num1;
        break;
      case 'X':
        num1 = num1 * num2;
        $result.textContent = num1;
        break;
      case '/':
        num1 = num1 / num2;
        $result.textContent = num1;
        break;
      case 'x²':
        // num2 = '2';
        num1 = num1 * num1 ;
        $result.textContent = num1;
        break;
      }
      num1 = String(num1);
      num2 = '';
    }
    
    // 숫자가 실수일때 계산
    if(num2 && (comma_search(num1) >= 1 || comma_search(num2) >= 1)){
    switch(operator){
      case '+':
        num1 = (parseFloat(num1) + parseFloat(num2)).toFixed(num1.length - 2);
        $result.textContent = num1;
        break;
        case '-':
          num1 = (parseFloat(num1) - parseFloat(num2)).toFixed(num1.length - 2);
          $result.textContent = num1;
          break;
          case 'X':
            num1 =(parseFloat(num1) * parseFloat(num2)).toFixed(2);
        $result.textContent = num1;
        break;
        case '/':
          num1 = (parseFloat(num1) / parseFloat(num2)).toFixed(2);
          $result.textContent = num1;
          break;
          case 'x²':
            num1 = parseFloat(Math.pow(num1, num2)).toFixed(2);
            $result.textContent = num1;
            break;
          }
        num1 = String(num1);
        num2 = '';
      }
}

// Clear
function onClickClear() {
    num1 = '';
    num2 = '';
    operator = '';
    $result.textContent = '0';
    console.log('clear = ', num1 , num2 , operator);
}

// Back
function onClickBack() {
  if(!operator) {
    num1 = num1.slice(0, -1);
    if(num1 === ''){
      num1 = 0;
    }
    $result.textContent = num1;
  }
  if (num2){
    num2 = num2.slice(0, -1);
  }
  if(operator && !num2) {
    num1 = '0';
    operator = '';
  }
  $result. textContent = num1 + operator + num2;
}