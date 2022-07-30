let num1 = '';
let num2 = '';
let operator = '';
let click_flag = false;
let key_flag = false;
let keydown = '';
let mouse_num = '';
let mouse_op = '';
let key_op = '';
console.log(num1 , num2 , operator);

// result를 수정하기 위해 태그를 만듦
const $result = document.querySelector('#result'); 
const $preResult = document.querySelector('#pre');

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

// Number
function onClickNum(num) {
  let input_num = num;
  console.log(input_num);
  // operator가 false일때
  if(!operator){
    if(!num1 && input_num === '.') {
      num1 = 0;
    }
    num1 += input_num;
    if (comma_search(num1) >= 2) {
      num1 = num1.slice(0, -1);
    }
    $result.textContent = num1;
  }
  // operator가 true면 (들어와있으면)
  else{
    if(!num2 && input_num === '.') {
      num2 = '0';
    }
    num2 += input_num;
    comma_search(num2);
    if (comma_search(num2) >= 2) {
      num2 = num2.slice(0, -1);
    }
    // operator가 x²가 아니면 1 + 3 이렇게 출력하고
    if(operator !== 'x²'){
      $result.textContent = num1 + operator + num2;
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
const $num_0 = document.querySelector('#num-0');
const $num_1 = document.querySelector('#num-1');
const $num_2 = document.querySelector('#num-2');
const $num_3 = document.querySelector('#num-3');
const $num_4 = document.querySelector('#num-4');
const $num_5 = document.querySelector('#num-5');
const $num_6 = document.querySelector('#num-6');
const $num_7 = document.querySelector('#num-7');
const $num_8 = document.querySelector('#num-8');
const $num_9 = document.querySelector('#num-9');
const $num_comma = document.querySelector('#comma');


$num_0.addEventListener('click', flag_num);
$num_1.addEventListener('click', flag_num);
$num_2.addEventListener('click', flag_num);
$num_3.addEventListener('click', flag_num);
$num_4.addEventListener('click', flag_num);
$num_5.addEventListener('click', flag_num);
$num_6.addEventListener('click', flag_num);
$num_7.addEventListener('click', flag_num);
$num_8.addEventListener('click', flag_num);
$num_9.addEventListener('click', flag_num); 
$num_comma.addEventListener('click', flag_num);

function keyPress(k){
  switch(k){
    case 48 :
      $num_0.classList.add('press');
    break;
    case 49 :
      $num_1.classList.add('press');
    break;
    case 50 :
      $num_2.classList.add('press');
    break;
    case 51 :
      $num_3.classList.add('press');
    break;
    case 52 :
      $num_4.classList.add('press');
    break;
    case 53 :
      $num_5.classList.add('press');
    break;
    case 54 :
      $num_6.classList.add('press');
    break;
    case 55 :
      $num_7.classList.add('press');
    break;
    case 56 :
      $num_8.classList.add('press');
    break;
    case 57 :
      $num_9.classList.add('press');
    break;
    case 110:
      $num_comma.classList.add('press');
    break;
    case 107:
      $num_plus.classList.add('press2');
    break;
    case 13:
      $equal.classList.add('press2');
    break;
    case 109:
      $num_minus.classList.add('press2');
    break;
    case 106:
      $num_multi.classList.add('press2');
    break;
    case 8:
      $back.classList.add('press');
    break;
    case 111:
      $num_devide.classList.add('press2');
    break;
    case 191:
      $num_devide.classList.add('press2');
    break;
    case 27:
      $clear.classList.add('press');
    break;
  }
}

function keyRemovePress(k){
  switch(k){
    case 48 :
      $num_0.classList.remove('press');
    break;
    case 49 :
      $num_1.classList.remove('press');
    break;
    case 50 :
      $num_2.classList.remove('press');
    break;
    case 51 :
      $num_3.classList.remove('press');
    break;
    case 52 :
      $num_4.classList.remove('press');
    break;
    case 53 :
      $num_5.classList.remove('press');
    break;
    case 54 :
      $num_6.classList.remove('press');
    break;
    case 55 :
      $num_7.classList.remove('press');
    break;
    case 56 :
      $num_8.classList.remove('press');
    break;
    case 57 :
      $num_9.classList.remove('press');
    break;
    case 110:
      $num_comma.classList.remove('press');
    break;
    case 107:
      $num_plus.classList.remove('press2');
    break;
    case 13:
      $equal.classList.remove('press2');
    break;
    case 109:
      $num_minus.classList.remove('press2');
    break;
    case 106:
      $num_multi.classList.remove('press2');
    break;
    case 8:
      $back.classList.remove('press');
    break;
    case 111:
      $num_devide.classList.remove('press2');
    break;
    case 191:
      $num_devide.classList.remove('press2');
    break;
    case 27:
      $clear.classList.remove('press');
    break;
  }
}

// 마우스 이벤트 확인 함수
function flag_num(event){
  click_flag = true;
  mouse_num = event.target.textContent;
  divide_num(mouse_num);
  click_flag = false;
}


// 키보드 이벤트 확인 함수
function flag_key(event){
  key_flag = true;
  keydown = event.keyCode;
  console.log(keydown);
  divide_num(keydown);
  key_flag = false;
}


// 키보드랑 마우스중에 어떤게 실행됐는지 확인하고 그거에 맞는 함수를 호출
function divide_num (click_flag){
  if (click_flag){
    onClickNum(mouse_num);
  }
  else {
    onClickNum(keydown);
  }
}

// 키보드에 입력이 들어왔을때 
function onKeyDown(event) {
  key_flag = true;
  let keyCode = event.keyCode;
  let keyCodeString;
  console.log('key code = ', keyCode);
  
  if(key_flag){
    if(keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105){
      if(keyCode >= 96 && keyCode <= 105){
        keyCode = keyCode - 48;
      }
      keyCodeString = String.fromCharCode(keyCode);
      console.log(keyCodeString);
      onClickNum(keyCodeString);
    }
    if(keyCode === 13){
      onClickEqual(); 
    }
    if(keyCode === 8){
      onClickBack();
      
    }
    if(keyCode === 110 || keyCode === 190){
      keyCodeString = '.';
        onClickNum(keyCodeString);
    }
    if(keyCode === 27){
      onClickClear();
    }
    if(keyCode === 106){
      key_op = 'X';
      onClickOperator(key_op)
      $result.textContent = num1 + operator;
    }
    if(keyCode === 107){
      key_op = '+';
      onClickOperator(key_op)
      $result.textContent = num1 + operator;
    }
    if(keyCode === 109){
      key_op = '-';
      onClickOperator(key_op)
      $result.textContent = num1 + operator;
    }
    if(keyCode === 191 || keyCode === 111){
      key_op = '/';
      onClickOperator(key_op)
      $result.textContent = num1 + operator;
    }
    keyPress(keyCode);
    console.log('keyCode =', keyCode);
    console.log('add press');
    setTimeout(() => {
      console.log('remove press')
      keyRemovePress(keyCode);
    }, 100);
  key_flag = false;
  return;
  }
}

// Select Keyboard
window.addEventListener('keydown', event => onKeyDown(event));


// Select operator
document.querySelector('#squared').addEventListener('click', inputMouse);
const $num_devide = document.querySelector('#devide');
const $num_multi = document.querySelector('#multiplication');
const $num_minus = document.querySelector('#minus');
const $num_plus = document.querySelector('#plus');

$num_devide.addEventListener('click', inputMouse);
$num_multi.addEventListener('click', inputMouse);
$num_minus.addEventListener('click', inputMouse);
$num_plus.addEventListener('click', inputMouse);

// 마우스로 연산자를 클릭했을 시
function inputMouse(event){
  click_flag = true;
  mouse_op = event.target.textContent;
  onClickOperator(mouse_op);
  click_flag = false;
}


// Operator
function onClickOperator(op) {
  clicked_op = op;
  // 연산자를 클릭했을 때 num1이 들어있지 않다면 num1에 0을 대입
  if(!num1) {
    console.log('num = 0');
    num1 = '0';
    $result.textContent = num1;
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
const $equal = document.querySelector('#equal');
const $clear = document.querySelector('#clear');
const $back = document.querySelector('#back');

$equal.addEventListener('click', onClickEqual);
$clear.addEventListener('click', onClickClear);
$back.addEventListener('click', onClickBack);

// Equal
function onClickEqual() {
  console.log('equal click')
  // 아무것도 입력이 없는데 =이 입력되면 결과는 없음
  if(!num1 && !num2) {
    console.log('x')
    $result.textContent = '0';
  }

  // num2를 입력하지 않은 상태로 =을 누르면 num1만 출력됨
  if(num1 && num2 === '') {
    num2 ='';
    $result.textContent = num1;
  }
  if(num1 === '') {
    num1 = '0';
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
        num1 = num1 * num1 ;
        $result.textContent = num1;
        break;
      }
      $preResult.textContent = num1;
      console.log('num1 = ', num1);
      num1 = String(num1);
      num2 = '';
    }
    
    // 숫자가 실수일때 계산
    if(num2 && (comma_search(num1) >= 1 || comma_search(num2) >= 1)){
    switch(operator){
      case '+':
        num1 = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
        $result.textContent = num1;
        break;
        case '-':
          num1 = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
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
        $preResult.textContent = num1;
      }
}

// Clear
function onClickClear() {
    num1 = '';
    num2 = '';
    operator = '';
    $result.textContent = '0';
    $preResult.textContent = '0';
    console.log('clear = ', num1 , num2 , operator);
}

// Back
function onClickBack() {
  if(!operator && num1 !== 0) {
    num1 = num1.slice(0, -1);
    if(num1 === ''){
      num1 = 0;
    }
    $result.textContent = num1;
  }
  if (num2){
    num2 = num2.slice(0, -1);
    $result. textContent = num1 + operator + num2;
  }

  if(num2 === ''){
    operator = '';
    $result.textContent = num1 + operator;
  }

  // if(operator && !num2) {
  //   num1 = '0';
  //   operator = '';
  // }

  if(!num1 || num1 === '0') {
    return;
  }
  
}