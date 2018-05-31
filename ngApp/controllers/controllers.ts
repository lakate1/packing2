namespace myapp.Controllers {

    export class HomeController {
      public list

      public deleteList(id) {
        this.listService.removeList(id);
      }

      constructor(
        private listService
      ) {
        this.list = this.listService.getList();
      }
    }

    export class AddMovieController {
      public list

      public addList() {
        // console.log(this.list)
        this.listService.saveList(this.list);
      }

      public constructor(
        private listService
      ) {

      }
    }

    export class EditMovieController {
      public list
      public id

      public editList() {
        this.list.id = this.id;
        this.listService.saveList(this.list);
      }

      constructor(
        private listService,
        public $stateParams
      ) {
        if($stateParams) {
          this.id = $stateParams['id'];
        }
      }
    }

    export class RemoveMovieController {
      public list

      public addList() {
        // console.log(this.list)
        this.listService.saveList(this.list);
      }

      public constructor(
        private listService
      ) {

      }
    }
   
    export class LoginController {
      public userInfo

      public login() {
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          alert('login successful');
        })
      }

      public constructor(
        private userService,
        public $window
      ) {

      }
  
    }

    export class RegisterController {
      public user
    
      // register(){
      //   console.log(this.user);
      //   if(this.user.password !== this.user.confirmPassword){
      //     alert("passwords dont match")
      //   } else{
      //     this.userService.saveUser(this.user)

      //   }
      public signup() {
        this.userService.registerUser(this.user).then(() => {
          alert('signup successful, please login');
        })
      }

      public constructor(
        private userService
      ){

      }
    }
  }
