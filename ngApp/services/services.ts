namespace myapp.Services {
  export class ListService {
    public ListResource

    public saveList(list/*takes token and sends to resource*/) {
      return this.ListResource.save(list);
    }
    public updateList(list) {
      return this.ListResource.save(list);
    }

    public getList(id) {
      return this.ListResource.query({id: id});
    }

    public removeList(id) {
      return this.ListResource.delete({id: id});
    }

    public constructor(
      public $resource
    ) {
      this.ListResource = $resource('/api/list/:id'/*This endpoint needs to be autherized and given the token*/);
    }
  }

  export class UserService {
    // public saveUser(user){
    //   console.log(user)
    public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    }

    public loginUser(userInfo) {
      return this.LoginResource.save(userInfo).$promise;
    }

    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    }

  }

    
  
  angular.module('myapp').service('listService', ListService);
  angular.module('myapp').service('userService', UserService);

  }
