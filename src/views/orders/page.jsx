import Content from "../../layouts/Content.jsx";
import OrderTable from "../../components/OrderTable.jsx";
import OrderList from "../../components/OrderList.jsx";

export default function OrderListPage(){

    return (
        <Content pathMain={'Orders'} pathSecond={'list'} headTitle={'Order List'}>
            <OrderTable/>
            <OrderList/>
        </Content>
    )
}