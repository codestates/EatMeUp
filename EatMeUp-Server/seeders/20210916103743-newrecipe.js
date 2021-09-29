"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          title: "나물비빔밥",
          description: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오곡밥",
          description: "정월대보름에 먹던 오곡밥! 영양을 한그릇에 담았습니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/000300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잡채밥",
          description:
            "잡채밥 한 그릇이면 오늘 저녁 끝! 입 맛 없을 때 먹으면 그만이지요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/000400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물밥",
          description:
            "다이어트에 으뜸인 콩나물밥. 밥 물 넣을때 평소보다 적게 넣는거 잊지마세요!",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/000600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "약식",
          description:
            "집에서도 쉽게 만들어 맛있게 먹을 수 있답니다. 어려워 마시고 만들어 보세요~!",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/000800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "호박죽",
          description: "호박죽 한 그릇이면 하루가 든든하답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/001300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "흑임자죽",
          description:
            "검은깨를 갈아서 만든 고소함이 가득한 흑임자죽. 남녀노소 모두 사랑하는 맛!",
          cooking_time: "25분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/001400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "카레라이스",
          description:
            "향긋한 카레향이 너무 좋지요. 누구나 좋아하는 만들기도 간편한 음식입니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/001600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오므라이스",
          description:
            "각종 채소를 계란 속에 꼭꼭 숨겨 편식하는 아이들도 맛있게 먹어요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/001800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자수제비",
          description:
            "쫀득쫀득한 수제비와 담백한 맛의 감자가 이뤄내는 하모니!",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/001900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "냉면",
          description:
            "더운 여름, 살얼음 동동 띄운 시원한 냉면 한그릇 생각나시죠~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/002100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "동치미막국수",
          description: "시원한 동치미에 쫄깃한 국수를 말아서 만들어보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/002400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "열무김치냉면",
          description:
            "맛있게 담근 열무김치에 냉면을 말아 먹어 보세요~ 새콤달콤 끝내줍니다!",
          cooking_time: "25분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/002800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소국수",
          description:
            "갖가지 야채를 듬뿍 넣어서 만든 요리로 출출할 때 간식거리로 아주 좋답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/002900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물국수",
          description: "해물로 시원한 국물에 국수를 말아 드셔보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/003000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "만둣국",
          description:
            "만두를 예쁘게 만들면 이쁜 딸을 낳는다고 하죠? 가족들과 오손도손 맛있는 만두국 만들어 드셔보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/003500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "다시마냉국",
          description: "철분과 무기질이 풍부한 다시마로 피부건강을 지켜보세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/003900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부국",
          description:
            "부드러운 두부로 맛나는 두부국을 끓여 단백함을 맛보세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/004200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부조개탕",
          description: "국물이 정말 시원해서 속풀이 식단으로도 안성맞춤!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/004400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "무맑은국",
          description: "고향의 맛을 느낄 수 있는 무국. 밥한그릇 뚝딱이죠!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/004600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "미역국",
          description:
            "미역국은 철분이 풍부하게 함유된 음식이라 여자들에게 특히 좋은 음식이라 하지요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/004700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "미역냉국",
          description:
            "더운 여름, 새콤달콤 시원한 미역냉국으로 입맛을 살려보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/004800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "생태국",
          description: "생태국에 콩나물을 넣어주면 시원함이 배가 됩니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "연어까르파치오",
          description:
            "독특한 바질향이 연어에 쏘옥~ 올리브오일로 한층 부드러운 연어회랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오이냉국",
          description: "아삭아삭한 오이와 새콤달콤한 냉국의 조화!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해산물샐러드",
          description:
            "시원한 해산물 샐러드~ 상큼한 레몬과 와인을 넣은 드레싱으로 깔끔하게~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "재첩국",
          description:
            "재첩은 해감을 잘 한다음 사용하셔야 해요. 그래야 깔끔한 맛을 낼 수 있어요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "구운감자와도미구이",
          description:
            "감자의 고소함과 도미의 담백함이 어울리는 너무나도 깔끔한 맛의 음식이예요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기산적",
          description:
            "고기와 버섯이 잘 어우러져 언제나 먹어도 질리지 않고 맛있어서 자주 생각나는 음식이죠~!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기양송이볶음",
          description:
            "쫄깃하고 부드러운 쇠고기와 양송이의 만남! 향도 맛도 일품이예요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/005900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "팥국수",
          description:
            "팥죽으로만 먹던 팥을 국수로 먹어보세요. 국수가 새롭게 느껴진답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/006000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "죽순표고버섯볶음나물",
          description:
            "향이 좋은 죽순과 표고버섯을 같이 볶아 보세요. 입맛 살리는 음식이 될거에요.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/006100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부추표고버섯볶음",
          description: "향긋한 부추와 표고버섯을 같이 볶아보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/006200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부드레싱과 채소샐러드",
          description:
            "두부의 부드러운 촉감이 너무 좋네요. 물론 몸에도 좋은 추천건강드레싱이예요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/006500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물무침",
          description: "아주 흔한 요리이지만,그 맛을 내는데도 비법이 있죠!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/006600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "우엉조림",
          description:
            "아삭한 우엉을 맛깔스러운 간장 양념으로 조려보세요~ 맛깔스러운 간단한 반찬, 만들어볼까요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/006900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "바질토마토두부샐러드",
          description:
            "샐러드를 더욱 상큼하게 만들어주는 참빛고운 포도씨유로 요리에 상큼함을 더해보세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/007100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "멸치볶음",
          description: "고소하고 짭잘한 멸치볶음 하나면 밥 한공기 뚝딱이죠.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/007300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈치무조림",
          description:
            "구이가 지겨우시다면 조림으로 즐겨보세요~ 무를 넣어 더 맛있습니다!",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/007600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭불고기",
          description: "닭고기로 만든 불고기! 간장양념이 맛있어요~",
          cooking_time: "35분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/007800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부다시마말이",
          description:
            "짭조롬하면서 단백한 두부다시다말이. 다이어트 음식으로 손색없지요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/008300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "팥칼국수",
          description: "구수하고 담백한 팥칼국수~  걸쭉한 팥국물이 딱이예요!",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/008600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물잡채",
          description: "당면 대신 콩나물로 잡채를 만들어볼까요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/008800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양배추말이찜",
          description:
            "양배추에 다진고기와 두부를 으깨어 넣어 맛있게 쪄서 먹기좋은 크기로 썰어보세요~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/009000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "마늘장아찌",
          description: "마늘장아찌, 입맛 없을 때 드셔보세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/009100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어불고기",
          description:
            "오징어로 불고기를 만들어 맛있게 드셔보세요~ 간단하면서도 쉽게 맛낼 수 있답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/009200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "생선탕수",
          description:
            "필수아미노산이 풍부한 생선을 탕수육에 응용해보세요. 생선을 못먹는 어린이들에게 더없이 좋답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/009400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈비구이",
          description: "영양 풍부한 갈비로 푸짐한 구이 한번 해볼까요?",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/009900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돈까스",
          description:
            "가장 흔한 요리를 가장 특별하게 먹을때 처럼 기분좋은 마음으로 돈까스를 만들어보세요!",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/010400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈비찜",
          description: "잔칫상에 갈비찜이 빠질 수 없죠!",
          cooking_time: "80분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/010500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "제육보쌈",
          description:
            "돼지고기로 보쌈요리를 해보세요... 배추속도 맛있게 양념하여 준비하구요",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/010700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "홍합꼬치구이",
          description:
            "쫄깃한 홍합을 좀 더 맛있게 드시는 법~~ 항상 먹는 음식에도 살짝만 변형을 주면 새로움이 느껴진답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "청국장찌개",
          description: "한국인의 입맛에 딱 맞는 구수한 청국장입니다!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "순두부찌개",
          description:
            "순두부의 연한 질감과 개운한 국물이 입안에서 술~술~넘어갑니다.",
          cooking_time: "25분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "동태찌개",
          description:
            "？끗이 손질한 생선을 넣어 시원한 동태찌개를 끓여보세요~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치찌개",
          description:
            "냉장고에 있는 김치로 얼큰한 김치찌개 끓여보세요. 김치는 단순한 듯 하지만 조리법에 따라 다양한 맛을 낼 수 있답니다.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩비지찌개",
          description:
            "구수한 냄새가 고향의 맛을 전해주네요. 옛날 엄마의 맛을 기억하면서 정성스럽게 끓여보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "북어국",
          description:
            "개운한 북어국은 해장용으로도~ 소화가 잘 안되 속을 진정시켜줄 때에도 모두 좋은 요리랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/011800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "유부초밥",
          description: "맛있게 조린 유부에 밥을 넣어 만든 초밥종류입니다",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/012000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오색주먹밥도시락",
          description: "오감만족 오색빛깔 주먹밥!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/012100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해파리냉채",
          description:
            "쫄깃한 해파리로 새콤한 냉채요리를 해보세요. 손님초대 요리로 손색없는 입맛 당기는 요리입니다.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/012400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "통배추김치",
          description: "우리 식탁에서 꼭 빠져서는 안될 것이 바로 배추김치죠.",
          cooking_time: "90분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/012700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "열무김치",
          description:
            "아삭하게 씹히는 열무김치, 잘 익힌 국물 맛이 탄산음료에 버금간답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/012800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오이소박이",
          description: "아삭하게 씹히는 오이와 맛있는 양념의 환상의 조화!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/012900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "나박김치",
          description:
            "향긋한 미나리를 나박김치에 넣어 향도좋고 맛도좋은 개운한 물김치 드셔보세요. 소화제가 필요없답니다.",
          cooking_time: "35분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "총각김치",
          description: "뜨거운 밥과 총각김치가 너무 잘 어울리지요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "굴깍두기",
          description:
            "무에 굴을 넣어 김치를 담궈보세요. 굴의 풍부한 영양과 무의 개운한 맛이 함쳐져 굴깍두기 하나로 밥 한그릇 뚝딱입니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "동치미",
          description:
            "동치미로 시원한 국물 내어 겨울철 야식으로 이용해보세요. 이보다 더 맛있을 순 없을겁니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갓김치",
          description:
            "물에 밥을 말아 갓김치를 얹어 먹으면 밥도둑이 따로 없답니다. 씁쓸한 맛이 매력인 갓김치! 만들어 보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽃게찌개",
          description: "알이 가득 찬 꽃게로 얼큰하고 시원한 탕요리를 해보세요~",
          cooking_time: "40분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자탕",
          description:
            "얼큰한 국물에 양념이 잘 베인 감자와 돼지고기가 입에서 술술 넘어갑니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "아구탕",
          description: "아구찜과는 또다른 매력, 아구탕 대령이오~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/013800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "조기매운탕",
          description:
            "조기로 구이요리만 하셨다구요? 이번에는 매운탕으로 끓여보세요. 조기의 또다른 맛을 느끼실 수 있답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/014000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "알탕",
          description:
            "씹히는 맛이 독특한 알이 듬뿍 들어간 얼큰하고 시원한 알탕!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/014100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "우거지된장찌개",
          description:
            "비타민이 듬뿍 들어있는 우거지를 이용한 구수한 찌개요리예요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/014300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "샤브샤브",
          description: "부담없이 먹을 수 있는 샤브샤브, 점심메뉴로도 좋습니다~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/014500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "국수전골",
          description:
            "입맛 없을 때, 전골냄비에 끓여낸 보글보글 국수전골! 서늘한 날씨에 좋습니다~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/014600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "낙지전골",
          description:
            "갖가지 재료를 듬뿍 넣은 시원한 전골요리로 저녁 식탁을 꾸며보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/014700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "선지국",
          description:
            "선지는 단백질이 풍부하고 철분이 많이 함유되 씹으면 고소한 맛과 영양이 그대로 전해진답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/015000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물국밥",
          description: "콩나물을 넣어 시원한 국밥 한뚝배기 하실래요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/015100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "곰탕",
          description: "곰탕, 이제는 집에서 끓여 더욱 깊은 맛을 내보세요.",
          cooking_time: "120분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/015500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "설렁탕",
          description:
            "쇠뼈를 푹 고아낸 뽀얀 국물 한 대접 먹으면 기운이 솟아납니다.",
          cooking_time: "90분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/015600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "도가니탕",
          description:
            "몸이 허하다고 느껴질때 도가니탕 한그릇으로 기운 챙기세요.",
          cooking_time: "180분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/015900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꼬리곰탕",
          description: "꼬리곰탕 한그릇이면 허했던 기력을 찾을 수 있죠.",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈비탕",
          description: "갈비탕으로 속을 달래보세요. 든든해집니다!",
          cooking_time: "175분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부추김치",
          description: "부추는 향도 좋고 맛도 달아, 김치로 담그면 맛있습니다.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "파김치",
          description:
            "파김치는 익으면 젖갈과 맛이 잘 어울려 든든한 밑반찬이 된답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "백김치",
          description:
            "백김치를 담궈 시원한 김치를 맛보세요! 고춧가루를 넣은 김치와는 또다른 시원한 맛이랍니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "깻잎장아찌",
          description:
            "？잎장아찌는 만들기도 쉬우며, 입맛없을 때 먹기 좋은 밑반찬입니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오이지장아찌무침",
          description:
            "아삭하게 씹히는 오이로 맛있는 오이장아찌 한번 만들어보세요.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/016600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩자반",
          description:
            "한 번 먹으면 고소한 맛과 톡톡터지는 씹는 맛이 입 안을 즐겁게 해준답니다.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/017500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기장조림",
          description: "장조림 하나면 간단하게 식사 준비 할 수 있지요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/017600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "연근조림",
          description: "연근이 아삭하게 씹혀요! 만들기도 아주 쉽지요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/017700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물파전",
          description:
            "각종 해산물이 들어간 해물파전! 바다향과 고소한 향이 그대로~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/017900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오이나물",
          description:
            "오이를 볶으면 아삭하면서도 고소한 맛이 나서 생채와는 또 다른 맛을 느낄수 있답니다.",
          cooking_time: "15분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/018200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "냉이된장찌개",
          description:
            "모시조개로 시원한 국물맛을 내고, 냉이로 향긋한 내음이 나는 냉이조갯국 만들어 보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/018400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "계란말이",
          description:
            "도시락 반찬의 단골메뉴이자 훌륭한 안주인 계란말이입니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/018500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭강정",
          description: "양념치킨보다 달콤하고 바삭한 닭강정. 손이 절로 가지요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/018600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "배추겉절이",
          description:
            "간단하면서도 입맛을 돋우는 반찬으로는 배추 겉절이가 최고지요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/019100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "더덕구이",
          description:
            "더덕을 양념해 구우면 향이 솔솔~ 입안이 즐거운 식사가 되지요.",
          cooking_time: "35분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/019200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자조림",
          description: "감자는 간장에 조리면 유난히 더 달고 맛있는것 같아요~~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/019500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "마른오징어조림",
          description:
            "마른 오징어를 맛있는 양념장에 버무리면 쫄깃함과 양념의 맛이 씹어도 씹어도 질리지 않아요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/019700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "죽순볶음",
          description:
            "쇠고기와 죽순은 궁합이 잘 맞는 음식이지요. 향이 좋은 죽순을 볶아 드셔보세요.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/019900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "호박전",
          description:
            "젊어서도 늙어서도 맛있는 호박! 애호박으로 고소한 전을 부쳐보아요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/020000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "탕수육",
          description:
            "가장 보편적인 요리방법으로 만든 탕수육입니다..달콤 새콤한 소스에 찍어먹는 고기튀김의 맛은..정말 언제나 맛있죠~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/020100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩국계란찜",
          description:
            "콩국물 베이스가 들어간 고소한 계란찜 한번 드셔보세요~ 영양도 듬뿍, 건강에도 OK!!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/020200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "불고기",
          description:
            "배에 재워 더 달콤하고 부드러운 불고기~ 오늘 저녁 어떠세요?",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/020500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부추전",
          description:
            "피를 맑게 해준다는 부추! 부추를 밀가루 반죽과 함께 섞어 노릇하고 바삭하게 구워낸 전요리랍니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/020700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지갈비구이",
          description:
            "돼지갈비를 양념에 잘 재워 채소에 싸 드셔보세요. 입안 가득 넣어도 계속 계속 들어갈거에요.",
          cooking_time: "50분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/021000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "모듬초밥",
          description:
            "여러가지 해산물을 이용해 초밥을 만들어보세요. 입도 눈도 즐겁운 식사게 될거에요~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/021200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽁치무조림",
          description:
            "통조림으로 간단하고 맛있게 요리하는 법! 통조림은 무조건 맛없다는 고정관념을 깨드리는 요리가 있어요~",
          cooking_time: "25분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/021900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치적",
          description:
            "김치의 아삭함과 개운함을 산적에서 느끼는 새로움~ 산적의 맛이 새로워집니다",
          cooking_time: "25분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/022300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "낙지볶음",
          description:
            "톡 쏘는 매콤한 양념에 쫄깃한 낙지를 살짝만 볶아보세요~ 술안주로도, 밥반찬으로도, 이보다 좋은 것이 없답니다!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/022700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부김치",
          description:
            "맛있게 익은 김치에 참기름, 깨소금 양념해서 따뜻한 두부와 함께 먹으면 담백하고 시원한 맛이 일품이죠.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/023000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오믈렛",
          description:
            "이쁜 오믈렛속에 숨겨진 밥을 떠먹는 재미! 한번 느껴보세요",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/024300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "롤케비지(양배추말이)",
          description:
            "고기로 속을 만들어 양배추로 돌돌 말아 찌면 양배추의 색다른 변신에 놀라실거에요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/025000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부미역냉채",
          description:
            "두부의 고소함과 미역의 씹는 맛이 어우러져 상큼 개운한 냉채~~!! 다이어트식으로 그만이지요!!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/025700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "중국식볶음밥",
          description:
            "중국요리는 센불이 가장 중요해요. 팬을 뜨겁게 달궈서 재빨리 볶아 주세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/026100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해장라면",
          description:
            "라면에 여러가지 야채를 넣어 만든 시원하고 푸짐한 메뉴입니다. 술 마신 다음날 스피드하게 먹으면 너무 좋아요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/026200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "국수계란말이",
          description: "국수를 계란에 담아 색다름을 더해보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/026500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽁치간장구이",
          description:
            "꽁치는 구이나 조림으로만 생각하셨죠? 간장양념을 발라가며 정성스럽게 구워보세요. 정말 맛있답니다~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/026900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자고추채볶음",
          description:
            "감자를 채썰어 노랗게 볶은다음 색깔이 이쁜 홍고추등을 넣어 볶아주면 아주 예쁘고 맛있는 볶음요리가 되지요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가는파잡채",
          description: "가는파로 잡채 요리한번 해볼까요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "묵과양념장",
          description:
            "담백한 도토리묵을 새콤한 양념장과 버무리면 그맛이 환상~ 많이 먹어도 살찌지 않아요!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어살튀김과소스",
          description:
            "고등어를 녹말가루에 묻혀 바삭하게 튀겨 맛있는 소스와 곁들이면 정말 놀라운 맛이납니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가지와마른새우무침",
          description:
            "가지와 새우를 같이 볶은다음, 맛있는 양념을 하여 만들었지요. 도시락 반찬에 안성맞춤이랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소말이샤브샤브",
          description:
            "담백하고 깊은 맛이나는 육수에 고기와 야채를 돌돌말아 살짝 익혀먹으면 입맛이 저절로 살아나요~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡갈비구이",
          description: "갈비 속에 떡이 들어있듯이 쫄깃쫄깃해서~ 떡갈비!",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/027800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "골뱅이무침",
          description:
            "간단하게 술상을 차릴때 새콤달콤한 골뱅이무침 하나면 OK!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/028600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부양념조림",
          description:
            "영양가 풍부한 두부에 간장소스를 곁들이세요. 두부요리는 남녀노소 좋아하는 메뉴입니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/028700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "육회",
          description: "싱싱한 육회는 회 못지않게 맛이 좋습니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/028800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "까르보나라스파게티",
          description:
            "깊고 진한 크림소스의 까르보나라 스파게티! 느끼하지 않고 부드럽습니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/028900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼계탕",
          description:
            "여름철 보양식의 대표음식 삼계탕! 시원한 국물과 쫄깃한 닭고기로 몸보신하세요~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/029400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "주먹밥",
          description:
            "피크닉에 빠져서는 안될 단골메뉴! 주먹밥으로 가족들과 가벼운 피크닉을 즐겨보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/029900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "유부계란찜",
          description:
            "유부에 넣어 달걀찜을 하면 도시락 반찬으로 모양도 예쁘고 맛도 있는 센스만점 반찬이 된답니다~",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/030000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "속채운감자",
          description: "찐 감자에 여러가지 재료를 넣어 속을 꽉 채운요리랍니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/030200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡갈비샌드위치",
          description:
            "인스턴트 샌드위치는 비만의 원인이랍니다. 직접 만들어 맛과 영양이 우수한 샌드위치로 건강을 챙기세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/030300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯덮밥",
          description:
            "향긋한 버섯으로 만드는 간단하고 폼나는 요리! 간장소스가 맛을 더해준답니다~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/030500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭고기수삼샐러드",
          description:
            "영양가 풍부한 닭고기와 수삼으로 고급스러운 샐러드를 만들어보세요. 즐거운 식사가 된답니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/030700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "컬리플라워해물샐러드",
          description:
            "컬리플라워를 준비하고, 여러가지 해물도 준비해놓습니다. 머스터드 드레싱과 멋진 조화를 이룹니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/030800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "과일샐러드",
          description: "향긋한 과일향이 너무 좋아요. 만들기도 참 쉽습니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/031000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "연어샐러드",
          description:
            "훈제연어에 양파와 케이퍼 얹어 드셔보세요. 짭짤하고 훈연한 향이 입맛을 자꾸 자극한답니다~",
          cooking_time: "10분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/031300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "시금치샐러드",
          description:
            "상큼한 시금치에 담백한 베이컨과 양송이와 가루치즈, 그리고 레몬드레싱.. 상큼함이 전해져요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/031500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소수프",
          description: "다양한 야채로 만든 영양만점 수프랍니다~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/032100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부대찌개",
          description:
            "햄과 갖은 재료로 푸짐한 부대찌개로 오늘 저녁상을 근사하게 차려보세요~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/032200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "곱창전골",
          description:
            "곱창으로 만든 얼큰한 전골요리로 가족들과 별식을 즐겨보세요~",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/032300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "아귀찜",
          description:
            "부드러운 아구살과 양념장이 어우러져 매콤 개운한 요리입니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/032400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오렌지건포도빵",
          description: "오렌지와 건포도로 만든 색다른 빵이랍니다.",
          cooking_time: "140분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/032800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼겹살채소말이",
          description:
            "누구나 좋아하는 삼겹살에 여러가지 야채를 돌돌 말아 드셔보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/033000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "배추속댓국",
          description:
            "배추를 넣어 구수하고 시원한 배추속댓국으로 속풀이하세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/033100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "송편",
          description: "추석에 빠지지 않는 명절 제일음식~!! 바로 송편이죠..",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/033400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "빈대떡",
          description: "맛있고 즐거운 요리, 막걸리와의 궁합은 최고이지요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/033700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "화양적",
          description:
            "여러가지 야채들을 색색별로 꼿은 화양적. 미각과 시각을 동시에 만족시키는 요리이죠.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/033800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "토란곰탕",
          description: "추석에 꼭 빠지지 않는 명절요리랍니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/033900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기전골",
          description: "쇠고기를 푸짐하게 넣어 만든 전골 요리랍니다~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/034300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어무조림",
          description:
            "자칫하면 비릴 수 있는 고등어를 무와 함께 조려보세요~ 매콤해서 밥과 잘어울려요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/034400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잡채",
          description:
            "잔칫상에 빠질 수 없는 잡채! 여러 가지 재료의 조화가 일품이예요~",
          cooking_time: "25분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/034600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쌈장",
          description:
            "쌈밥의 맛을 좌우하는 쌈장! 집에서 맛깔나게 만들어 드세요~",
          cooking_time: "10분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/035200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치채소볶음",
          description:
            "김치가 들어가서 한식스러운 음식이라고 생각하시죠?  사실은 중국식 고추잡채보다 더 개운한 중국요리랍니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/035700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭날개튀김",
          description:
            "닭부위중에서 가장 맛있는 날개로 맛있는 튀김요리를 해보세요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/035800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어순대",
          description: "오징어로 순대를 만든다? 아주 색다른 음식이죠.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/036000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "누룽지탕",
          description:
            "누룽지에 뜨거운 소스를 끼얹을 때 나는 찌지지직 소리가 포인트입니다.",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/036700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가래떡꼬치",
          description:
            "편식하는 아이에게도 몸에 좋은 파프리카와 브로콜리를 먹일 수 있는 신기한 떡꼬치!",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/036900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "찬밥지짐이",
          description: "남아있는 찬밥으로 맛있는 간식 만들어볼까요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/037200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "동지팥죽",
          description:
            "동지날이 되면 귀신이 싫어하는 붉은 것을 먹어 액땜을 한다고 하죠? 액땜도 하며 오랜만에 별식도 즐겨보세요~",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/037500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "팥타르트",
          description: "타르타에 팥을 넣어 만든 아주 색다른 음식이죠~",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/037700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고구마줄기볶음",
          description: "고구마줄기로 맛있는 볶음요리해볼까요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/038200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "어묵닭고기조림",
          description: "어묵안에 부드러운 닭고기 안심을 넣어서 만들었답니다",
          cooking_time: "35분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/038800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡국",
          description: "설날 아침 떡국먹고 한살 더먹기!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/039000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "절편",
          description: "절편에 모양을 다 낸 다음 손으로 꼭 참기름 바르셔야해요",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/039200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "수정과",
          description:
            "달콤한 곶감과 향긋한 계피향이 어우러져서 한국의 정서를 느끼게 해준답니다~",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/039800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "깐풍기",
          description: "바삭하게 튀겨서 맛있게 만들어보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/040000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "팥시루떡",
          description:
            "우리의 전통떡을 집에서 직접 만들어 보세요. 하트모양, 동그라미, 별모양으로 아이들의 호기심도 자극하구요.",
          cooking_time: "50분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/040200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부탕",
          description: "부드럽고 영양이 뛰어난 두부로 탕요리 해볼까요?",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/040600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기완자찜",
          description: "동글동글 고기를 완자 모양으로 빚어 찜 요리를 했답니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/040900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물잡채",
          description: "싱싱한 해물로 만든 잡채요리랍니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/041200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "맑은떡국",
          description:
            "다시마와 표고버섯으로 육수를 낸 맛있는 떡국 만들어보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/041700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "찰밥",
          description: "찹쌀과 팥을 섞어 만든 찰밥입니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/042500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물무밥",
          description:
            "무의 달짝지근한 맛이 어우러져서 맛있는 건강식 밥이죠. 다른 반찬 없이 압력밥솥에서 10분만 하면 끝!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/042600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "모듬쌈밥",
          description: "몸에 좋은 채소를 한입에~ 예쁘고 맛있게 먹자!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/043000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "달래된장찌개",
          description:
            "구수한 된장찌개에 상큼한 달래가 들어가 향긋한 달래된장찌개!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/043100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쑥버섯볶음",
          description: "쑥의 향과 버섯의 쫄깃한 맛이 한층 어우러진 요리!",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/043600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭고기명란튀김",
          description: "닭고기와 명란을 튀긴 요리랍니다",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/044500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "봄동바지락볶음",
          description:
            "봄동과 바지락의 조화! 조금 생소하시죠? 일단 한 번 먹어보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/044600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치동그랑땡",
          description:
            "몸에 좋은 두부와 김치와 감자를 이용해 동그랑땡을 만들어 보아요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/044700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "찬밥맛탕",
          description:
            "밥으로 맛탕을 한다!! 생소하시다구요? 한번 도전해 보세요 찬밥도 해결하고 맛있는 간식도 먹고 1석2조!!^^",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/045800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양배춧국",
          description: "담백한 된장국에 양배추와 모시조개가 풍덩~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/046100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어찌개",
          description: "오징어로 간단하게 찌개요리 해보세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/046800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오이피클",
          description: "새콤달콤,아삭아삭 씹는 맛이 좋은 피클",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/046900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "영양돌솥밥",
          description: "보기만해도 영양가 풍부한 돌솥밥이랍니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "시금치된장국",
          description: "시금치와 새우로 맛을 내고 된장으로 간을 해보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치채소쌈",
          description:
            "김치와 야채에 쇠고기볶음밥을 올려 돌돌 말아 만드는 간편하고 맛있는 김치채소쌈!! 오늘 저녁메뉴로 어떠세요?",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "찰밥주먹밥",
          description: "찰밥으로 한입에 쏙 먹을 수있는 주먹밥 만들어볼까요?",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "계란말이주먹밥",
          description: "계란안에 밥을 넣어 돌돌 말아 말아~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "어묵국",
          description:
            "아이들이 좋아하는 어묵으로 만드는 간단하고 시원한 어묵국!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "조개맑은국",
          description: "해감을 잘 시킨 조개로 시원한 맑은 국 한번 끓여보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/047900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "왜된장국",
          description:
            "일본식 구수한 된장국 한번 끓여볼까요? 도시락에 잘 어울려요!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/048000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "새우만두",
          description: "새우로 색다른 만두를  만들어보세요!",
          cooking_time: "40분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/048300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잣죽",
          description: "부드럽고 든든한 죽 한 그릇, 어떠세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/048400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고추장아찌",
          description: "맵지 않은 청고추로 맛나는 장아찌 한 번 담가볼까요",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/048800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치어묵",
          description:
            "집에서 만드는 어묵요리. 김치를 넣어서 느끼하지 않고 담백하게 만들 수 있어요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/048900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기무국",
          description: "쇠고기무국에 제일 중요한것은 바로 무의 선택이죠",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/049400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "명란젓찌개",
          description:
            "명란은 익으면 표피가 줄어들고 단단해지므로 반드시 칼집을 넣어 사용하세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/049900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "육개장",
          description: "육개장에는 얼큰한 국물맛을 내는것이 제일 중요해요.",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/050000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고추장스파게티",
          description:
            "크림이 아닌 고추장 스파게티! 생소하시죠? 일단 한 번 드셔보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/050100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물전골",
          description: "풍성한 해물로 식탁을 차려보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/050900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양상추튀김",
          description:
            "비타민 풍부한 양상추 속에 갖가지 야채를 넣어서 튀겨보세요. 영양가 풍부한 맛있는 요리가 탄생합니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/051400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "초교탕",
          description:
            "부드럽게 깊은 맛을 내는 초교탕. 영양가 많은 초교탕으로 더운여름 이열치열식으로 몸챙기세요!",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/051600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼겹살깻잎전",
          description:
            "돼지고기의 누린 내가 싫으시다구요? 걱정마세요! 향긋한 깻잎에 싸서 전을 부치면 매우 향긋하답니다~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/052200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "우유두부",
          description: "우유로 두부를 만들 수 있다구요?",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/052400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭꼬치구이",
          description: "닭꼬치구이!! 술안주에 그만이죠^^",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/052700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "녹차수제비",
          description: "녹차를 넣으면 향이 더욱 좋답니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/052800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼겹살치즈구이",
          description:
            "어른들이 좋아하는 메뉴 삼겹살! 치즈를 얹어 아이들도 함께 즐겨보아요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/052900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈비떡볶이",
          description: "갈비와 떡으로 만든 떡볶이!! 정말 맛있어요^^",
          cooking_time: "40분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/053100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어산적",
          description: "오징어로 산적 요리 해볼까요?",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/053200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부오믈렛",
          description:
            "계란과 부드러운 두부로 맛있는 오믈렛 만들어보세요~ 간편하면서도 근사한 요리가 된답니다!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/053300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잼(사과, 딸기, 포도)",
          description: "여러가지 잼이 있으면 빵을 더 맛있게 먹을 수 있어요!",
          cooking_time: "30분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/053600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "사골탕",
          description: "영양가 풍부한 사골로 국물을 내세요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/054000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자국수",
          description:
            "감자로 국수를 만들수 있어요. 약간 번거롭기는 하지만 감자로 만든 국수가 어찌나 쫄깃쫄깃한지 별미로 한 번 만들어 드셔보세요!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/054300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치수제비",
          description: "따끈따근한 국물에 쫄깃한 수제비~ 한번 만들어보세요",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/054600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오곡밥쌈밥정식",
          description:
            "구수한 쌈장에 영양가 풍부한 오곡밥을 곁들여 고향을 맛을 느껴보세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/054700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어숙회",
          description: "오징어을 익혀서 초고추장에 찍어드세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/054900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "짬뽕해물탕밥",
          description:
            "얼큰하게 고춧가루를 넣어 영양가 풍부한 해물을 넣어 맛있게 만들어보세요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/055100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "제육배추찜",
          description:
            "배추에 갈은 돼지고기를 넣어 모양있게 돌돌 말았답니다~ 고기 육수로 맛나게 국물을 내어 찜요리를 해보세요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/055200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "코다리찜",
          description: "코다리찜, 밑반찬으로 그만이죠!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/055800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "생선초밥",
          description:
            "싱싱한 생선을 새콤달콤 양념한 밥위에 올려 먹으면 훌륭한 일식 초밥이 되는거지요~ 정말 신선합니다!",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/055900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯만두전골",
          description: "푸짐한 버섯만두 전골로 오늘 저녁 어떠세요?",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/056100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물밥전",
          description: "해물을 전으로 부쳐 먹어보아요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/056700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부스테이크",
          description: "몸에 좋은 두부로 스테이크를 만들어보세요~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/056900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부카나페",
          description:
            "한입에 쏘옥 먹을 수있는 까나페를 두부로 만들어보세요. 두부의 부드러운 맛이 입안에서 살살녹는답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/057100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "홍차계란장조림",
          description: "계란 장조림에 홍차를 넣으면 향과 맛이 아주 깊어져요!",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/057300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가지된장찜",
          description: "구수한 된장 양념에 가지를 조려보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/057500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭고기카레튀김",
          description: "닭고기와 카레의 환상조합!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/057900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고춧기름",
          description: "고추기름을 만들때는 불조절을 잘 해야 해요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/058300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "생태매운탕",
          description:
            "얼큰하고 시원한 생태매운탕! 시원한 국물맛에 보들보들한 생태살이 입에서 살살 녹아요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/058400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부굴찌개",
          description:
            "두부와 시원한 맛을 내는 굴을 같이 넣어보세요~ 시원함이 배가됩니다!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/058600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯두부찌개",
          description:
            "몸에 좋은 버섯과 두부가 들어간 얼큰한 찌개로 오늘 저녁밥상 차려보세요~ 남편이 좋아해요!",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/059300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치주먹밥",
          description: "김치로 느끼함을 제거한 주먹밥을 즐겨보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/060300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "홍합탕",
          description: "싱싱한 홍합으로 끓인 홍합탕! 정말 시원해요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/060400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지갈비찜",
          description:
            "잔칫상에 빠질 수 없는 갈비찜! 이번에는 돼지갈비를 매콤하게 즐겨보세요~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/061100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡볶이",
          description: "한국의 대표분식 떡볶이! 남녀노소 좋아해요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/061400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "제육불고기",
          description: "밥반찬에, 술안주에 너무 좋은 메뉴랍니다~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/061500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "배추밤김치",
          description:
            "잘 절인 배추속에 양념장 솔솔 버무린 밤을 넣어서 만든 고급 김치입니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/061900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "보쌈김치",
          description: "김장 때면 빠질 수 없는 보쌈김치!",
          cooking_time: "180분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/062000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "사골우거지탕",
          description:
            "고향의 어머니 손맛을 느낄 수 있어요. 잘 우려낸 사골국물에 고소한 우거지까지! 바로 이맛이야~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/062200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "찬밥전",
          description:
            "찬밥이 남았다구요? 참치와 갖은 채소를 다져서 전으로 만들어 보세요! 아이들이 좋아해요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/062400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "단팥죽",
          description:
            "팥을 부드럽게 삶아 으깨서 만든 달달한 단팥죽! 간식으로 좋아요~",
          cooking_time: "50분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/062500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "불고기낙지전골",
          description:
            "얼큰한 국물속에 쫄깃한 낙지와 담백한 불고기가 어우러져 있는 전골요리 어떠세요?",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/063100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잔멸치된장볶음",
          description:
            "오늘도 반찬이 고민되시나요? 멸치를 볶아 놓으면 며칠 동안은 밑반찬 걱정 없이 지낼 수 있어요..",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/063400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "별미밥",
          description: "이름도 별난 별미밥으로 별식을 즐겨보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/063500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치피자",
          description:
            "김치는 싫어하지만 피자는 좋아하는 우리 아이들을 위해 색다른 퓨전 요리를 준비해 봤어요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/063600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소비빔소면",
          description:
            "채소랑 소면이랑 만났어요.  새콤달콤한 고추장에 비벼서 맛있게 드세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/063700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어탕수",
          description:
            "탕수육의 변화된 맛을 원한다면 영양가 만점인 오징어를 반죽해서 탕수육 소스에 버무리면 되지요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/064200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물버섯덮밥",
          description:
            "향긋한 버섯향과 아삭한 콩나물이 들어간 덮밥을 양념장으로 슥슥 비벼 드셔보세요~ 입맛이 확! 살아 난답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/064400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "어묵꼬치",
          description:
            "겨울철과 가장 잘 어우리는 음식이랍니다. 따뜻한 국물에 시원한 맛이 정말 끝내줍니다~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/065100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭다리굴소스볶음",
          description:
            "부드러운 닭다리의 살을 바라 굴소스에 볶아보세요~ 굴소스의 진한 맛이 정말 색다르답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/065300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "영양채소밥",
          description: "영양이 듬뿍! 한끼 식사로 아주 아주 든든하지요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/065400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "사색나물",
          description:
            "나물종류를 쉽게 만들어보세요. 반찬이 없을때 준비해둔 나물로 비빔밥을 해서 드셔보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/065700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡잡채",
          description: "떡으로 만든 잡채의 맛. 아이들 간식으로 좋겠죠?",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/065800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부채소냉채",
          description:
            "영양가 풍부한 두부로 만든 냉채를 집에서 손쉽게 준비해보세요. 고소한 땅콩소스를 곁들여 준비하세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/066000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "약과",
          description: "달달하게 입맛 당기는 약과..오늘 한번 도전해보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/066400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "참치주먹밥",
          description: "참치 주먹밥 싸서 소풍을 떠나보아요~^^",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/066600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "유부미역된장국",
          description:
            "일본식된장국에 유부와 미역을 넣어서 색다른 맛을 느껴보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/066800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼색수제비",
          description:
            "야채즙으로 반죽해서 잼있게 만들어 보세요.. 먹는 즐거움, 보는 즐거움.. 아이들이 잘 안먹는 야채를 이용한 수제비입니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/067000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고들빼기김치",
          description: "고들빼기의 향이 아주 일품인 고들빼기 김치!",
          cooking_time: "70분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/067700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "달래굴파전",
          description:
            "향긋한 달래와 싱싱한 굴을 넣은 아주 맛있는 파전을 만들어보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/067800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "달래장김치",
          description:
            "입맛 없을 때 달래로 만든 김치하나면 반찬 걱정이 없어요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/067900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두릅된장무침",
          description:
            "구수한 된장에 두릅을 오물조물 무쳐보세요. 정말 구수하답니다!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/068200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "숙주미나리무침",
          description:
            "향긋한 미나리와 숙주를 함께 무쳐보세요. 정말 입맛이 새록새록 살아납니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/068300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "참나물고추장무침",
          description:
            "우리 입맛에 맞는 고추장 소스에 아삭한 참나물을 무쳐보세요. 밥 반찬으로 너무 좋아요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/068500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어통구이",
          description:
            "오징어에 칼집을 촘촘히 넣어 만들었답니다. 매콤한 고추장 소스를 만들어 쓰윽 발라가며 맛있게 구워보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/068600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭고기콩나물덮밥",
          description:
            "콩나물만 넣으면 심심하니까! 고소한 닭가슴살을 곁들여 고추장에 비벼비벼~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/069600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치두부쌈",
          description:
            "납작한 돼지고기위에 두부를 얹고 그위에 신김치를 얹어서 먹어보세요. 배가 든든해 져요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/069800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "호박두부찌개",
          description:
            "추운 날씨에 호박두부 찌개를 보글보글 맛있게 끓여보세요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/069900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해파리해물냉채",
          description:
            "싱싱한 해파리와 새우 등의 해물을 겨자 소스에 맛있게 무쳐보세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/070100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치킨롤",
          description:
            "담백한 닭살에 아삭한 채소를 넣어 김밥모양처럼 돌돌 말아 보세요~한입에 쏙!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/070700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "아스파라거스새우볶음",
          description:
            "갖가지 야채를 넣어서 기름에 살짝 볶은 향이 진하고 맛이 부드러운 요리랍니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/071200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽃만두국(완당국)",
          description:
            "예쁘게 만두를 빗어 보세요.. 만두소는 부드로게 만드시구요..",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/071400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지고기표고볶음",
          description:
            "표고버섯의 향이 은은하게 퍼지는 맛있는 볶음요리를 해보세요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/071500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어풋마늘산적",
          description:
            "오징어의 색다른 변신! 한번 맛 보면 그 맛을 잊을수 없답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/071600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "상추겉절이비빔밥",
          description:
            "상추 겉절이를 손쉽게 만들어 밥에 넣어 비벼드세요. 입맛이 새록새록!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/071700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부알찜",
          description:
            "부드러운 두부에 여러가지 재료를 다양하게 넣어 맛있게 찜요리를 해보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/071800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "연어양상추쌈",
          description:
            "붉은 연어를 양상추에 싸서 멋드러지게 요리해보세요. 정말 훌륭한 술안주이지요.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/072100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "브로콜리크림수프",
          description: "몸에 좋은 브로콜리를 부드러운 수프로 즐겨보세요~",
          cooking_time: "30분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/072200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물떡꼬치",
          description:
            "싱싱한 해물을 떡이랑 같이 꼬치에 끼워 요리했답니다. 보기만 해도 침이 꿀꺽!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/072500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "옥수수볶음밥",
          description:
            "간단하게 먹을수 있는 볶음밥이예요. 여러가지 채소를 첨가해 보세요.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/072900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치꽁치조림",
          description:
            "통조림과 신김치만 있으면 금방 만들수 있어서 아주 편리하죠.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/073500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치즈돈까스",
          description: "바삭하게 튀긴 돈까스에 쫀득한 치즈 맛이 더했답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/073600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "간장떡볶이",
          description:
            "고추장이 아닌 간장으로 맛을 낸 궁중식 떡볶이! 맵지 않아 아이들도 잘 먹어요~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/073800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "한국식타코샐러드",
          description:
            "춘권피에 맛있는 샐러드를 듬뿍 담았습니다. 한입 크기에 딱 어울리는 안주랍니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/073900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치쌈밥",
          description: "신김치만 남았을 때! 김치쌈밥으로 해결하세요~",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/074000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잔치국수",
          description: "출출할때 간식거리로 야참으로도 부담스럽지 않아요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/074300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자그라탕",
          description:
            "치즈의 고소함과 감자의 부드러움이 어우러진 아주 맛있는 요리랍니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/074400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "코다리조림",
          description:
            "코다리를 맛있게 조려보세요. 밑반찬 뿐만 아니라 아주 좋은 술안주도 될수 있지요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/074900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치킨데리야끼",
          description:
            "맛있게 볶아만든 밥에 데리야끼 소스를 맛있게 한접시 먹음직스럽게 담아보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/075500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "순대볶음",
          description:
            "군것질로 가장 많이 선호하는 순대를 집에서 볶아 드셔 보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/075700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭갈비",
          description:
            "춘천닭갈비를 그대로 옮겨 놓은듯한 양념의 비법이 여기에 있지요. 춘천닭갈비를 그대로 옮겨 놓은듯한 맛!",
          cooking_time: "25분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/076300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "베이컨꼬치구이",
          description: "베이컨에 여러가지 재료를 넣어 꼬치구이를 했답니다.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/076600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "열무비빔밥",
          description:
            "잘 익은 열무김치에 고추장 양념으로 더이상 말이 필요없죠?",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/076800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "다시마볶음",
          description: "다시마를 볶아 다이어트식으로 즐겨보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/077400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯잡채밥",
          description:
            "잡채에 가지런히 채썬 버섯을 넣어 맛있게 오물조물 무쳐서 밥위에 끼얹으면?",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/077500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쑥브리오슈",
          description: "막대모양이 조금 찌그러 져도 멋진 쑥브리오슈.",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/077800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "된장깻잎장아찌",
          description: "깻잎 장아찌 하나면 밥 한그릇 순식 간에 뚝딱!!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/078000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "비빔쌀국수",
          description:
            "쌀국수를 맛있게 월남식으로 비벼보세요. 흔히 먹는 비빔국수의 맛에 특별함을 더한 요리이지요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/078200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "아욱국",
          description: "시원한 아욱으로 국을 끓여 오늘 저녁식사로 어떠세요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/078300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "라볶이",
          description:
            "라면의 색다른 변신을 원하신다면 지금 한번 도전해 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/078500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어김치조림",
          description:
            "얼큰한 김치에 양념을 풍부하게 하여 고등어와 같이 조려보세요. 밥 한 그릇이 생각나는  요리입니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/078800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "류산슬",
          description: "녹말물을 풀어서 걸죽하게 만들어 먹는 요리랍니다..",
          cooking_time: "40분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/079400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "바지락볶음",
          description:
            "바지락을 볶아보세요. 완전히 해감시킨 후에 볶아야 모래가 씹히지 않아요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/079500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가지쇠고기볶음",
          description: "가지랑 쇠고기가 만나서 최고의 밥반찬이 탄생했어요!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/079800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯청국장찌개",
          description:
            "구수한 청국장에 영양가 많은 버섯을 넣어 고향맛이 느껴지는 요리를 해보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/080000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부추부침개",
          description: "비오는 날 생각나는 부침개!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/080200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "냉고기쌈",
          description: "손님 접대용으로 좋아요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/080500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치킨버섯찜",
          description: "이젠 닭을 튀기지 말고 쪄보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/080700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "새송이산적",
          description:
            "고급스러운  새송이를 적 요리에 응용해보세요~ 특히 어른들이 아주 좋아하는 음식이랍니다!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/081000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "물만두",
          description:
            "남녀노소 좋아하는 만두! 튀기지 않고 물만두로 즐겨보세요~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/081400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "볶음쌀국수",
          description:
            "쌀국수를 돼지고기와 여러가지 채소를 넣어 굴소스에 볶아보세요. 굴소스를 넣을때 짜지않을 정도로만 넣으세요.",
          cooking_time: "25분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/081500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯파스타",
          description:
            "레스토랑에서 맛보던 파스타를 이젠, 집에서도 즐겨보세요~ 버섯도 팍팍 넣어서요!",
          cooking_time: "25분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/081700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭개장",
          description:
            "얼큰한 국물에 여러가지 나물과 담백한 닭살을 넣어 맛있게 끓인 닭개장 한그릇, 생각나시죠?",
          cooking_time: "60분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/081900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치볶음밥",
          description:
            "한국인의 입맛에 딱맞는 김치볶음밥! 편식하는 아이들 간식으로도 좋아요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/082100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어채볶음",
          description:
            "반찬이 없다구요? 냉장고에 남아있는 오징어채를 고추장에 조물조물 무쳐보세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/082300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "바지락칼국수",
          description:
            "바지락으로 시원한 국물맛을 내고, 쫄깃한 면발에 칼국수를 색다르게 먹을 수 있는 요리랍니다.",
          cooking_time: "25분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/082400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어도라지생채",
          description: "도라지의 아삭함과 오징어의 고소함을 같이 느껴 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/082600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "애호박무침",
          description:
            "새우젓을 첨가해 애호박을 무쳐보세요~ 밥반찬으로 좋습니다.",
          cooking_time: "15분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/083000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양송이버섯죽",
          description: "아침식사로도 환자식으로도 좋습니다!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/083300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "홍합미역국",
          description: "홍합의 시원한 맛이 미역국의 맛을 한층 더해준답니다.",
          cooking_time: "20분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/083500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어덮밥",
          description:
            "쫄깃한 오징어와 매콤한 양념의 환상조합으로 밥 한 공기 뚝딱!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/083700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "모듬채소볶음",
          description:
            "모듬 채소들이 다 모였습니다! 수분이 생기지 않게 얼른 볶아 삼삼하게 간해주세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/084100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "대구탕",
          description:
            "얼큰한 국물에 담백한 생선을 넣어 보글보글 맛있게 끓였어요. 추운 날씨에 한 그릇 뚝딱!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/084400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "불고기찹쌀구이",
          description:
            "부드러운 육질에 찹쌀로 쫄깃함을 입힌 불고기 찹쌀구이! 오늘의 별식으로 어떠신가요?",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/084700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고추부각",
          description: "고추의 매운맛이 사라지고 바삭한 맛이 탄생했어요~",
          cooking_time: "30분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/084900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "충무김밥",
          description: "김밥에 오징어 초무침을 곁들여보세요~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/085500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "기스면",
          description:
            "특이한 면 요리를 원하신다면, 결코 어렵지 않은 조리법으로 특이한 음식을 맛볼 수 있답니다!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "감자수프",
          description:
            "감자를 맛있게 갈아 따끈하고 부드러운 수프를 즐겨보세요~",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "마늘빵",
          description: "마늘빵을 집에서 정성스럽게 만들어 보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치킨수프",
          description:
            "속이 더부룩할때는 간단한 수프로 속을 편하게 지켜주세요! 수프 한 그릇이 든든한 한끼가 된답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "계란찜",
          description:
            "여러가지 야채들과 완전단백식품 계란으로 간단한 찜요리를 해보세요~ 부드러운 아침식사로 너무 좋아요!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물비빔밥",
          description:
            "콩나물을 넣은 맛있는 비빔밥을 만들어 보세요. 아삭하게 씹히는 콩나물 맛이 정말 색다르답니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "인절미",
          description:
            "옛날처럼 큰 절구는 없어도 조그마한 절구로 인절미를 만들어 보세요.",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/086900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "상추채소무침",
          description: "상추채소무침에 된장을 넣고 밥비벼 먹어보세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/087100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "호박양파국",
          description:
            "매일 먹는 국이 지겨우시다면 호박과 양파를 넣어서 색다른 국을 끓여 보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/087400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽁치구이",
          description:
            "꽁치를 가장 신선하게 맛있게 먹을 수 있답니다. 소금을 적당하게 뿌려서 그릴에 구워 바로 드세요~!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/087500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어젓갈",
          description: "밥도둑의 대표명사!",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/087600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "무생채",
          description: "새콤달콤하게 무쳐서 밥상위에 올려 놓으면 인기 짱!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/088000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물국시",
          description: "해물이 듬뿍 들어가서 너무 너무 시원해요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/088200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "안심스테이크",
          description: "기념일날 분위기 있게 스테이크를 집에서 만들어 보세요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/088300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "파래무침",
          description:
            "해조류가 다이어트에 좋은거 알고계시죠? 새콤 달콤하게 무쳐보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/088400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "단호박튀김",
          description:
            "아이들이 호박은 싫어하죠? 튀겨내면 아이들이 정말~ 좋아합니다!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/088500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물스파게티",
          description:
            "레스토랑에서 즐기던 스파게티! 이젠 집에서도 즐겨보세요~ 홍합 골라 먹는 재미가 솔솔~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/088800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "월남쌈",
          description: "베트남 음식이 생소하시다구요?? 이 방법대로만 하면 OK!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/089100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "무나물",
          description: "무를 담백하게 볶아봤어요. 어때요 맛있죠?",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/089400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어된장조림",
          description:
            "조림 고등어도 맛있지만 곁들여진 무에 간이 배면 더욱더 맛있죠.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/089500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부두루치기",
          description:
            "두부로 두루치기를 만들때는 두부의 모양에 신경써 주세요^^",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/089800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고구마그라탱",
          description:
            "고구마로 만든 별미디저트를 소개할게요. 찐고구마와 생크림, 치즈를 섞어 피자치즈를 뿌려 다시 고소하게 구워낸 고구마그라탱 별미중에 별미랍니다!!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/090100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "시금치된장죽",
          description:
            "다시마와 가쓰오부시를 우려낸 국물에 왜된장을 살살 풀어 데쳐낸 시금치를 넣어 만든 된장국에 쌀을 넣어 만든 죽이에요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/090300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "제육겨자쌈",
          description: "영양가 많게 쌈을 먹고 싶을때~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/090400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "그린파스타",
          description:
            "색다를 음식을 식사로 하고 싶을 때 도전해 보세요.. 색다른 맛에 반하실 꺼예요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/091300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼색태극말이초밥",
          description: "피크닉을 위해 준비할 수 있는 깜찍한 요리.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/092500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "캘리포니아롤",
          description: "게를 가지고 피크닉에 갈 수는 없을까요? 확인해 보세요^^",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/092700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오곡주먹밥",
          description: "밥맛없어 하는 아이들의 눈길을 끌어 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/093600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "무초김치",
          description: "맵지 않은 김치를 한번 만들어 볼까요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/094000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "화전",
          description: "옛부터 내려오는 음식이죠? 꽃을 전 위에 살짝~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/094200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "만두샐러드",
          description:
            "만두를 바삭하게튀겨 신선한 야채와 샐러드를 만들어보세요..달콤한 허니머스터드 드레싱을 곁들여 먹으면 더욱 맛있답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/095200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "콩나물미나리무침",
          description:
            "오물조물 콩나물에 향긋한 미나리를 넣어 무쳐보세요. 미나리의 초록색에 아삭한 콩나물이 너무 잘 어울린답니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/095300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돈부리",
          description:
            "달짝지근하면서 짭조름하면서 구수하면서  일본의 돈부리한그릇 한번 드셔보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/095700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "연어알초밥",
          description:
            "입안에서 톡톡 터지는 연어알을 초밥위에 예쁘게 장식하세요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/095900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "깐풍새우",
          description:
            "매콤하고 새콤한 새우요리!! 손님접대용으로 그만이랍니다^^",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/096200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해산물두부수프",
          description:
            "신선한 새우와 오징어등의 해산물의 단백한 국물맛을 느껴보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/096600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소스프",
          description: "토마토 소스의 깔끔하고 부드러운 스프~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/097800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "샤브샤브",
          description: "깔끔하고 간편한 요리를 하고 싶을때 샤브샤브 어떠세요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/098700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "소바정식",
          description:
            "쫄깃한 모밀에 시원한 소스를 곁들여 먹으면 정말 맛있어요. 특히 여성분들이 너무 좋아한답니다!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/098800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기버섯덮밥",
          description:
            "간단하게 고급스러운 소바정식을 맛볼 수있다면 여러가지 버섯이 들어가 더욱 맛있답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/098900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽃게해물탕",
          description:
            "매콤하고 시원한 국물의 꽃게탕. 젓가락으로 꽃게살을 쏙쏙 빼먹는 맛은 별미랍니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/099900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해초무침",
          description:
            "상큼한 사과 소스에 신선한 해초를 담아 맛있는 산뜻한 샐러드를 만들어 보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/100100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "모듬전",
          description:
            "담백하고 맛있는 감자전과 향이 너무 좋은 깻잎전. 달콤한 양파로 맛있는 전을 부쳐보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/100200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "장어덮밥",
          description:
            "더운 여름이 다가오고 있어요. 몸보신을 위해서 맛난 장어덮밥을 만들어 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/100300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "장어계란말이",
          description:
            "부드러운 계란에 장어를 넣어 말았답니다. 조금은 특별한 맛이 느껴지고요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/100500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "토마토해산물스파게티",
          description:
            "시원하고 영양이 풍부한 해산물로 스파게티를 만들었답니다. 새콤달콤 토마토 소스를 만들어 쫄깃한 스파게티에 솔솔~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/101000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돈까스덮밥",
          description:
            "바삭하게 튀긴 돈까스를 밥위에 얹어서 드셔보세요. 아주 별미랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/101500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "볶음우동",
          description:
            "매콤한 소스를 쫄깃한 우동면에 뿌려드세요. 아삭하게 씹히는 야채가 들어가 더욱 맛있답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/101600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어삼겹살볶음",
          description: "육류와 해산물의 환상적인 조합! 매콤하니 좋아요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/102500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소영양밥",
          description:
            "견과류를 이용한 구수하고 맛있는 영양밥을 만들어 보아요.",
          cooking_time: "50분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/102600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "마파두부덮밥",
          description:
            "매콤한 두반장 소스에 부드러운 두부의 감칠맛~ 따끈한 밥위에 얹어 내세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/103400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "순두부",
          description:
            "따뜻한 김이 모락모락 나는 순두부에 감칠맛나는 간장양념을 살짝 비벼 먹는 그 맛~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/103900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "우묵냉채",
          description:
            "더운 여름에는 시원한 우묵냉채를 만들어 보세요. 입맛이 확 당긴답니다~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/104600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯매운탕",
          description:
            "얼큰한 국물에 영양가 많은 버섯을 넣어 요리해보세요. 마지막에는 밥을 넣어 볶음밥까지 먹을 수있답니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/105500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "동래파전",
          description:
            "식구들이 둘러 앉아 맛있는 동래파전을 만들어 드셔보세요. 오붓한 정감과 함께 맛을 느껴보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/106200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "조기찜",
          description:
            "영양가 풍부한 조기로 맛있는 찜을 만들어 보세요. 반찬으로 너무 좋답니다~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/106400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양상추참치샐러드",
          description: "아삭하게 씹히는 양상추 위에 맛있게 묻힌 참치 샐러드를~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/106700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "라조육",
          description:
            "라조육의 라조는 고추를, 육은 돼지고기를 양념해 튀겨서 매운맛을 낸 음식이랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/107100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치홍합국",
          description:
            "김치의 시원한 맛에 홍합을 넣어 한소끔 끓여 준비해보세요. 속풀이 음식으로 안성맞춤!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/107300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가지튀김",
          description:
            "가지에 갈은 돼지고기를 넣어 바삭하게 튀겨보세요. 머스터드 드레싱을 곁들이면 더 맛있는 요리가 되지요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/107600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "골뱅이볶음",
          description:
            "색다른 골뱅이볶음을 만들어 보세요. 술안주로 아주 그만이지요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/108200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "닭가슴살해파리샐러드",
          description:
            "영양많은 닭살에 새콤달콤 해파리를 넣어 맛있게 무쳐보세요. 손님 상차림으로 안성맞춤!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/108600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "어묵볶음",
          description:
            "얼큰한 김치와 어묵을 같이 볶아보세요. 어묵은 일단 기름을 한번 빼고 김치와 같이 볶아줍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/108700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어섞어찌개",
          description:
            "얼큰한 오징어에 여러가지 채소를 넣어 맛나게 끓여보세요. 모시조개가 시원한 맛을 더해준답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/108800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡꼬치",
          description:
            "맛있는 떡꼬치를 집에서 만들어 보세요. 아이들이 너무 좋아하는 간식이랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/109300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "연어오픈샌드위치",
          description:
            "고급스러운 연어로 맛있는 샌드위치를 만들어 보세요. 도시락으로 너무 좋아요^^",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/109500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "참치김치찌개",
          description:
            "간단하고 쉬운 참치김치찌개를 만들어 보세요. 얼큰한 맛을 더하려면 고춧가루를 좀 더 넣어주세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/109900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오징어볶음과소면",
          description:
            "매콤하게 고추장과 고춧가루를 넣어 술안주로 너무 좋은 오징어볶음을 만들어보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/110100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부추잡채",
          description:
            "향긋하고 먹음직스런 싱싱한 부추를 깨끗한 맛이 담긴 청정원 굴소스로 요리해보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/110300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쟁반라면",
          description:
            "푸짐한 쟁반라면을 만들어 보세요. 꼬들꼬들하게 라면을 삶아서 아삭한 야채와 함께 준비하며 더욱 맛있는 요리가 되지요~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/110400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "불고기꽃만두",
          description: "치자로 예쁜 색깔을 내어 특별한 만두를 만들어 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/110800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물샤브샤브",
          description:
            "온가족이 둘러 앉아 해물을 육수에 퐁당퐁당! 간단하게 준비하여 푸짐하게 드실 수 있답니다",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/111500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "간장게장",
          description:
            "담백하고 짜지 않은 간장게장을 만들어보세요. 밥도둑이 따로 없답니다.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/111900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "녹두죽",
          description:
            "건강에 좋은 죽을 요리해보세요. 입맛이 없을때 한그릇 뚝딱!",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/112400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지불고기",
          description:
            "저녁 반찬 뭐 해먹을까? 오늘 저녁 반찬으로 딱 어울리는 요리. 돼지불고기를 준비해보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/112900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "단호박구이",
          description:
            "단호박으로 맛있는 간식을 만들어보세요. 단호박의 부드러운 맛과 달콤한 맛이 너무 잘 어울려요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/113000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "라조기",
          description:
            "늘 시켜먹던 라조기를 직접 만들어 보세요. 바삭하게 튀긴 닭에 맛있는 소스를 곁들이면 정말 맛있는 라조기가 되지요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/114400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양파쌈파이",
          description:
            "우리 몸에 좋은 양파를 만두피에 넣어 바삭하게 튀겨보세요. 정말 색다른 맛이랍니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/115000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "미역수제비",
          description: "미역국에 수제비를 넣고 끓여보세요! 색다른 맛이랍니다.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/115600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "맑은대구탕",
          description:
            "추운 겨울에 딱 어울리는 국물요리랍니다. 시원하게 다시마로 국물을 우려내고 맛있는 생대구를 넣어보세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/115700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "브로콜리베이컨말이",
          description:
            "술안주나 아이들 간식으로 너무 좋은 브로콜리 베이컨 말이~ 정말 맛있어요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/116500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쇠고기덮밥",
          description:
            "밥을 고소한 참기름, 깨소금에 볶아서 맛있게 양념한 불고기와 같이 준비해보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/116700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어튀김케첩조림",
          description:
            "단백질이 풍부한 고등어를 바삭하게 튀겨서.. 맛있는 소스에 버무려 내세요...",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/117200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "생굴채소무침",
          description: "우리식으로 다양하게 굴요리를 만들어보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/117700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "생선전",
          description:
            "담백한 대구살로 맛있는 전을 부쳐보세요. 고급스러운 맛을 더하려면 쑥갓을 한잎~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/117900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "통마늘장아찌",
          description: "반찬용으로 새콤달콤하게 만들어보세요~",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/118200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "북어해장국밥",
          description:
            "포송포송한 북어로 담백한 북어해장국밥을 만들어보세요. 아침식사로 아주 그만이죠!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/118500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "봄동겉절이",
          description:
            "뜨거운 밥위에 겉절이를 맛있게 올려 먹으면 없던 입맛이 새록새록 살아납니다! 봄동의 향긋한 향도 너무 좋아요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/119100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "양파전",
          description:
            "쇠고기를 곱게 다져서 소를 만들어 아삭한 양파안에 채워넣지요. 기름에 노릇하게 구워내면 아주 맛있는 양파전이 됩니다!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/119300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽃상추쌈",
          description:
            "싱싱한 상추를 준비하여 그 위에 맛있게 양념한 밥을 올려보세요~ 모양도 굿 맛도 굿!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/119900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지고기우엉말이조림",
          description:
            "영양가 풍부한 돼지고기에 우엉을 넣어 돌돌 말았답니다. 맛있는 양념간장에 조려보세요! 밥반찬으로도 너무 좋구요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/120100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "다시마채소말이",
          description:
            "다이어트를 하신다면 깔끔한 다시마 야채 말이를 만들어보세요! 여러가지 야채와 다시마가 아주 잘 어울려요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/120400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "무말랭이무침",
          description:
            "양념장을 맛있게 만들어 무말랭이를 맛있게 조물조물 무쳐보세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/120900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "낙지불고기",
          description:
            "낙지와 불고기가 만났다? 낙지와 불고기를 맛있게 양념해서 얼큰하고 담백한 전골 요리를 해보세요.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/121200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돌솥비빔밥",
          description:
            "뜨근한 돌솥에 여러가지 재료들을 넣어 맛있는 돌솥비빔밥을 만들어보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/121400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어양념구이",
          description:
            "고등어에 양념장 솔솔 발라서 중불이나 약불에서 구워보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/121800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고등어조림",
          description:
            "오늘 저녁에는 고등어조림으로 밥 한끼 해결합시다. 간이 밴 무도 맛이 일품이죠~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/121900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈치구이",
          description:
            "갈치구이를 접시에 담을 땐 레몬을 한조각 올려서 더욱 이쁘게! 보기 좋은게 먹기도 좋답니다~",
          cooking_time: "15분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/122700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "갈치조림",
          description: "밥 한그릇 생각나게 하는 갈치조림이죠!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/122800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "새우겨자채",
          description:
            "톡쏘는 겨자소스에 버무린 오동통한 새우가 참 맛있답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/124100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치즈멸치볼",
          description:
            "치즈와 멸치가 들어가서 칼슘과 단백질이 아주 아주 풍부한 요리입니다. 아이들의 오늘 간식은 치즈멸치볼로 해결하세요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/127200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소치즈죽",
          description:
            "아침을 꼭꼭 챙겨먹어야지만이 하루도 든든하고 머리회전도 빨라진데요. 채소치즈죽으로 아침 절대 거르지 마세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/128100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "수삼치즈샐러드",
          description:
            "힘이 불끈 솟아나는 수삼과 비타민이 풍부한 야채들을 넣어 상큼하게 버무린 수삼치즈샐러드로 잃어버린 입맛을 살리세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/129900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "마늘볶음국수",
          description:
            "마늘을 버터에 볶으면 고소하고도 향긋한 맛이 일품이예요. 생숙주를 넣어서 더욱 맛을 낸 퓨전요리를 소개합니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/130300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쌀국수",
          description:
            "베트남 고유의 시원한 쌀국수 요리를 우리집 가정에서 느껴보세요~ 담백한 육수와 상큼한 숙주가 일품이예요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/131400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "깻잎조림",
          description:
            "깻잎을 이용한 쉽고 간단한 밑반찬입니다. 밥도둑이 따로 없어요~",
          cooking_time: "15분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/132000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "얼갈이열무물김치",
          description:
            "여름철엔 시원한 열무김치를 넣고 국수에 말아 먹으면 정말 어떤 음식도 부럽지 않죠.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/132500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "간장",
          description:
            "한식에 없어서는 안될 간장! 메주를 소금물에 넣고 숙성시키면 신기하게도 까만 간장이 탄생한답니다~",
          cooking_time: "5분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/134500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "된장",
          description:
            "간장을 담았던 메주를 덜어 내서 소금에 버무려 된장이 되죠. 오래도록 숙성시켜서 먹는 대표적인 슬로우 푸드이자 양질의 단백질 공급원! 된장을 함께 만들어 보아요~",
          cooking_time: "30분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/134600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고추장",
          description:
            "입맛 없을 때, 고추장에 슥슥 비벼 밥 한 공기 뚝딱! 고추장, 이젠 사지 말고 직접 만들어 보세요~",
          cooking_time: "90분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/134700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고구마강정",
          description:
            "달콤한 고구마를 기름에 튀겨 고소해지게 하고 또 달콤한 건포도와 고소한 호박씨를 넣어 시럽을 만들어 굳혀 보세요.",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/136300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "근대된장국",
          description:
            "담백하고 시원한 근대된장국으로 밥 한그릇 뚝딱 해결해 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/136600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "된장찌개",
          description:
            "구수한 냄새, 고소한 맛! 한국의 대표음식 된장찌개! 우리 입맛에 딱이예요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/137600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "깻잎말이김치",
          description:
            "갖가지 재료를 넣고 돌돌 말아서 멸치액젓에 절였어요. 고급스러운 김치로 아주 맛있답니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/139300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "붉은갓동치미",
          description:
            "붉은 갓에서 배어나온 자주빛의 국물이 미각과 시각을 모두 만족시켜주는 시원한 김치예요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/139400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "파프리카볶음밥",
          description:
            "형형색깔의 파프리카 속에 볶음밥으로 아이들도 참 좋아해요.",
          cooking_time: "50분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/140700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지갈비레몬찜",
          description:
            "새콤한 레몬을 곁들인 돼지갈비찜으로 식탁을 풍성하게 만들어 보세요.",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/140900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "시금치계란말이",
          description:
            "뽀빠이처럼 튼튼하게 자랄 수 있는 아이들 건강식 반찬 요리입니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/141200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "낙지연포탕",
          description: "낙지와 모시조개 덕분에 바다향 가득한 시원한 국물~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/141300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "새우죽",
          description:
            "부드러운 죽 한그릇으로 아침을 거르지 마세요. 소화가 잘 되어서 환자식으로도 참 좋아요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/141500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "전복죽",
          description:
            "쫄깃한 전복살과 깊은 감칠맛이 입 안에 맴도는 보양식 죽 대령이오~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/141600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "죽순회와미나리강회",
          description:
            "죽순의 아삭거림과 초고추장의 새콤달콤~ 미나리의 상큼한 맛이 입맛을 살려줘요!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/142400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "시금치나물",
          description:
            "개운하게 나물을 무쳐보세요! 액젓으로 간해 맛이 깔끔하답니다!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/143700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "녹차콩국수",
          description:
            "다시마와 가쓰오부시의 육수가 섞인 콩국에 쌉싸름한 맛의 녹차국수가 섞여 색다른 퓨전요리의 맛을 느껴보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/144500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "우무콩냉국",
          description:
            "우무는 저칼로리 식품일뿐만 아니라 섬유질이 풍부해 배변활동을 도와 주는 다이어트 식품입니다.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/144600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "모듬콩수프",
          description:
            "단백질 덩어리 몸에 좋은 콩콩콩! 부드러운 수프로 즐겨보세요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/144900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "서리태콩국수",
          description:
            "여름 더위를 물리치는 단골손님, 시원한 콩국수! 쫄깃한 면발과 고소한 국물맛이 환상이죠.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/145200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "대대로닭칼국수",
          description:
            "닭육수로 만든 시원한 국물맛과 콩가루로 빚은 고소한 면발이 잘 어울리는 따끈따끈한 칼국수 대령이요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/145300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "전어회무침",
          description:
            "입맛 없을 때는 새콤달콤한 전어회무침이 최고에요. 입안에 군침이 좌르르 돌아요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/147200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "왕새우구이와구운채소",
          description:
            "각종 허브오일에 마리네이드한 왕새우를 오븐에 먹기좋게 구워 톡쏘는 와사비감자와 즐겨보세요.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/147300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "소꼬리찜",
          description:
            "몸이 허하다고 생각이 들때는 소꼬리찜으로 원기회복해 보세요. 국물이 있어서 해장에도 아주 좋아요.",
          cooking_time: "60분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/148100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "삼색나물월남쌈",
          description:
            "삼색나물과 고기산적을 각종 채소들과 함께 부드러운 라이스 페이퍼에 싸드세요. 세가지 소스중에 무엇을 찍어먹을지 행복한 고민을 해볼까요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/148200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "토란닭고기찜",
          description:
            "닭고기 살에 적당히 배인 간장소스가 너무나도 맛있는거 있죠. 담백한 토란과 함께 즐겨줘요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/148400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "녹두고물호박떡케이크",
          description:
            "은은한 연두색 녹두고물이 덮인 호박떡케이크랍니다. 설탕은 조금만 첨가시키고 단호박의 자연적인 단맛을 즐겨보세요.",
          cooking_time: "70분",
          level: "어려움",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/148800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "크림소스파스타",
          description:
            "남녀노소 좋아하는 크림파스타! 이젠 집에서도 즐겨보세요~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/149700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "상추미소국",
          description:
            "냉장고에 먹다 남은 상추 있으신가요? 그럼 시원한 미소국에 한 번 넣어보세요~ 상추의 향과 미소된장의 향이 아주 잘 어울려요!",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/150000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "가지김치",
          description: "오늘은 아삭한 가지로 만든 김치! 과연 어떤 맛일까요?",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/150700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "버섯잡채",
          description: "당면 대신 버섯을 이용해 고소한 잡채를 만들어 보세요.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/151300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "부추올리브오일무침",
          description:
            "기름기가 없어 질겨지거나 퍽퍽할 수 있는 부추무침에 올리브오일을 첨가해 보세요. 윤기가 흐르는 부추무침을 보면 입맛이 돌아와요.",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/151500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "바베큐립",
          description: "패밀리레스토랑의 맛을 재현하다~ 그 맛이 바로 바비큐립!",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/152300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "무쌈말이",
          description:
            "비트로 물을 들여 색깔이 아주 화려하답니다. 온갖 채소들을 돌돌 말아 특히 여성분들에게 좋아요",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/153400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "치킨샐러드",
          description:
            "느끼하지 않은 닭가슴살로 만든 샐러드랍니다. 달콤한 허니머스터드를 뿌려드세요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/154500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "된장채소수제비",
          description:
            "된장은 음식의 간과 맛을 보태주는 역할과 함께 식물성 단백질로 구성되어 버릴 것 하나 없는 기특한 식품입니다.",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/154800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고추장닭강정",
          description:
            "고추장으로 매콤 달콤하게 맛을 낸 닭강정을 만들어보세요..모두가 즐길 수 있는 요리랍니다.",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/155400.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "참치죽",
          description: "고소한 참치가 들어가 심심하지 않아요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/156100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부파프리카전",
          description:
            "고소한 두부의 맛을 살려주는 포도씨유로 두부 파프리카전을 지져보세요. 느끼하지 않은 기름이 음식맛을 살려준답니다~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/157100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "고추잡채와꽃빵",
          description: "매콤한 고추잡채에 쫄깃한 꽃빵을 곁들여 드셔보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/157300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물찌개",
          description:
            "개운한 국물 한술 뜨면 피로가 싹 날아가는 시원한 해물찌개~ 쌀쌀한 날씨엔 시원한 국물이 최고랍니다!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/158000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "돼지고기김치찌개",
          description:
            "개운한 김치찌개~! 신김치와 청정원 국선생 육수만  있으면 감칠맛 나는 요리는 문제 없답니다.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/158100.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "두부조림",
          description:
            "바삭한 두부를 감칠맛나는 굴소스에 부드럽게 조렸어요~ 술안주로 밥반찬으로 인기 만점이에요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/158600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "오코노미야키",
          description:
            "부슬부슬 비오는 날~ 가다랑이포 솔솔뿌린 따끈한 오코노미야키를 만들어보세요! 집에서도 훌륭한 맛내기! 한번 시작해 볼까요~?",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/158800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물볶음밥",
          description:
            "빠른 요리가 필요할 땐 맛도 함께 챙겨주는 굴소스로 요리해보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/159000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "새송이쌈장구이",
          description: "쫄깃한 새송이를 개운한 쌈장에 재워 구워보세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/159500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물매운탕",
          description: "매콤하면서 시원한 해물탕으로 개운하게 속풀이 하세요!",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/160200.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "해물순두부찌개",
          description:
            "부드럽게 넘어가는 맛이 최고!! 시원하고 개운한 국물맛이 단백하게 입맛을 살려주는 순두부찌개!!",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/160800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "김치우동",
          description:
            "칼칼한 국물이 땡기는 날~ 김치우동으로 시원함을 달래보세요!",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/161700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쫄면",
          description:
            "쫄깃하고 새콤달콤한 쫄면~ 차고 매콤한 맛이 자꾸자꾸 땡겨요!",
          cooking_time: "40분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/162500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "발효초요구르트",
          description:
            "발효초를 넣어 더욱 개운한 요구르트 한 잔이면 하루가 상쾌해요~",
          cooking_time: "10분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/162600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "채소피클",
          description:
            "새콤 달콤 아삭한 피클을 집에서 즐겨보세요~ 발효초가 들어가 건강까지 살아있어요~",
          cooking_time: "20분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/162800.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "떡만두국",
          description:
            "따끈한 국물이 생각날 때! 쫄깃한 떡과 속살 탱탱한 만두가 들어간 떡만두국 어떠세요~",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/163500.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "꽁치김치찌개",
          description:
            "김치찌개가 지겨우시다구요? 꽁치를 넣어 칼칼하고 시원한 꽁치김치찌개! 추운 날 밥반찬으로 그만이지요~",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/163700.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "미소된장국",
          description:
            "단백한 국물맛이 좋은 미소된장국으로 속을 가볍게 달래보세요~",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/163900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "비빔냉면",
          description: "더운 여름, 시원하고 새콤달콤한 비빔냉면을 비벼비벼~",
          cooking_time: "50분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/166300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "메기매운탕",
          description: "메기와 각종 채소를 넣어 얼큰하게 끓인 탕 요리",
          cooking_time: "60분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/167000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "잉어찜",
          description: "잉어에 고명을 얹어 찐요리입니다. 특별한날 드셔보세요.",
          cooking_time: "30분",
          level: "보통",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/168000.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "송어샐러드",
          description:
            "신선한 채소와 송어에 상큼한 파인애플 드레싱을 얹은 요리",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/168300.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "까르보나라 (한국식)",
          description:
            "전통식과는 다르게 생크림을 넣어 소스가 많은 한국식 까르보나라",
          cooking_time: "30분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/172900.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "쌀샐러드",
          description:
            "낙지와 야채를 곁들인 쌀 샐러드로 이탈리아에서 즐겨먹는 쌀요리.",
          cooking_time: "40분",
          level: "초보환영",
          main_image:
            "http://file.okdab.com/UserFiles/searching/recipe/173600.jpg",
          post_user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   title: "시금치배미음죽",
        //   description:
        //     "기관지에 좋은 배와 비타민이 풍부한 죽을 통해 아기의 변기가 싹 나았습니다",
        //   cooking_time: "40분",
        //   level: "초보환영",
        //   main_image:
        //     "http://file.okdab.com/UserFiles/searching/recipe/173600516.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "시금치표고된장무른밥",
        //   description:
        //     "칼슘이 부족하고, 철도 부족한 빈혈이 있는 아이에게 추천하는 건강 요리입니다.",
        //   cooking_time: "50분",
        //   level: "초보환영",
        //   main_image:
        //     "http://file.okdab.com/UserFiles/searching/recipe/173600531.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "한우토마토스튜",
        //   description: "이국적인 향미의 영양식 한우토마토스튜",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/142361932749200037.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "흑임자삼계죽",
        //   description: "겨울 보양식",
        //   cooking_time: "20분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/142362150342300057.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "시래기돼지갈비찜",
        //   description: "겨울철 보양식",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/142362140251300052.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "보쌈김치",
        //   description: "모양부터 맛까지 고급스러운 보쌈김치",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/142362203931100058.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "감동젓무김치",
        //   description:
        //     "겨울무와 젓갈로 만드는 감칠맛, 감동젓무김치(자하젓섞박지)",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/142362278536100063.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "단호박옥수수치즈구이",
        //   description: "달콤한 단호박과 톡톡터지는 옥수수, 고소한 치즈의 만남",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147133786062900726.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "시금치들깨수제비",
        //   description: "영양가득한 시금치와 들깨로 만든 고소한 들깨수제비",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/147139850208600755.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "바질페스토 스파게티",
        //   description: "바질의향이 솔솔 바질페이스토 스파게티",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147433913098400906.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "가지말이구이",
        //   description: "보기도 좋고 맛도 좋은 영양만점 가지말이구이",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147521219349301578.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "돛나물 부추 오이무침",
        //   description:
        //     "시원하고 아삭한 오이 부추와 돛나물을 만나 영양을 더하다!",
        //   cooking_time: "10분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147521990367001612.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "오이동치미",
        //   description:
        //     "알록달록 파프리카로 속을 채운 시원하고 아삭한 오이동치미",
        //   cooking_time: "60분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/147522432389801632.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "토마토미니새송이볶음",
        //   description: "토마토와 미니새송이로 만든 간단 반찬",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147676766735700024.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "닭가슴살 호박말이",
        //   description:
        //     "단백하고 고소한 닭가슴살을 비타민이 풍부한 호박으로 말아요.",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147686495891600030.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "고구마잎무침",
        //   description: "항산화물질이 풍부한 고구마잎무침",
        //   cooking_time: "10분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147686756652700036.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "매운가지볶음",
        //   description: "입맛을 살려주는 매콤한 가지볶음",
        //   cooking_time: "20분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147729991660000012.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "가지그라탕",
        //   description:
        //     "폴리페놀 성분이 풍부한 가지로 만든 건강 간식 가지그라탕",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/147738563569500206.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "상추 치커리 오징어 초침무",
        //   description: "졸깃한 오징어와 아삭하고 향긋한 상추와 치커리의 만남",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147790356219600002.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "가지무침과 호박잎쌈밥",
        //   description: "가지무침과 호박잎쌈밥으로 건강한 한 끼 식사 완성",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147799091155300006.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "호박무침",
        //   description: "새콤하게 무친 호박 비빔밥 용으로도 좋아요.",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147936561431200472.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "어린잎샌드위치",
        //   description: "부드러운 어린잎으로 만든 영양 간식 샌드위치.",
        //   cooking_time: "20분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/147969190762100715.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "민트라임모히또",
        //   description: "민트와 라임의 만남! 상큼한 민트라임모히또",
        //   cooking_time: "20분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147978355895400818.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "고추장아찌",
        //   description: "비타민이 풍부한 고추로 만든 새콤·달콤·아삭 고추장아찌!",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/147986666497300014.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "깻잎장아찌",
        //   description:
        //     "비타민C, 비타민A, 철분, 칼슘, 엽산, 베타카로틴 등등 영양이 1장에 다 들어있는 깻잎!\n영양으로 가득담은 깻잎장아찌 밑반찬으로 딱!",
        //   cooking_time: "10분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/148004075369400004.png",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "가지두부스테이크",
        //   description: "두부와 만난 가지의 고급진 변신!  가지두부스테이크",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/148056032967500000.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "오이보트카나페",
        //   description:
        //     "상큼하고 아삭한 오이에 고소한 참치샐러드의 조화. 영양 간식, 손님접대로 딱!",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148066186717500109.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "애호박 구이",
        //   description: "어린채소와 함께 샐러드처럼 먹을 수 있는 애호박 구이",
        //   cooking_time: "20분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/148066561730500124.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "나물 월남쌈",
        //   description:
        //     "명절을 보내고 남은 나물로 알뜰하고 맛이게 만들어 먹는 나물 월남쌈!",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148066903468800139.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "단호박 고등어조림",
        //   description: "달콤한 단호박으로 만든 달콤 짭짜름한 고등어조림",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148222411418400027.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "당근잎 감자전",
        //   description: "당근 향이 나는 향긋한 당근잎 감자전",
        //   cooking_time: "20분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148229812483500337.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "배추만두",
        //   description:
        //     "배추로 만든 깜찍한 배추주머니 만두! 아삭한 배추와 영양으로 가~득 채운 보기도 좋고 맛도 좋은 배추만두랍니다.",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148230648948900343.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "식빵고구마파이",
        //   description:
        //     "식빵을 이용한 간단 고구마파이! 아이들 영양 간식으로 딱!",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/148291043686100008.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "카레토마토달걀볶음밥",
        //   description:
        //     "토마토와 달걀을 넣은 볶음밥에 카레소스를 두른 영양만점 볶음밥",
        //   cooking_time: "30분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/148291443772500013.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "쪽파 새우강회",
        //   description:
        //     "새우에 쪽파를 감아 간단하게 만들지만 새우와 쪽파의 달콤한 맛과 새콤한 초고추장의 환상의 콤비! 거기에 건강까지 좋은 영양만점 쪽파 새우강회!!",
        //   cooking_time: "20분",
        //   level: "초보환영",
        //   main_image: "http://file.okdab.com/recipe/148299002655300119.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "누드김밥",
        //   description:
        //     "건강한 재료로 가득담아 말은 누드김밥! 고기가 없어도 맛있어요!!",
        //   cooking_time: "20분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148299332505800120.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   title: "콩비지동그랑땡",
        //   description: "두부대신 콩비지를 넣어 만든 동그랑땡 맛도 좋아요!",
        //   cooking_time: "30분",
        //   level: "보통",
        //   main_image: "http://file.okdab.com/recipe/148299577268400131.jpg",
        //   post_user_id: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
