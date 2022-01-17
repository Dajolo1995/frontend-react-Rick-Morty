let credentials = {
    check: (data)=>{
        if(!data.token) return false

        return credentials._store(data)
    },

    _store: (data) =>{
        try {
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', JSON.stringify(data.user))
            return true
        } catch (error) {
            console.log(error);
        }
    },

    _clear: () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        
    },

    getToken: () =>{
        return window.localStorage.getItem('token')
    },

    getUser: () =>{
        return JSON.parse(window.localStorage.getItem('user'));
    },
    editNumberUser: (data) =>{
        let user= JSON.parse(window.localStorage.getItem('user'));
         user.phone=data
         window.localStorage.setItem('user', JSON.stringify(user))
          return true
      },

      _storeJurado: (data) =>{
        try {
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('jurado', JSON.stringify(data.jurado))
            return true
        } catch (error) {
            console.log(error);
        }
    },

    _clearJurado: () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('jurado');
        
    },

    getJurado: () =>{
        return JSON.parse(window.localStorage.getItem('jurado'));
    },
}

export default credentials