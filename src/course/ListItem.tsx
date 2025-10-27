type item = {
    id: number;
    name: string;
}

const items: item[] = [
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Orange' },
];

const ListItem = () => {
    return (
        <>
        <h1>List of fruits</h1>
        <ul>
            {
            items.map((item) => (<li key={item.id}>{item.name}</li>))
            }
        </ul>
        </>
    )
}

export default ListItem
