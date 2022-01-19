import { Table } from "../components/Table";

const Produto = ()=>{
    const contents= [
        {
            nome:"Açúcar",
            preco:5.90
        },
        {
            nome:"Feijão",
            preco:7.50
        }
    ]


    return <Table contents={contents}/>
}

export default Produto;