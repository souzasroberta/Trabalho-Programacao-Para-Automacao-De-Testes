# Função de Login com Testes Automatizados

Projeto desenvolvido como trabalho prático da pós-graduação em automação de testes by Julio de Lima, com o objetivo de praticar a escrita de funções em JavaScript e a criação de testes automatizados de unidade.

---

## Sobre o projeto

Implementação de uma função de login que valida as credenciais de usuários cadastrados em um vetor, cobrindo os seguintes cenários:

- Login realizado com sucesso
- Credenciais expiradas
- Usuário não encontrado
- Senha incorreta

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/) — test runner
- `node:assert` — biblioteca nativa de asserções do Node.js

---

## Estrutura de pastas
├── src/
│   └── login.js          # Vetor de usuários e função fazerLogin
├── test/
│   └── login.test.js     # Testes automatizados
├── package.json
└── .gitignore

---

## Como rodar os testes

**1. Clone o repositório**
```bash
git clone https://github.com/souzasroberta/Trabalho-Programacao-Para-Automacao-De-Testes.git
```

**2. Acesse a pasta do projeto**
```bash
cd Trabalho-Programacao-Para-Automacao-De-Testes
```

**3. Instale as dependências**
```bash
npm install
```

**4. Execute os testes**
```bash
npm test
```

---

## Casos de teste

| # | Cenário | Resultado esperado |
|---|--------|-------------------|
| 1 | Email e senha corretos | `Login realizado com sucesso! Bem-vindo(a), Ana Silva.` |
| 2 | Usuário com credencial expirada | `Credenciais expiradas: renove seu acesso.` |
| 3 | Email não cadastrado | `Credenciais incorretas: usuário não encontrado.` |
| 4 | Senha incorreta | `Credenciais incorretas: senha inválida.` |
| 5 | Email não informado (null) | Lança erro: `O email e a senha precisam ser informados.` |
| 6 | Senha não informada (null) | Lança erro: `O email e a senha precisam ser informados.` |

---

## Autora

Feito com 💙 por **souzasroberta**
