const usuarios = [
    {
        id: 1,
        nome: 'Ana Silva',
        email: 'ana@email.com',
        senha: 'ana123',
        expirado: false
    },
    {
        id: 2,
        nome: 'Bruno Dias',
        email: 'bruno@email.com',
        senha: 'bruno456',
        expirado: false
    },
    {
        id: 3,
        nome: 'Carla Souza',
        email: 'carla@email.com',
        senha: 'carla789',
        expirado: true
    },
    {
        id: 4,
        nome: 'Diego Lima',
        email: 'diego@email.com',
        senha: 'diego321',
        expirado: false
    }
];


export function fazerLogin(email, senha) {
    if (!email || !senha) {
        throw new Error('O email e a senha precisam ser informados.');
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            if (usuarios[i].expirado) {
                return 'Credenciais expiradas: renove seu acesso.';
            }

            if (usuarios[i].senha !== senha) {
                return 'Credenciais incorretas: senha inválida.';
            }

            return `Login realizado com sucesso! Bem-vindo(a), ${usuarios[i].nome}.`;
        }
    }

    return 'Credenciais incorretas: usuário não encontrado.';
}