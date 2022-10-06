function logout() {
    localStorage.removeItem("user_name")
    window.location.replace("index.html")
}

function Next(){
    window.location.replace("tipspage3.html")
}

function Back(){
    window.location.replace("tipspage1.html")
}