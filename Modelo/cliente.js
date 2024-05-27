class Cliente extends Connect {
    constructor() {
        super();
        this.id_cliente = 0;
        this.nombre = "";
        this.correo = "";
        this.celular = "";
        this.fecha_nacimiento = "";
        this.tipo = "";
        this.password = "";
        this.status = "";
        this.id_empresa = "";
    }

    setData(data) {
        this.id_cliente = data.id_cliente;
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.celular = data.celular;
        this.fecha_nacimiento = data.fecha_nacimiento;
        this.tipo = data.tipo;
        this.password = data.password; //Solo para registro
        this.status = data.status;
        this.id_empresa = data.id_empresa;
    }

    
        //Metodo para verificar login
    login(dataReq, loginCallback) {
        const endpoint = 'user/login';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //Metodo para registrar un usuario tipo cliente
    register(dataReq, loginCallback) {
        const endpoint = 'clientes/register';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para actualizar contraseña de usuario tipo cliente
    updatePassword(dataReq, loginCallback) {
        const endpoint = 'clientes/password';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para actualizar los datos de usuario tipo cliente
    update(dataReq, loginCallback) {
        const endpoint = 'clientes';
        const method = 'PUT';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para actualizar el status de un usuario tipo cliente
    defuse(dataReq, loginCallback) {
        const endpoint = 'clientes';
        const method = 'PATCH';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para ingresar datos en la tabla de recoleccion
    recolectar(dataReq, loginCallback) {
        const endpoint = 'clientes/recoleccion';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para insertar datos en la tabla de materiales
    recolectarMaterial(dataReq, loginCallback) {
        const endpoint = 'clientes/recolectarMaterial';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

        //metodo para mostrar los datos  que el cliente tiene en recoleccion
    list(dataReq, loginCallback) {
        const endpoint = 'clientes/recoleccion';
        const method = 'GET';
        this.connect(dataReq, endpoint, method, loginCallback);
    }

    


}