export const Table = ({contents})=>{
    return(
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {
                    contents.map((content)=> {
                        return  (
                            <tr>
                                <td>{content.nome}</td>
                                <td>R${content.preco}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>

        </table>
    );
}

