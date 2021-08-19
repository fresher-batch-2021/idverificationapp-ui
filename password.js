class Password{
    static isValidPassword(input, message){
        if(input=="" || input.length < 5 || input.length > 15 ){
            throw new Error(message);
        }
    }
}
