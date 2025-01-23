
var db = [
    {
        email: 'usuario@gmail.com',
        password: 'usuario123'
    }  
]

export function GetDataBaseUser() {
    return db
}

export function UpdateDataBaseUser(index, text) {
    db[index].tittle=text
}

export function PostDataBaseUser(titulo){
    const newStoryboard2 = {
        tittle: titulo,
        imag: "default-image.webp"
    };
    db.push(newStoryboard2)
}

export function RemoveDatabaseUser(index){
    db.splice(index,index)
}

