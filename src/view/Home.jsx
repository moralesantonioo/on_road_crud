import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { ModalNewProduct } from '../components/modal'
import { ProductsServices } from '../services/products.services'

export const Home = () => {

    const [products, setproducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getProductHandler();
    }, [])

    const getProductHandler = async () => {
        setLoading(true);
        const productServices = new ProductsServices();
        await productServices.getProducts(setproducts, setLoading)
    };

    const handleDelete = async (id) => {
        const productServices = new ProductsServices();
        await productServices.deleteProduct(id);
    }


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Fecha de registro',
            dataIndex: 'register_date',
            key: 'register_date',
        },
        {
            title: 'Marca',
            dataIndex: 'brand',
            key: 'brand',
        },
        ,
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
            render: (text) => `S/ ${text}`,
        },
        ,
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{cursor: 'pointer', color: "red"}} onClick={() => handleDelete()}>Delete</div>
                    <div style={{cursor: 'pointer', color: "green", margin: "0 0 0 10px"}} onClick={() => handleDelete()}>Actualizar</div>
                </div>
            )
        },
    ];

    return (
        <>
            <ModalNewProduct />
            <Table dataSource={products} columns={columns} loading={isLoading} />
        </>
    )
}