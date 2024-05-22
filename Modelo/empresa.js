class Empresa extends Connect {
    constructor() {
        super();
        this.id_empresa = 0;
        this.nombre_empresa = "";
        this.NIT = 0;
        this.telefono = "";
        this.direccion = "";
        this.correo = "";
        this.password = "";
        this.status = "";
        this.especialidad = "";
        this.tipo = "";
    }

    setData(data) {
        this.id_empresa = data.id_empresa;
        this.nombre_empresa = data.nombre_empresa;
        this.NIT = data.NIT;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.correo = data.correo;
        this.password = data.password; //Solo para registro
        this.status = data.status;
        this.especialidad = data.especialidad;
        this.tipo = data.tipo;
    }

    
    //Metodo para verificar login
    login(dataReq, loginCallback) {
        const endpoint = 'user/login';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //Metodo para registrar un usuario tipo cliente
    register(dataReq, loginCallback) {
        const endpoint = 'empresas/register';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);

    }
                //metodo para mostrar los datos  que el cliente tiene en recoleccion
    list(dataReq, loginCallback) {
        const endpoint = 'empresas/recoleccion';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, loginCallback);
    }      

        //Metodo para registrar un usuario tipo cliente
    register(dataReq, loginCallback) {
        const endpoint = 'empresas/register';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }
    
        //metodo para actualizar contraseña de usuario tipo cliente
    updatePassword(dataReq, loginCallback) {
        const endpoint = 'empresas/password';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para actualizar los datos de usuario tipo cliente
    update(dataReq, loginCallback) {
        const endpoint = 'empresas';
        const method = 'PUT';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para actualizar el status de un usuario tipo cliente
    defuse(dataReq, loginCallback) {
        const endpoint = 'empresas';
        const method = 'PATCH';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para mostrar los datos  que el cliente tiene en recoleccion
    empresas(dataReq, loginCallback) {
        const endpoint = 'user/empresas';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, loginCallback);
    }



}