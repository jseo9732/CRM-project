## 링크

https://y-fe-javascript-picture.vercel.app

## 제작 기간

2023/8/8 ~ 2023/8/18

## 사용 스택

- HTML
- SASS
- JavaScript
- webpack
- firebase

## 구현 기능

- 유저 등록, 수정, 삭제 (프로필 사진 포함)
- 이름으로 검색
- 직책 기준으로 유저 리스팅
- 프로필 사진 클릭 시 상세 정보 보기
- 모바일/PC 반응형

## 유저 플로우
<img width="1109" alt="스크린샷 2023-08-17 오후 12 45 39" src="https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/123650056/c1e6bb60-77e0-4665-a7a1-c5d6089fc140">


## [필수 요구사항]

- [x] “AWS S3 / Firebase 같은 서비스”를 이용하여 사진을 관리할 수 있는 페이지를 구현하세요.
- [x] 프로필 페이지를 개발하세요.
- [x] 스크롤이 가능한 형태의 리스팅 페이지를 개발하세요.
- [x] 전체 페이지 데스크탑-모바일 반응형 페이지를 개발하세요.
- [x] 사진을 등록, 수정, 삭제가 가능해야 합니다.
- [ ] 유저 플로우를 제작하여 리드미에 추가하세요.

* CSS
  - [x] 애니메이션 구현
  - [x] 상대수치 사용(rem, em)
* JavaScript
  - [x] DOM event 조작

## [선택 요구사항]

- [ ] 사진 관리 페이지와 관련된 기타 기능도 고려해 보세요.
- [ ] 페이지가 보여지기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 직원을 등록, 수정, 삭제가 가능하게 해보세요.
- [x] 직원 검색 기능을 추가해 보세요.
- [x] infinity scroll 기능을 추가해 보세요.
- [ ] 사진을 편집할 수 있는 기능을 추가해 보세요.

<details>
# :camera: 직원 사진 관리 서비스

직원들의 사진을 관리할 수 있는 사진 관리자 서비스를 만들어 보세요.

과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

## [과제 수행 및 제출 방법]

1. 현재 저장소를 로컬에 클론(Clone)합니다.
2. 자신의 본명으로 브랜치를 생성합니다.(구분 가능하도록 본명을 꼭 파스칼케이스로 표시하세요, git branch KDT0\_이름)
3. 자신의 본명 브랜치에서 과제를 수행합니다.
4. 과제 수행이 완료되면, 자신의 본명 브랜치를 원격 저장소에 푸시(Push)합니다.(main 브랜치에 푸시하지 않도록 꼭 주의하세요, git push origin KDT0\_이름)
5. 저장소에서 main 브랜치를 대상으로 Pull Request 생성하면, 과제 제출이 완료됩니다!(E.g, main <== KDT0\_이름)
6. Pull Request 링크를 LMS로도 제출해 주셔야 합니다.
7. main 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!
8. Pull Request에서 보이는 설명을 다른 사람들이 이해하기 쉽도록 꼼꼼하게 작성하세요!
9. Pull Request에서 과제 제출 후 절대 병합(Merge)하지 않도록 주의하세요!
10. 과제 수행 및 제출 과정에서 문제가 발생한 경우, 바로 담당 멘토나 강사에서 얘기하세요!

## [필수 요구사항]

- “AWS S3 / Firebase 같은 서비스”를 이용하여 사진을 관리할 수 있는 페이지를 구현하세요.
- 프로필 페이지를 개발하세요.
- 스크롤이 가능한 형태의 리스팅 페이지를 개발하세요.
- 전체 페이지 데스크탑-모바일 반응형 페이지를 개발하세요.
- 사진을 등록, 수정, 삭제가 가능해야 합니다.
- 유저 플로우를 제작하여 리드미에 추가하세요.

* CSS
  - 애니메이션 구현
  - 상대수치 사용(rem, em)
* JavaScript
  - DOM event 조작
  - LocalStorage 사용

## [선택 요구사항]

- 사진 관리 페이지와 관련된 기타 기능도 고려해 보세요.
- 페이지가 보여지기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- 직원을 등록, 수정, 삭제가 가능하게 해보세요.
- 직원 검색 기능을 추가해 보세요.
- infinity scroll 기능을 추가해 보세요.
- 사진을 편집할 수 있는 기능을 추가해 보세요.

## [화면 예시]

![Untitled (1)](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/38754963/5dda6755-2501-4af4-bc3e-b63a353c44c2)

![Untitled (2)](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/38754963/6c1805f1-2b00-453e-a729-2b483612726d)

## [흐름]

![Untitled](https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/38754963/e2934c05-26f6-4ef6-88d4-beed76aa007a)

</details>
