import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection, getFirestore, getDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_hGpmbxOceSWC-TYDqjGyQs3mGCbuDI0",
  authDomain: "project-js-160bd.firebaseapp.com",
  projectId: "project-js-160bd",
  storageBucket: "project-js-160bd.appspot.com",
  messagingSenderId: "134984714331",
  appId: "1:134984714331:web:12311afda7f0913b5f577e",
  measurementId: "G-7T5FSMF8Y8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const documentId = urlParams.get("documentId");

  try {
    const docRef = doc(db, "database", documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();

      // 페이지 내 요소에 데이터 적용
      const profileImgElement = document.getElementById("profile-img");
      profileImgElement.src = data.profileImg;

      const nameInput = document.getElementById("name");
      nameInput.value = data.name;

      const emailInput = document.getElementById("email");
      emailInput.value = data.email;

      const phoneInput = document.getElementById("phone");
      phoneInput.value = data.phone;

      // 이미지 업로드 부분
      const imageUpload = document.getElementById("image-upload");

      imageUpload.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        if (file) {
          const storageRef = ref(storage, `images/${file.name}`);
          const uploadTask = uploadBytes(storageRef, file);

          try {
            const snapshot = await uploadTask;
            const imageRef = ref(storage, `images/${snapshot.metadata.name}`);
            const downloadURL = await getDownloadURL(imageRef);

            // Firestore에 업데이트된 데이터 저장
            const updatedProfileData = {
              profileImg: downloadURL,
              name: nameInput.value,
              email: emailInput.value,
              phone: phoneInput.value,
            };

            await updateDoc(docRef, updatedProfileData);
            console.log("프로필 이미지 업로드 및 데이터 업데이트 완료");
            profileImgElement.src = downloadURL; // 화면에도 이미지 업데이트
          } catch (error) {
            console.error("이미지 업로드 및 데이터 업데이트 에러:", error);
          }
        }
      });

      // 삭제 버튼 클릭 시 데이터 삭제
      const deleteButton = document.getElementById("delete-btn");
      deleteButton.addEventListener("click", async (event) => {
        const confirmDelete = confirm("정말로 이 데이터를 삭제하시겠습니까?");
        event.preventDefault();
        if (confirmDelete) {
          try {
            await deleteDoc(docRef);
            console.log("데이터 삭제 완료");

            window.location.href = "index.html";
          } catch (error) {
            console.error("데이터 삭제 에러:", error);
          }
        }
      });

      // 저장 버튼 클릭 시 Firestore에 데이터 업데이트 또는 새 문서 추가
      const saveButton = document.getElementById("save-btn");
      saveButton.addEventListener("click", async (event) => {
        event.preventDefault();

        const updatedProfileData = {
          profileImg: profileImgElement.src,
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
        };

        if (!documentId) {
          try {
            const newDocRef = await addDoc(collection(db, "database"), updatedProfileData);
            console.log("새로운 문서 ID:", newDocRef.id);
          } catch (error) {
            console.error("새로운 문서 추가 에러:", error);
          }
        } else {
          try {
            const docRef = doc(db, "database", documentId);
            await updateDoc(docRef, updatedProfileData);
            alert("데이터 업데이트 완료");
          } catch (error) {
            console.error("데이터 업데이트 에러:", error);
          }
        }
      });
    } else {
      console.log("문서가 존재하지 않습니다.");
    }
  } catch (error) {
    console.error("데이터를 가져오는 중 에러:", error);
  }
});
