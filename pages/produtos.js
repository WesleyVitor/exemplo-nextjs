import { Table } from "../components/Table";
import { Layout } from "../components/Layout";
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


    return (
        <Layout>
            <Table contents={contents}/>
        </Layout>
        )
}

export default Produto;