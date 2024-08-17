import Sheet from "@mui/joy/Sheet";
import Content from "../../layouts/Content.jsx";
import {useEffect, useState} from "react";
import {Stack} from "@mui/joy";

export default function UserManagePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then((data) => {
            setData(data);
        })
    }, [])

    const getData = async () => {
        const response = await fetch('https://www.melivecode.com/api/attractions');
        if (!response.ok) {
            throw Error('error');
        }
        return response.json();

    }
    return (
        <Content>
            <Sheet
                sx={{
                    display: {sm: 'initial'}, width: '100%', borderRadius: 'sm', flexShrink: 1,
                    overflow: 'auto', minHeight: 0,
                }}
            >
                {data.map((item,index) => (
                    <ul key={index}>
                        <li>
                            <span style={{fontWeight: "bold"}}>{item.id} {item.name}</span>
                            <hr/>
                            {item.detail}
                        </li>

                    </ul>
                ))}
            </Sheet>
        </Content>
    );
}