// simulando uma autentificação de usuário. TRUE ou FALSE

type VerifyUserFn = (user: User, sentValue: User) => boolean; // função

type User =  {username: string, password: string}; //tipo User, objeto

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (user.username === sentValue.username && 
           user.password === sentValue.password);
};

// simulando o Banco de Dados. Neste caso retornará TRUE

const bdUser = {username: 'Sandra', password: 'gato123'};
const sentUser = {username: 'Sandra', password: 'gato123'};
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
