function logout() {
    localStorage.removeItem("user_name")
    window.location.replace("index.html")
}

function Back(){
    window.location.replace("tipspage2.html")
}