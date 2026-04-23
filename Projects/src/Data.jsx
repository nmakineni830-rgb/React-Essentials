import './Data.css';

export const Data = ({ data }) => {
    if (!data) return <p> loading...</p>
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                </tr>
            </thead>

            <tbody>
                {data.products.map((res) => (
                    <tr key={res.id}>
                        <td>{res.id}</td>
                        <td>{res.title}</td>
                        <td>{res.description}</td>
                        <td>{res.category}</td>
                        <td>{res.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
