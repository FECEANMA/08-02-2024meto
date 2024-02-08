'use strict'

class User {
    //estado
        constructor(username,pasword,email) {
          this.username = username;
          this.pasword = pasword;
          this.email = email;
//comportamiento          
    }
    login(username,pasword){
        //logica iniciar sesion
        if(username === this.username && pasword === this.pasword){
            alert('Bienvenido')
        }else{
            alert('Error')
        }
    }
    resetPasword(newPassword){
        this.pasword = newPassword;
        alert(newPassword)
        
    }
    updateInfo(newEmail){
        this.email = newEmail
        alert(newEmail)
    }
    showInfo(){
        alert(`Datos del usuario ${this.username} (${this.updateInfo(newEmail)})`)
    }
}
let user = new User('Fernando091','123456701.12','ferlog@gmail.com');

user.login(prompt('Ingrese su usuario','Fernando091'),prompt('Ingrese su contraseña',123456701.12));
user.resetPasword(prompt('Cambie la contraseña'));
user.updateInfo(prompt('Actualiza el e-mail'));
user.showInfo();