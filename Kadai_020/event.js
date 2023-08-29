//head要素を取得し、中身を出力する
console.log(document.head);
//body要素を取得し、中身を出力する
console.log(document.body);

const btn=document.getElementById('btn');
const textElement=document.getElementById("text");


btn.addEventListener('click',() => {
});

//HTML要素がクリックされたときにイベント処理を実行する
  setTimeout(() =>{ 
textElement.textContent="ボタンがクリックされました";

  }, 2000);

