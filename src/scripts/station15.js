function displayList() {

    const fruits = document.getElementById("fruits");
    const items = fruits.querySelectorAll("p");

    //　リスト要素の作成
    const ul = document.createElement("ul");
    items.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item.textContent;
        ul.appendChild(li);
    });

    //　要素の削除と追加
    fruits.innerHTML = "";
    fruits.appendChild(ul);
}