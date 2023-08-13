const db = firebase.firestore();

function displayCharacters() {
  const listBox = document.querySelector(".member-list-box");
  //   listBox.innerHTML = "";

  db.collection("character")
    .get()
    .then((snapshot) => {
      if (snapshot.size === 0) {
        listBox.innerHTML = "<div>현재 관리되고 있는 캐릭터가 없습니다.</div>";
        return;
      }

      snapshot.forEach((doc) => {
        const charData = doc.data();

        let charItem = `
            <ul class="member-list">
                <li class="member-list-innercheck"><input type="checkbox" data-id="${doc.id}" /></li>
                <li class="member-list-inner">
                <img src="${charData.사진}" class="image-size" />
                </li>
                <li class="member-list-inner">${charData.이름}</li>
                <li class="member-list-inner">${charData.국적}</li>
                <li class="member-list-inner">${charData.생년월일}</li>
                <li class="member-list-inner">${charData.제작}</li>
            </ul>`;

        listBox.innerHTML += charItem;
      });
    });
}

window.onload = displayCharacters;

document
  .querySelector(".member-delete")
  .addEventListener("click", deleteCharacters);

function deleteCharacters() {
  const checkboxes = document.querySelectorAll(
    ".member-list-innercheck input:checked"
  );

  if (checkboxes.length === 0) {
    alert("삭제할 캐릭터를 선택하세요.");
    return;
  }

  const userConfirmed = confirm("선택한 캐릭터를 삭제하시겠습니까?");

  if (userConfirmed) {
    checkboxes.forEach((checkbox) => {
      const charID = checkbox.getAttribute("data-id");

      db.collection("character")
        .doc(charID)
        .delete()
        .then(() => {
          displayCharacters();
        })
        .catch((error) => {
          console.error("Error deleting character: ", error);
        });
    });
  }
}
