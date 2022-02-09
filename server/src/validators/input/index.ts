export const emailValidator = (email: string) : boolean => {
    //check email
    const check = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    return check ? true : false 
}
export const maxValidator = ( value:string, n: number) : boolean => {
    return value.length <= n
}

export const minValidator = ( value:string, n: number) : boolean => {
    return value.length >= n
}

export const inputValidator = (value: string): boolean => {
    const format =  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    
    return value.match(format) ? false : true
}