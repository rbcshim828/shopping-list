var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var deleteBtns = document.getElementsByClassName("delete");


// 입력된 문자 있는지 체크
function inputLength() {
  return input.value.length;
}

// ul에 li element추가하기
function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var btn = createBtnElement();
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
}

// 추가 할 li element안에 delete버튼 추가
function createBtnElement(){
  var btn = document.createElement("button");
  btn.setAttribute('class', 'button');
  btn.appendChild(document.createTextNode('Delete'));
  return btn;
}

//  Enter 버튼클릭했을때 이벤트
function addListAfterClick(){
  if(inputLength() >0){
    createListElement();
    //createBtnElement();
  }
}

// input에 놓고 enter키 누를때 이벤트
function addListAfterKeypress(event){
  if(inputLength() >0 && event.keyCode === 13){
    createListElement();

  }
}


function listChange(e){
    var item = e.target;
  if(item && item.nodeName === 'LI'){
    item.classList.toggle('done');
  }else if(item && item.nodeName === 'BUTTON'){
    console.log("버튼클릭");
      var p = item.parentElement;
      p.remove();
  }
}

ul.addEventListener("click", listChange);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
