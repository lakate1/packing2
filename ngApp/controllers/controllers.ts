namespace myapp.Controllers {

    export class HomeController {
      public list

      public deleteList(id) {
        this.listService.removeList(id);
      }

      constructor(
        private listService
      ) {
        let authToken = window.localStorage.token;
        let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
        this.list = this.listService.getList(payload.id);     }
    }

    export class AddListController {
      public list

      public addList() {
        // console.log(this.list)
        let authToken = window.localStorage.token;
        let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
        this.list.userId = payload.id;
        this.listService.saveList(this.list);

      }

      public constructor(
        private listService
      ) {

      }
    }

    export class EditListController {
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

    export class RemoveListController {
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
        // You need to take this token and send it with every HTTP request to a authorized backend route
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
  
    };
    


    export class RegisterController {
      public user

      public signup() {
        this.userService.registerUser(this.user).then(() => {
          alert('signup successful, please login');
        })
      }

      public constructor(
        private userService,

      ) {

      }
    }
    
};
