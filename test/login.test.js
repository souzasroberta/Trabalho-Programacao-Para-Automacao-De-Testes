import { fazerLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes da Função de Login', function () {

    it('Validar que o login é realizado com sucesso quando email e senha estão corretos', function () {
        // Act
        const retornoDaFuncao = fazerLogin('ana@email.com', 'ana123');

        // Assert
        assert.equal(retornoDaFuncao, 'Login realizado com sucesso! Bem-vindo(a), Ana Silva.');
    });

    it('Validar que uma mensagem de credencial expirada é apresentada quando o usuário está expirado', function () {
        // Act
        const retornoDaFuncao = fazerLogin('carla@email.com', 'carla789');

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais expiradas: renove seu acesso.');
    });

    it('Validar que uma mensagem de erro é apresentada quando o email não existe', function () {
        // Act
        const retornoDaFuncao = fazerLogin('nao@existe.com', 'qualquer');

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais incorretas: usuário não encontrado.');
    });

    it('Validar que uma mensagem de erro é apresentada quando a senha está incorreta para o usuário encontrado', function () {
        // Act
        const retornoDaFuncao = fazerLogin('ana@email.com', 'senhaErrada');

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais incorretas: senha inválida.');
    });

    it('Validar que um erro será retornado quando o email não for informado', function () {
        // Act & Assert
        assert.throws(
            function () { fazerLogin(null, 'ana123') },
            {
                message: 'O email e a senha precisam ser informados.'
            }
        );
    });

    it('Validar que um erro será retornado quando a senha não for informada', function () {
        // Act & Assert
        assert.throws(
            function () { fazerLogin('ana@email.com', null) },
            {
                message: 'O email e a senha precisam ser informados.'
            }
        );
    });

});