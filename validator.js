class validator{
    static isValidString(input,message){
        if(input==null || input.trim() =="" ){
            throw new Error(message);
        }
    }
}
