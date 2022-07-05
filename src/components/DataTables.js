import React from "react";


const DataList = () => {
    const ListItem = [
        { id: 1, col1: "hello", col2: "World" }, { id: 1, col1: "datagridpro", col2: "World" }, { id: 1, col1: "MUİ", col2: "World" }

    ];

    const ListItemButton = [
        { field: "col1", headerName: "column1", width: 150 },
        { field: "col1", headerName: "column1", width: 150 },
    ];
    return (<DataList
        ListItem={ListItem}
        colListItemButtonumns={ListItemButton}
    />)

}

export default DataList;