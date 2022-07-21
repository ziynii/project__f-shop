
### ✨ 소개

open api인 Fake store를 이용해 만든 쇼핑몰 웹 사이트입니다

<br />

### ✨ Link

**🔗 github**

[https://github.com/ziynii/project__f-shop](https://github.com/ziynii/project__f-shop)

🔗 **project site**

[https://ziynii.github.io/project__f-shop/](https://ziynii.github.io/project__f-shop/)


<br />

### ✨ Skill

🔸 **React**

 React와 react-router-dom을 이용해 SPA 웹 어플리케이션을 제작했습니다

🔸 **TypeScript**

 타입스크립트를 이용해 타입에 대한 에러를 방지하고 가독성을 높였습니다

🔸 **Styled-Component**

 Styled-Component로 스타일 작업을 진행했습니다

🔸 **React helmet**

 React-helmet을 이용해 페이지 이동시 타이틀이 변경되도록 제작했습니다
 
🔸 **Recoil**

 recoil을 이용해 global state를 관리했습니다

🔸 **React-query**

 React-query를 이용해 서버 상태를 분리해 관리했습니다. 기존의 쓰던 방식은 state로 loading 상태와 data를 관리하는 것이었는데 useQuery 훅으로 반환받은 isLoading과 data를 사용하며 코드가 간결해지고 가독성이 높아지는 장점을 느꼈습니다

<br />


### ✨ Desktop

**🔸 홈**

  <img src="https://user-images.githubusercontent.com/85431762/180154474-ca554285-676c-4b33-b91c-42bbd9beb8b9.png" alt="초기화면" width="700px"/>
  
  **🔸 카테고리 전체보기**
  
  <img src="https://user-images.githubusercontent.com/85431762/180154770-410c9e99-1aa2-498a-bd6b-f59e134d5121.png" alt="회원가입" width="700px"/>
  
  **🔸 상품 상세페이지**
  
  <img src="https://user-images.githubusercontent.com/85431762/180154867-a3e6e5b0-40a6-42a6-9505-b3dfff325a05.png" alt="로그인" width="700px"/>

   
  **🔸 장바구니**
  
  <img src="https://user-images.githubusercontent.com/85431762/180155317-60cb4475-51a2-4eb1-90c4-87e7cab08855.png" alt="로그인" width="700px"/>


<br />

### ✨ Tablet




**🔸 홈**

  <img src="https://user-images.githubusercontent.com/85431762/180156707-a42e1013-f01d-40f7-9f52-2d739856739a.png" alt="초기화면" width="500px"/>
  
  **🔸 카테고리 전체보기**
  
  <img src="https://user-images.githubusercontent.com/85431762/180156790-0c507d64-07ff-41a7-8473-d610587a172e.png" alt="회원가입" width="500px"/>
  
  **🔸 상품 상세페이지**
  
  <img src="https://user-images.githubusercontent.com/85431762/180156889-3d8bce80-3ba4-45d7-8245-e76a51d9e14a.png" alt="로그인" width="500px"/>

   
  **🔸 장바구니**
  
  <img src="https://user-images.githubusercontent.com/85431762/180156953-0c6c377f-e098-42b1-8207-28f51663cc03.png" alt="로그인" width="500px"/>


<br />


### ✨ Mobile

**🔸 홈**

  <img src="https://user-images.githubusercontent.com/85431762/180155974-f9ce0273-b922-4a59-99ad-86f09a71960b.png" alt="초기화면" width="400px"/>
  
  **🔸 카테고리 전체보기**

  <img src="https://user-images.githubusercontent.com/85431762/180156045-c1e06083-4ac7-4101-9a23-dad9c982e3fc.png" alt="회원가입" width="400px"/>
  
  **🔸 상품 상세페이지**
  
  <img src="https://user-images.githubusercontent.com/85431762/180156169-8c941b73-2233-4fc7-8ea9-be45be3a0992.png" alt="로그인" width="400px"/>

   
  **🔸 장바구니**
  
  <img src="https://user-images.githubusercontent.com/85431762/180156226-ff861ace-7894-4210-9a15-bb689c8b9475.png" alt="로그인" width="400px"/>


<br />





### 🌟 Error & Solution

☑️ **배포 후 이미지 로딩**

**[ ERROR ]**

배포 과정에서 이미지가 불러와지지 않는 오류가 발생했습니다. 

**[ SOLUTION ]**

해결방법으로는 src 폴더로 이미지 파일을 이동시키는 것과 깃허브 페이지 주소를 이용해 절대경로로 이미지 경로를 설정하는 방법이 있었고, 저는 이미지 경로를 깃허브 페이지 주소를 이용한 절대경로로 설정하였습니다

☑️ **경로 변경시 스크롤 위치 초기화**

**[ ERROR ]**

경로 이동 시 스크롤이 맨 위로 가지 않는 현상이 발생했습니다. 

**[ SOLUTION ]**

 이를 해결하기 위해 useLocation의 pathname을 이용해 pathname이 변경될 때마다 스크롤이 (0, 0)으로 이동하는 컴포넌트를 만들었고 router 안에 위치시켰습니다.  [[🔗참고한 사이트]](https://v5.reactrouter.com/web/guides/scroll-restoration)
