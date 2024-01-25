// 뷰엑스 스토아 구현 JS

// 스토아 JS 불러오기 //////
import store from "./store.js";
// default로 내보내기 후 기본이름은 store임!

// [ 중요!! ]
// 뷰 인스턴스에 스토아를 사용할 수 있게 등록해줘야 함!
// 등록 방법: new Vue({el:"",store,methods:{}})
// -> 스토아 변수를 그대로 써주면 된다!!

// 리스트 만들기 함수
const makeList = x => {
    console.log('메뉴배열:',x);
    // x 메뉴 배열
    return x.map(v=>`
    <li>
        <a href="#"
        v-on:click="changeData('${v}')"
        >${v=='처음'?'🎅':v}</a>
    </li>
    `).join('');
    // map으로 만든 배열값에 콤마제거는 join
}; ///// makeList //////////////////////

// [1] 컴포넌트 셋팅하기 ///////////
// 1. 상단영역 컴포넌트 셋팅
Vue.component("top-area", {
    // 1. 템플릿 설정
    template: `
        <header>
            <ul class="gnb">
                ${makeList(
                    Object.keys
                        (store.state.cityData))}
            </ul>
        </header>
    `,
    // 2. 리턴 데이터 설정
    data() {
        return {};
    },
    // 3. 메서드 설정
    methods: {
        // 스토아 변수 업데이트 메서드
        changeData(pm) {
            console.log("업데이트", pm);
            // 여기서 바로 스토아 변수를 업데이트 한다!
            // 1. 이미지 변수 : imgSrc
            // 이 위치에서 접근하려면 store.state 로 접근!
            store.state.imgSrc = 
            store.state.cityData[pm].이미지;
            // 2. 설명 변수 : desc
            // 이 위치에서 접근하려면 store.state 로 접근!
            store.state.desc = 
            store.state.cityData[pm].설명;

        }, ///changeData /////
    },
});

// 2. 메인영역 컴포넌트 셋팅
Vue.component("main-area", {
    /* 
    컴포넌트 영역은 뷰JS에서 해석되는 부분이므로
    뷰엑스 스토어의 변수 store를 
    전역 표시 $store
    라고 표기해야 유효하다!(에러없음)
    더 정확한 문법은 this.$store 라고 써야하지만
    이 파일이 일반 JS에서 실행되므로 변수할당된
    뷰JS 인스턴스 영역안에서 실행되므로
    뷰인스턴스 자신인 this를 쓰지 않아도
    자동적으로 this로 처리된다!
    */
    template: `
        <main>
            <img 
            v-bind:src="$store.state.imgSrc"
            alt="지역이미지">
            <p
            v-text="$store.state.desc"
            ></p>
        </main>
    `,
    data() {
        return {};
    },
    methods: {},
});

// 3. 하단영역 컴포넌트 셋팅
Vue.component("info-area", {
    template: `
        <footer>
            <address>
                서울시 강남구 역삼동 119 뷰엑스B
            </address>
        </footer>
    `,
    data() {
        return {};
    },
    methods: {},
});

// [2] 뷰 인스턴스 생성하기 /////////////////////////////////////
// 대상요소 : #app
new Vue({
    // 대상선정
    el: "#app",
    store, // 중요함 뷰엑스 스토어 등록!
    data: {
        // 변수:값
    },
    methods: {
        // 메서드(){}
    },
    // 데이터 셋팅구역 : 인스턴스 생성직후(created)
    created() {
        /* 
            스토어에 있는 initSet 메서드는 어떻게 호출하지?
            스토어 호출 메서드가 따로 있음!
            store.commit("메서드명",파라미터값)
            1. 메서드명은 반드시 문자형으로 입력한다!
            2. 파라미터는 단일값 또는 객체형식을 보낼 수 있음
            인스턴스 내부구역 코딩시 store에 $없음!
        */
       store.commit('initSet',{
        url:"https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg",
        txt:"포켓몬 센터에 오신것을 환영합니다!",
       })

    },
    // DOM 생성후 실행구역(mounted) : 제이쿼리(JS) 코드
    mounted() {
        // 1. 메뉴 클릭시 클릭된 li의 a요소에 .on주기
        // 나머지는 .on지우고 home은 적용제외!
        $('.gnb a').click(function(){
            // 넣기는 첫번쨰껏 제외
            if($(this).parent().index()!==0){
                $(this).addClass('on');
            }// if ////
            // 지우기는 무조건
            $(this).parent().siblings()
            .find('a').removeClass('on');

            // 박스 나타나기 함수호출
            showBox();
        });

        function showBox(){
            // 이미지와 설명박스 순서대로 나타나기
            // 대상 : 
            $('main img').css({opacity:0}).stop()
            .delay(500).fadeTo(500,1);
            // stop() - 기존 애니메이션 지우기
            // fadeTo - 시간,투명도 애니메이션

            $('main p').css({opacity:0}).stop()
            .delay(1000).fadeTo(500,1);

        } ///// showBox ///


    }, /// mounted ///////
});
