# :pushpin: the Kingdom of gwakgwak

   
<img src="https://img.shields.io/badge/npm-v8.15.0-red?logo=npm">

>*Game, Board, signin/signup* 세 가지 주요 기능을 가진 웹사이트입니다.
>
## :space_invader: 프로젝트 소개
Node.js 웹 프레임워크와 mysql 데이터베이스를 연결하여 **CRUD** 기능을 중점으로 하였습니다.
<br>

## :date: 개발 기간
* 22.10.31 - 22.12.18
* Notion link => [the Kingdom of gwakgwak](https://www.notion.so/tbcow99/the-kingdom-of-06994dffed854b8db7affbe34eb1ae47)

<br>

-  가상환경 설정
```
- (선택사항)가상환경 설정
npm install nodeenv
nodeenv "가상환경 이름"
./"가상환경 이름"/scripts/activate
```
- 패키지 설치 및 웹 실행
```sh
npm install //package.json 생성됨
ts-node ./src/index.ts //웹 페이지 실행
```

### 🧑‍🤝‍🧑 MEMBER
 - 팀장 겸 팀원1 :  이은재 


### ⚙️ 개발 환경
- **Language**:  <img src="https://img.shields.io/badge/typescript-9cf?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-yellow?style=flat&logo=typescript&logoColor=white"/> 

- **IDE** : <img src="https://img.shields.io/badge/visual studio-blue?style=flat&logo=visualstudio&logoColor=white"/>
- **Framework** : <img src="https://img.shields.io/badge/node.js-green?style=flat&logo=node.js&logoColor=white"/>
- **Database** : <img src="https://img.shields.io/badge/mysql-skyblue?style=flat&logo=mysql&logoColor=white"/>
- **ORM** :   <img src="https://img.shields.io/badge/typeORM-orange?style=flat&logo=&logoColor=white"/>

## 📌 주요 기능
#### =>로그인 

#### =>회원가입 

#### =>게임 log 페이지

#### =>게임 페이지(메인) 

#### =>게시판 페이지 

#### =>게시판 업로드 페이지 


### 프로젝트 구조
```

node-rest
├─ .env
├─ .gitignore
├─ ormconfig.js
├─ package.json
├─ README.md
├─ src
│ ├─ controller
│ │ ├─ AdminController.ts
│ │ ├─ AuthController.ts
│ │ ├─ BoardController.ts
│ │ ├─ CommentController.ts
│ │ ├─ GameController.ts
│ │ ├─ ImageController.ts
│ │ └─ ModeratorController.ts
│ ├─ entity
│ │ ├─ Board.ts
│ │ ├─ Comment.ts
│ │ ├─ Game_log.ts
│ │ ├─ Image.ts
│ │ ├─ Role.ts
│ │ └─ User.ts
│ ├─ index.ts
│ ├─ middleware
│ │ ├─ AuthMiddleware.ts
│ │ └─ decodeToken.js
│ ├─ public
│ │ ├─ css
│ │ ├─ image
│ │ └─ js
│ ├─ router
│ │ ├─ admin.ts
│ │ ├─ auth.ts
│ │ ├─ board.ts
│ │ ├─ comment.ts
│ │ ├─ game.ts
│ │ ├─ game_log.ts
│ │ ├─ image.ts
│ │ ├─ index.ts
│ │ └─ moderator.ts
│ └─ views
│ ├─ board.ejs
│ ├─ create.ejs
│ ├─ edit.ejs
│ ├─ editor.ejs
│ ├─ footer.ejs
│ ├─ game.ejs
│ ├─ game_log.ejs
│ ├─ header.ejs
│ ├─ signin.ejs
│ └─ signup.ejs
├─ tsconfig.json
└─ venv

```

## :file_folder:참고문헌

