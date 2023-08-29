//head要素を取得し、中身を出力する
console.log(document.head);
//body要素を取得し、中身を出力する
console.log(document.body);

const btn=document.getElementById('btn');
const textElement=document.getElementById("text");

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
  textElement.textContent="ボタンがクリックされました";
});

