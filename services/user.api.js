const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers=async ( )=>{
    return  await fetch(url).then(value => value.json())
}



export {getUsers}