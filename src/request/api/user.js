import service from "..";


// 密码登录接口
export function getToken(data) {
    return service({
        method: "GET",
        url: `/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}



// 密码登录接口
export function getUser() {
    return service({
        method: "GET",
        url: `/user/account`
    })
}