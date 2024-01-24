// 컴포넌트연습 1

// 뷰js 인스턴스 생성용 함수 : x는 대상요소
const makeVue = (x) => new Vue({ el: x });

// 1. 제목에 넣을 전역 컴포넌트 만들기
// Vue.component(캐밥케이스 컴포넌트 태그명,{옵션})

Vue.component("tit-comp", {
    template: `
        <strong>
            <span>
                凸 Vue JS 컴포넌트 : 
            </span>
            쇼핑몰 갤러리 리스트
        </strong>
    
    `,
}); //// 전역 컴포넌트

// 컴포넌트 만든후 뷰인스턴스 생성함!

// 뷰 인스턴스 생성하기!!
makeVue(".tit");

// 이미지 번호 숫자증감 변수
let inum = 0;

// 상품명 배열
const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
Vue.component("list-comp", {
    // 2-1 template 옵션 : 태그구성
    // src속성을 셋팅된 변수를 적용하기위해
    // 속성앞에 v-bind:을 붙여서 v-bind:src
    // 로쓰면 값으로 문자형을 써도 그 안의
    // 값은 변수가 된다!!!(중요!!!)
    template: `
    <div data-num="1">
        <img v-bind:src="gsrc" alt="의류"> 
        <aside>
            <h2 v-text="gname"></h2>
            <h3 v-text="gprice"></h3>
        </aside>
    </div>
    `,

    // 2-2 data 옵션 : 컴포넌트 내부 변수셋팅
    // 실행원리: 컴포넌트가 빌드할때
    // data속성의 함수를 호출한다!
    // 그래서 리턴되는 객체값이 컴포넌트내부에
    // 전달된다!!!
    data: function () {
        // 템플릿에서 사용할 변수는 반드시 리턴
        // 속성: 값으로 구성된 객체를 리턴한다!
        return {
            // 이미지 src
            gsrc: `images/${this.setNum()}.jpg`,
            // 상품명
            gname: this.setName(),
            // 상품가격
            gprice: this.setPrice(),
        };
    },

    // 2-3 메서드 속성 : 컴포넌트 내부 메서드 셋팅
    methods: {
        // inum을 1씩 증가하여 리턴함
        // 상품사진
        setNum() {
            inum += 1;
            console.log("num", inum);
            return inum;
        },
        // 이름
        setName() {
            // 0~3 사이 난수
            let rdm1 = Math.floor(Math.random() * 4);
            // 이름리턴
            return goods[rdm1];
        },
        // 가격
        setPrice() {
            let rdm2 = Math.ceil(Math.random() * 17) + 3;
            return this.addCommas(10000 * rdm2) + "만 베리";
        },

        //정규식함수(숫자 세자리마다 콤마해주는 기능)
        addCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
}); //// 전역컴포넌트 2

// 리스트뷰 인스턴스 생성하기
makeVue(".grid");

// 유툽 컴포넌트 ////////////
Vue.component("ifr-comp", {
    template: `
    <iframe
    width="49%"
    style="aspect-ratio: 16/9"
    v-bind:src="ifrSrc"
    title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>
    `,
    data:function(){
        return{
            ifrSrc: `https://www.youtube.com/embed/ZH1Y1l1OmTY?autoplay=1&mute=1&loop=1&playlist=ZH1Y1l1OmTY`,
        };
    }, /// data //////
});

// 부모 컴포넌트 인스턴스 생성
makeVue(".you-box");