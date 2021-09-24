export const foodData = [
  {
    type: 0,
    items: [
      {
        id: 1,
        food_name: "우유",
        food_image: "food.jpeg",
        frez_type: 1,
        life: "2021-10-14",
        created_at: "2021-01-01",
        update_at: "2021_01-02",
      },
      {
        id: 2,
        food_name: "요구르트",
        food_image: "food1.jpeg",
        frez_type: 1,
        life: "2021-09-19",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
      {
        id: 3,
        food_name: "오렌지주스",
        food_image: "food2.jpeg",
        frez_type: 1,
        life: "2021-11-16",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
    ],
  },
  {
    type: 1,
    items: [
      {
        id: 4,
        food_name: "계란",
        food_image: "food3.jpeg",
        frez_type: 0,
        life: "2021-12-15",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
      {
        id: 4,
        food_name: "계란",
        food_image: "food3.jpeg",
        frez_type: 0,
        life: "2021-12-15",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
      {
        id: 5,
        food_name: "두부",
        food_image: "food4.jpeg",
        frez_type: 1,
        life: "2022-9-15",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
    ],
  },
  {
    type: 2,
    items: [
      {
        id: 6,
        food_name: "식빵",
        food_image: "food5.jpeg",
        frez_type: 0,
        life: "2021-8-15",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
      {
        id: 7,
        food_name: "스팸",
        food_image: "food6.jpeg",
        frez_type: 0,
        life: "2022-1-15",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
      {
        id: 8,
        food_name: "냉동만두",
        food_image: "food7.jpeg",
        frez_type: 2,
        life: "2022-1-15",
        created_at: "2021-01-01",
        update_at: "2021-01-02",
      },
    ],
  },
];

export const myRecipes = [
  {
    id: 1,
    title: "나물비빔밥",
    description: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
        recipe:
          "양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어 고슬고슬하게 밥을 짓는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000200_p02.jpg",
        recipe:
          "안심은 불고기 양념하여 30분간 재워 국물 없이 구워 한 김 식으면 한입 크기로 자른다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "청포묵은 고기와 비슷한 크기로 잘라 끓는 물에 데쳐내고 계란은 노른자와 흰자를 분리해 지단부쳐 곱게 채썬다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe:
          "콩나물과 숙주, 미나리는 데쳐서 국간장과 참기름으로 간하고, 고사리와 도라지는 참기름을 두른 프라이팬에 살짝 볶아놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/000300.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
  {
    id: 3,
    title: "잡채밥",
    description:
      "잡채밥 한 그릇이면 오늘 저녁 끝! 입 맛 없을 때 먹으면 그만이지요~",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/000400.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image: "",
        recipe: "당면은 따뜻한 물에 불려 적당한 길이로 자른다.",
      },
      { cookingNo: 2, image: "", recipe: "고기와 버섯, 채소는 모두 채썬다." },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "달군 팬에 기름을 두르고 고기와, 버섯, 당근, 고추, 호박을 볶다가 숨이 죽으면 부추를 넣는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe:
          "다진 파, 마늘, 생강을 넣고 소금과 통후추, 진간장을 넣어 간을 한 다음 당면을 넣어 볶아준다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe: "뜨거운 밥을 그릇에 담고 잡채를 얹어 낸다.",
      },
    ],
  },
  {
    id: 4,
    title: "콩나물밥",
    description:
      "다이어트에 으뜸인 콩나물밥. 밥 물 넣을때 평소보다 적게 넣는거 잊지마세요!",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/000600.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image: "",
        recipe:
          "쌀은 미리 씻어 불려놓고 콩나물은 씻어 소금물에 살짝 데쳐 놓는다.",
      },
      {
        cookingNo: 2,
        image: "",
        recipe: "쇠고기는 곱게 다져 파, 마늘, 진간장으로 양념하여 볶는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩나물 삶은 물을 냄비에 붓고 쌀을 앉혀 밥을 짓다가 끓으면 삶은 콩나물과 쇠고기를 얹어 뜸들인다",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "뜸이 들면 고루 섞어 그릇에 담고 양념장과 함께 낸다.",
      },
    ],
  },
  {
    id: 5,
    title: "흑임자죽",
    description:
      "검은깨를 갈아서 만든 고소함이 가득한 흑임자죽. 남녀노소 모두 사랑하는 맛!",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/001400.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image: "",
        recipe: "쌀은 충분히 불려서 소쿠리에 건져 놓는다.",
      },
      {
        cookingNo: 2,
        image: "",
        recipe: "깨는 깨끗이 일어 건져서 고소한 향이 나도록 볶는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "분쇄기에 쌀과 깨를 따로따로 넣어 물을 조금씩 넣어가며 갈아 고운 체에 밭친다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe:
          "밑이 두터운 냄비에 곱게 간 쌀과 물을 부어 나무주걱으로 저으며 끓인다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "냄비가 뜨거워 지면 갈은 깨를 조금씩 부어 멍울지지 않도록 가끔 저어주며 끓인다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "확 끓어오르면 불을 약하게 줄이고 잘 섞이도록 서서히 끓인다.",
      },
    ],
  },
  {
    id: 6,
    title: "오므라이스",
    description:
      "각종 채소를 계란 속에 꼭꼭 숨겨 편식하는 아이들도 맛있게 먹어요~",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/001800.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/001800_p01.jpg",
        recipe: "청피망, 홍피망, 양파, 오이, 당근은 잘게 다져 준비한다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/001800_p02.jpg",
        recipe:
          "프라이팬에 버터를 두르고 당근, 양파를 볶다가 양파가 투명해지면 남은 야채 재료를 넣고 볶는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "찬밥을 넣어 야채와 잘 섞은 후 소금, 후춧가루로 간을 약하게 맞춘다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe:
          "계란을 멍울 없이 풀어 소금, 후춧가루로 간하고, 반쯤 익으면 계란 중앙에 밥을 놓고 잘 감싸서 접시에 담는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "다시마와 멸치로 다시국물을 만들어 체에 거른 후 프라이팬에 육수 2컵을 넣고 쌈장을 잘 풀어 끓여준다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe:
          "팔팔 끓어오르면 전분가루를 넣어 농도를 되직하게 만든 후 오므라이스 위에 뿌려준다.",
      },
    ],
  },
  {
    id: 7,
    title: "감자수제비",
    description: "쫀득쫀득한 수제비와 담백한 맛의 감자가 이뤄내는 하모니!",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/001900.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image: "",
        recipe:
          "밀가루에 소금과 따뜻한 물을 넣어 말랑하게 반죽하여 젖은 면보에 싸 냉장고에 30분간 넣어둔다.",
      },
      {
        cookingNo: 2,
        image: "",
        recipe: "감자와 애호박은 도톰하게 반달썰기한다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe: "실파는 4cm 길이로 자르고 홍고추는 어슷썬다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "멸치는 장국을 끓여 국간장으로 간을 맞춘다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "국물이 끓어오르면 감자를 넣고, 반쯤 익으면 수제비 반죽을 얇게 뜯어 넣는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe:
          "호박을 넣어 파랗게 익으면 홍고추와 실파, 참기름을 넣고 불을 끈다.",
      },
    ],
  },
  {
    id: 8,
    title: "냉면",
    description: "더운 여름, 살얼음 동동 띄운 시원한 냉면 한그릇 생각나시죠~",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/002100.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image: "",
        recipe:
          "쇠고기는 삶아 건져 편육으로 썰고 국물은 식혀 기름을 걷어 육수로 준비한다.",
      },
      {
        cookingNo: 2,
        image: "",
        recipe:
          "동치미무는 길쭉하고 얇게 썰고 오이는 어슷썰어 소금에 20분 동안 절였다가 물기를 꼭 짜서 살짝 볶는다",
      },
      {
        cookingNo: 3,
        image: "",
        recipe: "배는 납작하게 썰고 계란은 삶아 반 가른다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe:
          "육수와 동치미국물을 섞어 소금과 설탕, 식초로 간을 맞춰 차게 둔다",
      },
      {
        cookingNo: 5,
        image: "",
        recipe: "냉면국수는 삶아 찬물에 비벼 빨듯이 헹군다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe:
          "대접에 면을 담고 편육과 무, 오이, 배, 계란을 얹은 후 육수를 부어 낸다.",
      },
    ],
  },
  {
    id: 9,
    title: "열무김치냉면",
    description:
      "맛있게 담근 열무김치에 냉면을 말아 먹어 보세요~ 새콤달콤 끝내줍니다!",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/002800.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/002800_p01.jpg",
        recipe: "열무는 다듬어 소금에 절여둔다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/002800_p02.jpg",
        recipe:
          "냄비에 물 1컵과 찹쌀가루 2큰술을 넣고 나무주걱으로 저어가며 약불에서 찹쌀풀을 쑨다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "볼에 물 4컵과 고춧가루 4큰술을 풀고 찹쌀풀을 넣어 간을 맞춘다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe:
          "③에 절인 열무와 어슷썬 고추, 채썬 파, 마늘, 생강을 넣고 버무려 열무김치를 담아 익힌다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "알맞게 익은 열무김치에 식초, 설탕, 소금으로 간을 맞추어 차게 둔다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe:
          "냉면을 삶아 그릇에 담고 열무김치를 부은 다음 겨자 갠 것을 곁들인다.",
      },
    ],
  },
  {
    id: 10,
    title: "만둣국",
    description:
      "만두를 예쁘게 만들면 이쁜 딸을 낳는다고 하죠? 가족들과 오손도손 맛있는 만두국 만들어 드셔보세요~",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/003500.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image: "",
        recipe:
          "김치는 소를 털고 송송 썰어 물기를 꼭 짜고 숙주는 삶아 물기를 뺀다",
      },
      {
        cookingNo: 2,
        image: "",
        recipe: "갈은 돼지고기나 갈은 쇠고기를 준비한다.",
      },
      { cookingNo: 3, image: "", recipe: "두부는 수분을 완전히 제거한다." },
      {
        cookingNo: 4,
        image: "",
        recipe: "양파, 마늘, 대파는 곱게 다져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "김치, 숙주, 갈은 고기, 다진 양파, 마늘, 대파에 참기름과 후춧가루, 소금으로 간을 한다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe:
          "밀가루 반죽을 하여 얇게 민다음 지름이 6cm 정도 되게 하여 그 안에 ⑤에서 만든 만둣속을 넣는다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image: "http://file.okdab.com/UserFiles/searching/recipe/000300.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image:
      "https://i.pinimg.com/564x/a0/8b/aa/a08baabc8c96076bb601715bb97630ed.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image:
      "https://i.pinimg.com/564x/10/50/96/105096c070b17b4cc7c45a77c75117e9.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image:
      "https://i.pinimg.com/564x/06/87/62/06876283a88cff2125f6672a3799a6ca.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image:
      "https://i.pinimg.com/564x/30/4b/a4/304ba4e8066e710deae9607f826f5cd6.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
  {
    id: 2,
    title: "오곡밥",
    description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
    main_image:
      "https://i.pinimg.com/564x/87/af/02/87af0213242fed2393be9c88816e6be6.jpg",
    foods: [
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
      { name: "재료", capacity: "1개" },
    ],
    steps: [
      {
        cookingNo: 1,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p01.jpg",
        recipe: "밥을 참기름으로 무쳐 그릇에 담고 준비한 재료를 고루 얹는다.",
      },
      {
        cookingNo: 2,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000300_p02.jpg",
        recipe: "차수수는 붉은 물이 안 나올 때까지 깨끗이 씻어 놓는다.",
      },
      {
        cookingNo: 3,
        image: "",
        recipe:
          "콩은 불려서 일어 건져놓고, 팥은 삶아서 건져놓고 삶은 물은 받아 놓는다.",
      },
      {
        cookingNo: 4,
        image: "",
        recipe: "차조는 씻어서 잘 일은 후 건져놓는다.",
      },
      {
        cookingNo: 5,
        image: "",
        recipe:
          "차조를 뺀 모든 재료를 고루 섞어 밥솥에 앉혀 놓고 팥 삶은 물에 소금(1/3작은술 정도)을 넣은 밥물을 붓는데, 밥물은 보통 짓는 밥물보다 20% 적게 붓는다.",
      },
      {
        cookingNo: 6,
        image: "",
        recipe: "밥이 끓기 시작하면 차조를 고루 얹어 뜸을 들인다.",
      },
    ],
  },
];

export const myPlanner = [
  {
    date: "2021-09-15",
    breakfast: {
      recipe_id: [1, 2],
      memo: [],
    },
    lunch: {
      recipe_id: [3, 4],
      memo: ["흑미밥", "아웃국"],
    },
    dinner: {
      recipe_id: [5, 6],
      memo: ["흑미밥", "아웃국"],
    },
  },
  {
    date: "2021-09-15",
    breakfast: {
      recipe_id: [1, 2],
      memo: ["흑미밥", "아웃국"],
    },
    lunch: {
      recipe_id: [4, 6],
      memo: ["흑미밥", "아웃국"],
    },
    dinner: {
      recipe_id: [1, 2],
      memo: ["흑미밥", "아웃국"],
    },
  },
];

// default => 유통기한 임박한 상품들을 우선 보여주기
// 선택도 가능하게 만들기

//식단짜기 => 필터를 해놓은 모든레시피 기반으로 레시피 추천하기
