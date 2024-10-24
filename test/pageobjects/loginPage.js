class LoginPage {
    get username() {
        return $("input[name='username']")
    }
    get password() {
        return $("//input[@name='password']")
    }
    get signIn() {
        return $("#signInBtn")
    }
    get alert() {
        return $(".alert-danger")
    }
    get textInfo() {
        return $("p.text-center")
    }
   
    
    async Login(username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.signIn.click()
    }
}

export default new LoginPage()