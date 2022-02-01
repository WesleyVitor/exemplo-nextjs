import { Table } from "../components/Table";
import { Layout } from "../components/Layout";
const Produto = () => {
    const contents = [
        {
            nome: "Açúcar",
            preco: 5.9,
        },
        {
            nome: "Feijão",
            preco: 7.5,
        },
    ];

    return <Table contents={contents} />;
};

export default Produto;
