import Content from "../../layouts/Content.jsx";
import {useEffect, useState} from "react";
import Sheet from "@mui/joy/Sheet";

export default function DashboardPage() {
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
        <Content pathMain={'Dashboard'} pathSecond={'List'} headTitle={'Dashboard'}>
            dfs
        </Content>
    );
}