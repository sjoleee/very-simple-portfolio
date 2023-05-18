


 
  ![vsp](https://github.com/sjoleee/very-simple-portfolio/assets/82137004/3a22ec87-cc1a-4862-9d6e-ae8e1317891f)
This project is licensed under the terms of the MIT license.
  <br />

# 📝 very simple portfolio

심플한 플랫 디자인의 정적 웹 포트폴리오/이력서 페이지를 제작할 수 있는 템플릿 프로젝트에요 🤗

  <br />

어려울 것 같다구요? 댓츠노노.</br>`markdown` 과 `json`만 작성할 줄 안다면, 손쉽게 만들 수 있어요!😇

  <br />
  
### 사용된 기술
`next.js` `typescript` `tailwind` `next-seo` `react-markdown`
  
  <br />

# 🧐 왜 만들었나요?

  <br />

> 🐢 문서 관리 앱을 이용해서 이력서 및 포트폴리오를 관리할 때, **조금 느리다고 생각하지 않았나요?**<br /><br />
> ☹️ 문서 관리 앱이 제공하는 **디자인이 마음에 들지 않았나요?**<br /><br />
> 📈 내 이력서가 얼마나 방문되었는지 **데이터를 알고싶지 않았나요?**<br /><br />
> 🔎 구글에서 내 이력서가 **검색되도록 만들고 싶지 않았나요?**


  <br />

저는 위와 같은 이유로 `Next.js`를 사용한 정적 웹 포트폴리오를 만들기로 결심했어요.<br />
그러다 문득, 다른 사람도 나와 똑같은 문제를 갖고 있을 거라는 생각이 들었습니다.<br />
그래서 저 뿐만 아니라 다른 사람도 사용할 수 있도록 **포트폴리오 템플릿**을 만들게 되었답니다 🤗<br />

<br />


# 🎨 디자인이 궁금해요!

제 포트폴리오도 `very simple portfolio` 를 사용해서 제작했어요. [👉👉 만든이 포트폴리오 보러가기 👉👉](https://www.sjoleee.info/)

> 🚨 **저는 애니메이션과 프로필 사진 등의 추가 작업을 해둔 상태에요.** 🚨<br />
> 🚨 **템플릿에는 애니메이션과 프로필 사진이 포함되어있지 않습니다!** 🚨

<br />

기본 디자인은 이런 느낌이에요 👀


https://github.com/sjoleee/very-simple-portfolio/assets/82137004/9d164f7d-cc24-4c9f-a52c-2487a2830a06

- ☀️ 개인적인 취향이지만, 라이트모드가 깔끔하니 괜찮아요. (다크모드도 대응은 되어 있습니다. 시스템 설정을 따릅니다.)
- 🌈 초록초록한 컬러가 메인인데, 수정할 수 있어요! **원하는 색으로 커스텀**하여 사용하세요.
- 📱 **반응형**으로 개발되어 있습니다.


  <br />

# change log

> `23.05.18` `project` `activity` `education` 의 `description` 항목에 `\n`을 입력하면 줄바꿈이 가능해졌어요.<br />
> (ex. "description": "줄바꿈\n줄바꿈")

<br />

# 🛠️ Usage

이제, 어떻게 만드는지 알아볼까요?


- [Setup](#setup)
- [data](#data)
- [resumeTitle](#resumetitle)
- [information](#information)
- [workExperience](#workexperience)
- [project](#project)
- [activity](#activity)
- [education](#education)
- [🚨필독🚨 COLOR](#color-변경하기)
- [SEO](#seo)
- [Vercel 배포하기](#vercel-배포하기)
- [Google Analytics](#google-analytics)

<br />
<br />
<br />
<br />

## Setup

<br />
<br />

**Step 1️⃣ `very simple portfolio` 를 클론해주세요.**
```
git clone https://github.com/sjoleee/very-simple-portfolio.git
```

<br />
<br />


**Step 2️⃣ 새로운 레포지토리를 만들어, 클론한 레포지토리를 넣어주세요.**

Github에서 새로운 레포지토리를 생성해주세요.


<img width="745" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/55b04e83-1a4c-4711-92c2-f01ef8dad570">

`…or push an existing repository from the command line` 내용을 복사하여 터미널에 그대로 붙여넣어주세요.

<img width="630" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/8805dc25-1268-4c9f-9481-bdd20b8851f5">


<br />
<br />


**- Step️ 3️⃣ 의존성을 설치해주세요.**
```
yarn
```
or
```
npm install
```

<br />
<br />

**- Step 4️⃣ next 개발 서버를 띄우고 확인하며 포트폴리오를 만드세요.**
```
yarn dev
```
or
```
npm run dev
```

<br />
<br />
<br />
<br />

## data

기본적으로, **포트폴리오를 구성하는 대부분의 데이터는 프로젝트 루트에 있는 `data.json`에 작성됩니다.**<br />
예시를 함께 살펴보도록 하죠! (아래 예시와 빈 템플릿인 `data.templete.json`가 루트에 작성되어 있으니 참고하세요!)

```json

{

// 포트폴리오 최상단의 제목으로 사용됩니다. 
  "resumeTitle": {
    "title": "Hong Gil Dong"
  },


// 자신의 인적사항에 대해 작성하는 곳입니다.
  "information": {
  
    // 이름을 적어주세요
    "name": "홍길동", 
    
    // 각종 링크를 걸어줄 수 있습니다. id 순서대로 나열됩니다.
    // 가장 대중적인 것 같은 3가지를 미리 작성해뒀어요. 더 추가하거나, 제거해도 됩니다.
    // 단, 이메일은 isEmail을 true로 작성해주세요.
    "contact": [ 
      { "id": 0, "name": "Email", "href": "honggildong@gmail.com", "isEmail": true }, // href에 이메일을 적어주세요.
      { "id": 1, "name": "Github", "href": "https://github.com/honggildong" }, // href에 깃허브 주소를 적어주세요.
      { "id": 2, "name": "Blog", "href": "https://velog.io/@honggildong" } // href에 블로그 주소를 적어주세요.
    ]
  },

// 직장 경력에 대해 작성하는 곳입니다.
// 각 직장별 데이터를 배열로 작성해주시면 되는데, 포트폴리오에서 배열 역순으로 배치됩니다.
// 따라서 오래된(예전) 경력을 앞에, 최근 경력을 뒤에 작성해주세요.
  "workExperience": [
    {
      "id": 0,
      "name": "커피프린스 1호점", // 직장명을 적어주세요.
      "position": "Front-end Engineer", // 담당 직무를 적어주세요.
      "period": ["2019. 01", "2019. 09"] // 언제부터 언제까지 일하셨는지 적어주세요.
    },
    {
      "id": 1,
      "name": "커피프린스 2호점",
      "position": "바리스타",
      "period": ["2022. 01", "now"] // 현재 재직중이라면, now나 working 등을 적어주세요.
    }
  ],


// 프로젝트 경험에 대해 작성하는 곳입니다.
// 직장 데이터와 마찬가지로, 배열 역순으로 배치됩니다.
// 오래된(옛날) 프로젝트를 앞에, 최근 프로젝트를 뒤에 작성해주세요.
// isTeam의 값에 따라서 팀 프로젝트와 개인 프로젝트 각각 나뉘어 보여집니다.
  "project": [
    {
      "id": 0,
      "name": "첫번째 팀 프로젝트", // 프로젝트명을 적어주세요.
      "description": "프로젝트에 대한 간단한 설명을 적을 수 있습니다. 어떤 프로젝트인지 주제나 강조하고 싶은 부분을 적어보세요.",
      "webUrl": "https://github.com/sjoleee/", // 릴리즈된 페이지나 앱스토어 등 원하는 웹페이지 링크가 생성됩니다. 없으면 제거!
      "repoUrl": "https://github.com/sjoleee/", // 깃허브 레포지토리 링크가 생성됩니다. 없으면 제거!
      "isTeam": true, // 팀 프로젝트와 개인 프로젝트를 구분합니다. 팀 프로젝트라면 true로 적어주세요.
      "period": ["2022. 07", "2022. 09"], // 프로젝트 기간을 적어주세요.
      "stack": ["사용한 기술을 적어주세요", "React.js", "JavaScript", "styled-components", "Recoil"] // 사용한 기술을 적어주세요.
    },
    {
      "id": 1,
      "name": "첫번째 개인 프로젝트",
      "description": "프로젝트에 대한 간단한 설명을 적을 수 있습니다. 어떤 프로젝트인지 주제나 강조하고 싶은 부분을 적어보세요.",
      "webUrl": "https://github.com/sjoleee/",
      "repoUrl": "https://github.com/sjoleee/",
      "isTeam": false,
      "period": ["2022. 10", "2022. 11"],
      "stack": ["JavaScript", "HTML/CSS"]
    },
  ],

// 각종 경험, 대회 등의 활동에 대해 작성하는 곳입니다.
  "activity": [
    {
      "id": 0,
      "name": "첫번째 활동", // 활동명을 적어주세요.
      "period": ["2022. 06", "2022. 08"], // 활동 기간을 적어주세요.
      "description": "첫번째 활동에 대한 간략한 설명"
    },
    {
      "id": 1,
      "name": "두번째 활동",
      "period": ["2022. 06", "2022. 08"],
      "description": "두번째 활동에 대한 간략한 설명"
    }
  ],
  
// 받았던 교육에 대해 작성하는 곳입니다.
// 수료한 부트캠프, 전공 등을 작성해주세요.
  "education": [
    {
      "id": 0,
      "name": "첫번째 교육", // 교육명을 적어주세요.
      "period": ["2013. 02", "2020. 02"], // 교육 기간을 적어주세요.
      "description": "첫번째 교육에 대한 간략한 설명"
    },
    {
      "id": 1,
      "name": "두번째 교육",
      "period": ["2013. 02", "2020. 02"],
      "description": "두번째 교육에 대한 간략한 설명"
    }
  ],

// 자격증에 대해 작성하는 곳입니다.
// 각종 자격증을 작성해주세요.
  "certificate": [
    {
      "id": 0,
      "name": "TOEIC 1000점", // 자격증의 이름과 점수 혹은 등급을 적어주세요.
      "date": "2019. 07. 28", // 취득 날짜를 적어주세요.
      "organizer": "ETS" // 주관처를 적어주세요.
    },
    {
      "id": 1,
      "name": "OPIC IH",
      "date": "2019. 07. 28",
      "organizer": "ETS"
    }
  ]
}


```

이렇게 `data.json` 를 작성하시면 됩니다.

근데, **`id`** 는 뭐냐구요?!<br /><br />
id는 **배열에서의 순서(index)** 라고 생각하고 작성해주시면 됩니다.<br />
뒤에서 나올 `markdown` 이나 `img` 파일과 각 항목을 매칭시켜주는 용도로 사용되니, **지우지 마세요!!**


그런데 `data.json` 을 빠짐없이 작성해도 채워지지 않는 영역들이 있을거에요.<br />
아래쪽에서 계속 설명할게요😇

<br />
<br />
<br />
<br />

## resumeTitle

<img width="961" alt="resumeTitle" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/ab36da7f-1f05-43df-b111-1fd7e732daf8">

포트폴리오 최상단의 제목이에요.<br />
사용하지 않으시려면 빈 문자열을 전달해주시면 됩니다!

```json

  "resumeTitle": {
    "title": "Hong Gil Dong"
  }

```


<br />
<br />
<br />
<br />

## information

<img width="960" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/add2d05c-0f75-4a05-ac78-aefee22db548">

인적사항을 보여주는 본문 최상단 영역이에요.


단, 스크린샷에서 보이는 `안녕하세요, 프론트엔드 개발자 홍길동입니다.` 문구는 **`data.json`에서 작성한 것이 아니에요.**<br />
**직접 코드를 수정**해야 합니다! 가장 먼저 보이는 제목이므로, 개인이 원하는 대로 취향껏 커스텀해주세요.
경로는 **`/src/components/Information/index.tsx`** 이며, **11번 라인**에 주석을 남겨두었어요.

혹은, 필요하다면 포지션만 수정해서 그대로 사용하시면 됩니다! ex) `안녕하세요, 백엔드 개발자 홍길동입니다.`

<img width="788" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/9434454e-53b8-44fc-8e34-5d0371025901">


```json

  "information": {
    "name": "홍길동", 
    "contact": [ 
      { "id": 0, "name": "Email", "href": "honggildong@gmail.com", "isEmail": true },
      { "id": 1, "name": "Github", "href": "https://github.com/honggildong" },
      { "id": 2, "name": "Blog", "href": "https://velog.io/@honggildong" }
    ]
  }

```

그런데, 스크린샷의 `ditto` 가사는 어디에 입력된 것일까요?🧐


해당 영역은 `Markdown` 을 사용해서 별도의 파일로 작성합니다.<br />
아무래도 문자열로 쭉~ 적는 것 보단 `Markdown` 을 사용하는게 더욱 보기도 좋고, 잘 정리할 수 있겠죠?😉 노션 처럼요!


`Markdown` 작성 위치는 **`/public/markdown/information/introduce.md`** 입니다.<br />
노션에 작성하듯 작성해주시면 됩니다!


<img width="359" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/2c61f196-f46d-4a0a-9ca9-c1d01280761b">

<br />
<br />
<br />
<br />

## workExperience

<img width="960" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/e66c3fc6-25bc-42ff-8867-bf713e989e52">

직장 경력을 보여주는 영역이에요.

data.json의 배열 역순으로 정렬됩니다.<br />
배열의 뒤쪽으로 갈수록 최신 경력을 추가할 경우, **새로운 경력을 추가할 때 이전 경력을 수정하지 않아도 되므로 이렇게 구성했어요.**

```json


  "workExperience": [
    {
      "id": 0,
      "name": "커피프린스 1호점",
      "position": "Front-end Engineer",
      "period": ["2019. 01", "2019. 09"]
    },
    {
      "id": 1,
      "name": "커피프린스 2호점",
      "position": "바리스타",
      "period": ["2022. 01", "now"]
    }
  ]

```

### markdown

그런데, Foo Team, Bar Team 등의 경력 상세 사항을 적을 수가 없죠?<br />
경력 상세 역시 `Markdown` 을 사용해서 작성합니다.<br />
아무래도 문자열로 쭉~ 적는 것 보단 `Markdown` 을 사용하는게 더욱 보기도 좋고, 잘 정리할 수 있겠죠?😉

`Markdown` 작성 위치는 **`/public/markdown/workExperience/[id].md`** 입니다.<br />
`data.json`에 기입한 id와 파일명을 매칭시켜주세요. 🤗

<img width="358" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/6b02d7f6-df01-4c73-9830-a6d590e40564">

### image

하나 더, 초록색 네모 자리에 이미지를 넣을 수 있어요!<br />
png 파일을 **`/public/images/workExperience/[id].png`** 경로에 저장해주세요. <br />
(선택 사항입니다. 이미지 파일 없이 텍스트로만 사용할 수도 있어요.)

이미지는 `png` 형식만 가능하며, `120px 이상의 정방형 이미지` 를 권장합니다!

<img width="362" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/4ea22fc8-92a9-402a-998b-5b92957f6724">



<br />
<br />
<br />
<br />

## project

<img width="960" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/807ef4e8-14d1-4e68-990a-9496bc55da63">

지금까지 진행했던 프로젝트를 보여줄 수 있는 영역이에요.

간략한 설명을 적는 `description`은 `\n`으로 줄바꿈이 가능합니다.<br />
`data.json`의 `project`에 작성하실때, **`isTeam: boolean`** 을 기입함으로써 팀 프로젝트와 개인 프로젝트를 나눠서 보여주게 구성했어요.<br />
`isTeam: true`인 항목끼리 팀 프로젝트에 배열 역순으로 보여지고, `isTeam: false`인 항목끼리 개인 프로젝트에 배열 역순으로 보여집니다.

```json
//간소화된 예시

  "project": [
    {
      "name": "팀 프로젝트 1",
      "description": "프로젝트에 대한 간단한 설명을 적을 수 있습니다.\n 어떤 프로젝트인지 주제나 강조하고 싶은 부분을 적어보세요.",
      "isTeam": true,
    },
    {
      "name": "개인 프로젝트 1",
      "isTeam": false,
    },
    {
      "name": "팀 프로젝트 2",
      "isTeam": true,
    },
    {
      "name": "개인 프로젝트 2",
      "isTeam": false,
    },
  ],

```

위 경우, 아래와 같이 배치됩니다.

> - Team Project
>   - 팀 프로젝트 2
>   - 팀 프로젝트 1
> - Personal Project
>   - 개인 프로젝트 2
>   - 개인 프로젝트 1

### markdown & image

직장 경력과 마찬가지로, `markdown` 으로 내용을 작성하며, `image` 를 사용할 수 있어요.<br />
markdown 경로는  **`/public/markdown/project/[id].md`** <br />
image 경로는  **`/public/images/project/[id].md`** 입니다.


<img width="361" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/94040844-5c8d-48bd-9ae4-4644c504da63">


<br />
<br />
<br />
<br />

## activity


<img width="960" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/25b4c229-d577-4bc7-89e7-2629e3660eb4">

대회, 수상, 해커톤 등 각종 경험을 작성하는 곳이에요.<br />
간략한 설명을 적는 `description`은 `\n`으로 줄바꿈이 가능합니다.<br />
여기는 `markdown` 이나 `image` 를 사용할 수 없습니다.<br />
**굳이 여기까지...?** 라는 생각에 간단한 설명 정도만 문자열로 출력하게 해두었는데, 필요하다면 `markdown` 및 `image` 를 사용할 수 있도록 업데이트해볼게요!<br />


```json

  "activity": [
    {
      "id": 0,
      "name": "첫번째 활동",
      "period": ["2022. 06", "2022. 08"],
      "description": "첫번째 활동에 대한\n 간략한 설명"
    },
    {
      "id": 1,
      "name": "두번째 활동",
      "period": ["2022. 06", "2022. 08"],
      "description": "두번째 활동에 대한 간략한 설명"
    }
  ],

```

<br />
<br />
<br />
<br />

## education

<img width="960" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/2ddbd623-21f9-4521-8d11-05e6353726d1">

전공, 부트캠프, 각종 교육에 대해 적어주세요.<br />
간략한 설명을 적는 `description`은 `\n`으로 줄바꿈이 가능합니다.<br />
위의 [activity](#activity)와 동일한 구성이라 넘어갑니다~ 휘리릭~ 😇


> 대충 더이상의 자세한 설명은 생략한다 짤

```json

  "education": [
    {
      "id": 0,
      "name": "첫번째 교육",
      "period": ["2013. 02", "2020. 02"],
      "description": "첫번째 교육에\n 대한 간략한 설명"
    },
    {
      "id": 1,
      "name": "두번째 교육",
      "period": ["2013. 02", "2020. 02"],
      "description": "두번째 교육에 대한 간략한 설명"
    }
  ],

```

<br />
<br />
<br />
<br />

## certificate


<img width="960" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/24b49321-9a49-4ff9-9e8b-366a2893aeb7">

각종 자격 증명에 대해 적어주세요. 자격 시험의 주관처도 입력해주세요.<br />
여기도 위와 거의 동일한 구성이라... 하핫... 😅


```json

  "certificate": [
    {
      "id": 0,
      "name": "TOEIC 1000점",
      "date": "2019. 07. 28",
      "organizer": "ETS" // 주관처를 적어주세요.
    },
    {
      "id": 1,
      "name": "OPIC IH",
      "date": "2019. 07. 28",
      "organizer": "ETS"
    }
  ]

```


<br />
<br />
<br />
<br />

## COLOR 변경하기

**🚨 반드시 컬러를 변경해주세요 🚨**


여러 사람이 너무나도 똑같은 디자인의 포트폴리오를 사용하게 된다면 그것도 문제겠죠?😉<br />
`tailwind` 의 `theme` 를 사용하여 편하게 컬러를 커스텀할 수 있도록 해두었으니 **꼭 변경해서 사용해주세요!**


프로젝트 루트 경로의 `/tailwind.config.js` 를 수정해주세요.<br />
검정, 흰색 계통의 모노톤은 폰트 컬러, 가로선, 배경색 등에 사용되고 있습니다. 굳이 변경하지 않아도 괜찮아요.<br />
`PRIMARY_LIGHT` `PRIMARY` `PRIMARY_HEAVY` `GRADIENT_FROM` `GRADIENT_TO` 5가지 색만 변경해주세요!

```js

...
theme: {
    extend: {
      // NOTE: 본 템플릿은 대부분이 모노톤으로 이루어져 있습니다. primary 컬러만 수정하여 사용하시는 것을 권장드립니다.
      colors: {
        GRAY_LIGHT: "#f1f3f5",
        GRAY: "#adb5bd",
        GRAY_HEAVY: "#868e96",
        GRAY_EXTRAHEAVY: "#495057",
        BLACK: "#212529",
        /**
         * @description selection(드래그 블록)에 사용되는 컬러입니다.
         */
        PRIMARY_LIGHT: "#c3fae8",

        /**
         * @description 자기소개의 이름 부분, code tag의 darkmode에 사용되는 컬러입니다.
         */
        PRIMARY: "#12b886",

        /**
         * @description code tag, link hover icon에 사용되는 컬러입니다.
         */
        PRIMARY_HEAVY: "#087f5b",

        /**
         * @description 페이지 최상단 gradient의 시작 컬러입니다.
         */
        GRADIENT_FROM: "#51cf66",

        /**
         * @description 페이지 최상단 gradient의 종료 컬러입니다.
         */
        GRADIENT_TO: "#0c8599",
      },
    },
  },

```

나는 어떤 색 조합이 좋은지 모르겠다! 고민이신 분들은 마음에 드는 메인 컬러 하나만 정하신 후, [어도비 컬러](https://color.adobe.com/ko/create/color-wheel) 에서 `유사` `음영` 으로 어울리는 색을 찾아보셔도 좋을 것 같아요😉
혹은, [어도비 컬러의 탐색 탭](https://color.adobe.com/ko/explore)에서 인사이트를 얻어보셔도 좋겠습니다.🌈

<br />
<br />
<br />
<br />

## SEO

이제 SEO를 향상시켜 볼까요?<br />
`very simple portfolio` 는 편한 SEO 설정을 위해 `next-seo` 를 설치해두었어요.


`/src/pages/_app.tsx` 경로의 `DEFAULT_SEO` 만 수정해주시면 됩니다!
각 옵션에 대한 정보는 [next-seo 문서](https://github.com/garmeeh/next-seo#nextseo-options)를 참고하세요!

```js


/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "홍길동 | Front-End Dev",
  description: "안녕하세요, 프론트엔드 개발자 홍길동입니다.",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "홍길동 | Front-End Dev",
    site_name: "홍길동 | Front-End Dev",
    images: [
      {
        url: "/share.png", // 카카오톡을 비롯한 공유용 이미지 경로 public/share.png에 원하는 이미지를 저장해주세요.
        width: 285,
        height: 167,
        alt: "홍길동 | Front-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "홍길동 | Front-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "홍길동 | Front-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

```





잊지말고 favicon도 설정해주세요! (탭의 조그마한 아이콘)<br />
`/public/favicon.ico` 경로에 ico 파일을 저장해주세요.<br />
원하는 이미지를 favicon으로 변환해주는 [realfavicongenerator](https://realfavicongenerator.net/)를 사용해보셔도 좋을 것 같아요.

![image](https://github.com/sjoleee/very-simple-portfolio/assets/82137004/a6341417-6ecb-4149-8c7a-8122bcfe6f23)

<br />
<br />
<br />
<br />

## Vercel 배포하기


Vercel은 클릭 몇 번으로 아주아주 편하게 프로젝트를 배포할 수 있는 배포, 호스팅 서비스에요.<br />
https://vercel.com/new 에서 github으로 로그인하신 후, 포트폴리오 레포지토리를 선택하여 배포해주시면 됩니다!

> 너무 편하다...!



<img width="1256" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/f0ab905d-5e62-4970-a681-dfa761781df9">



<br />
<br />
<br />
<br />

## Google Analytics

포트폴리오에 방문자가 몇명인지 궁금하지 않으셨나요?🕵️‍♀️<br />
간단한 GA 설정만으로 데이터 수집이 가능합니다!

<br />
<br />

**Step 1️⃣ Google Analytics에 가입해주세요.**

https://analytics.google.com/ 에 방문하여 가입을 진행해주세요.<br />
간단한 정보를 입력하고, 플랫폼을 웹으로 선택해주시면 아래와 같은 화면이 나옵니다.<br />

<img width="997" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/af2ee54f-583f-427e-b24b-ad108cedbc8e">

<br />

여기의 Vercel로 배포한 우리 포트폴리오의 url을 작성해줍니다.<br />
그럼 아래와 같이 `G-` 로 시작하는 **측정 ID** 를 제공해줄거에요.

<img width="399" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/39d2e158-f018-4d0d-8d1b-d17596de6c05">


<br />
<br />

**- Step 2️⃣ 코드를 작성합니다.**

프로젝트 루트 경로에 `/.env` 파일을 만들고 아래와 같이 작성해주세요. <br />
측정 ID를 환경변수로 사용하고, 외부로 노출되지 않도록 합니다. (gitignore는 이미 작성해두었어요!)

```

NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-0000000000' // 아까 받은 측정 ID를 입력해주세요.

```

<br />

이제, `/src/lib/gtag.ts` 폴더와 파일을 생성하고 아래와 같이 작성해주세요.<br />
GA에서 제공하는 태그입니다. 이 경우에는 페이지가 보여지면 집계될 수 있도록 하는 `pageview` 함수가 작성되어 있습니다.<br />
아마 에러가 발생할텐데, 계속해서 진행하시면 해결됩니다!

```js

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

interface GTagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: string;
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};


```

<br />

루트 경로에 `/environment.d.ts` 파일을 만들고 아래와 같이 작성해주세요.

```ts

namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
  }
}

```

<br />

타입스크립트 환경이므로 gtag의 타입을 설치해줍니다. > 제가 이미 설치해두었어요 😉

```
yarn add -D @types/gtag.js
```
or
```
npm install @types/gtag.js --dev
```

<br />

`/src/pages/_app.tsx` 에 다음과 같은 코드를 추가합니다.

```js

import * as gtag from "../lib/gtag";
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <DefaultSeo {...DEFAULT_SEO} />
      
      ... 후략

```



<br />
<br />

**- Step 3️⃣ Vercel에서 환경변수를 등록해주세요.**

아까 `.env`로 환경변수를 등록했지만, vercel에 따로 등록해주어야해요. (.env는 gitignore로 인해 깃에 포함되지 않아요)<br />
vercel에서 포트폴리오 프로젝트의 설정으로 들어간 다음, 아래 사진처럼 환경변수를 등록해주세요.

<img width="1260" alt="image" src="https://github.com/sjoleee/very-simple-portfolio/assets/82137004/1dac46fe-9028-4d29-aa60-55ce424e2539">


<br />
<br />

**- Step 4️⃣ GA 데이터 수집을 기다려주세요.**

GA가 열심히 데이터를 수집하여 며칠내로 데이터 조회가 가능해질거에요.<br />
https://analytics.google.com/ 에서 페이지 방문과 실시간 방문자를 볼 수 있게 될거에요!


그리고, 구글에 포트폴리오가 검색될 수 있도록 [구글 서치콘솔에 URL 색인 생성을 요청](https://support.google.com/webmasters/answer/9012289?hl=ko#request_indexing)하세요!

<br />
<br />

# Done

축하합니다! 포트폴리오를 만드셨군요!
👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍


버그나 개선 등의 의견은 언제든 환영입니다!
👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍


