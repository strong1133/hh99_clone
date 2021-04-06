const getCookie = (name) => {
    let value = "; " + document.cookie; 
    
    let parts = value.split(`; ${name}=`);  //[aa=xx / aaa; abbb=ssss;]

    if(parts.length === 2){
        return parts.pop().split(";").shift();
    }

};

// 이름, 밸류, 만료일 (exp을 받아오지 않으면 기본값 5로 하겠다.)
const setCookie = (name, value, exp = 5) => {
    
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000 );

    document.cookie = `${name}=${value};expires=${date.toUTCString()}`;

}

const deleteCookie = (name) => {
     let date = new Date("2020-01-01").toUTCString();

     console.log(date);
     document.cookie = name + "=; expires=" + date;
}

export { getCookie, setCookie, deleteCookie };  