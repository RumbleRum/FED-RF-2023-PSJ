// 회원가입을 위한 로컬스토리지 생성 JS


const clearData = () => {
    localStorage.clear();
}; /////////// clearData //////////////

// [ 로컬스 초기체크셋팅] ////////////
const initData = () => {
    // 만약 로컬스 "mem-data"가 null이면 만들어준다!
    if (localStorage.getItem("mem-data") === null) {
        localStorage.setItem(
            "mem-data",
            `
                    [
                        {
                            "idx": "1",
                            "uid":"admin",
                            "pwd":"1111",
                            "unm":"Administrator",
                            "eml":"admin@dc.com"
                        },
                        {
                            "idx": "2",
                            "uid":"seoseo",
                            "pwd":"1111",
                            "unm":"Seo",
                            "eml":"seo@gmail.com"
                        }
                    ]
                `
        );
    }
}; ///////////// initData /////////////////

export { clearData, initData };