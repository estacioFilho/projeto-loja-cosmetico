export default async function listaPordutos(){
    const produtosBruto = await fetch('http://localhost:3000/produtos');
    const produto = await produtosBruto.json();
    return produto;
}


