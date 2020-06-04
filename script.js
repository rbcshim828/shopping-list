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
  var span = document.createElement("span");
  span.appendChild(document.createTextNode(input.value));
  var btn = createBtnElement();
  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
}

// 추가 할 li element안에 delete버튼 추가
function createBtnElement(){
  var btn = document.createElement("button");
  btn.setAttribute('class', 'delete');
  var i = document.createElement("i");
  i.classList.add('fas', 'fa-times');
  btn.appendChild(i);
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

// 리스트 내  클릭시 이벤트
function listChange(e){
    var item = e.target;
  // 리스트 내용 클릭한경우   --> 골랐다는 뜻으로 줄긋는 표시와 done 표
  if(item && item.nodeName === 'SPAN' && item.className !== 'doneTxt'){
    item.classList.toggle('done'); // toggle로 클래스 네임 넣어 줄긋기 효과
    if(item.className === 'done'){  // 'Done!'이라는 text 넣기
      setTimeout(function(){
        var done =  document.createElement("span");
        done.setAttribute('class', 'doneTxt');
        done.appendChild(document.createTextNode('   Done!'));
        var pp = item.parentElement;
        pp.appendChild(done);

      },100);
    }else{ // done 취소한 경우 'Done!' 문자 없애기
      var btn = item.nextSibling;
      var done = btn.nextSibling;
      done.remove();
    }
  }else if(item && item.nodeName === 'I'){ // X표시 클릭하여 리스트 삭제 
    //console.log("버튼클릭");
      var p = item.parentElement;
      var pp = p.parentElement
      pp.remove();
  }
}

ul.addEventListener("click", listChange);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
