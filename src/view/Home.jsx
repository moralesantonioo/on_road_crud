import React, { useEffect, useState } from 'react'
import { Table, Modal, Button, Form, Input, Row, Col, Tag } from 'antd';
import { ModalNewProduct } from '../components/modal'
import { ProductsServices } from '../services/products.services'
import { Actions, ButtonStyle, Title} from '../styles/home.style'

export const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [products, setproducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [loadingUpdate, setLoadingUpdate] = useState(false);
    const [idUpdate, setIdUpdate] = useState();

    useEffect(() => {
        getProductHandler();
    }, [])

    const onFinish = async (values) => {
        setLoadingUpdate(true)
        const productServices = new ProductsServices();
        await productServices.updateProduct(idUpdate, values);
        setLoadingUpdate(false)
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const getProductHandler = async () => {
        setLoading(true);
        const productServices = new ProductsServices();
        await productServices.getProducts(setproducts, setLoading)
    };

    const handleDelete = async (obj) => {
        const productServices = new ProductsServices();
        await productServices.deleteProduct(obj);
    }

    const handleUpdate = async (obj) => {
        setIdUpdate(obj.id)
        form.setFieldsValue({
            name: obj.name,
            brand: obj.brand,
            price: obj.price,
            register_date: obj.register_date,
            stock: obj.stock,
        });
        setIsModalVisible(true);
    }


    const columns = [
        {
            title: 'Nombre del producto',
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
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
            render: (text) => `S/ ${text}`,
        },
        {
            title: 'Cantidad',
            dataIndex: 'stock',
            key: 'stock',
            render: (text) => `${text} Unidades`,
        },
        {
            title: 'Acciones',
            key: 'action',
            render: (obj) => (
                <Actions>
                    <Tag color="green" onClick={() => handleUpdate(obj)}>Actualizar</Tag>
                    <Tag color="red" onClick={() => handleDelete(obj.id)}>Delete</Tag>
                </Actions>
            )
        },
    ];

    return (
        <>
            <>
                <Modal title="Actualizar producto" visible={isModalVisible} footer={null} onCancel={handleCancel} width="450px">
                    <Form form={form} onFinish={onFinish}>
                        <Row>
                            <Title>Nombre:</Title>
                            <Col span={24}>
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingresar nombre',
                                        },
                                    ]}>
                                    <Input placeholder="Nombres" type="text" disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Title>Fecha:</Title>
                            <Col span={24}>
                                <Form.Item
                                    name="register_date"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingresar la fecha',
                                        },
                                    ]}>
                                    <Input placeholder="Fecha de registro" type="date" disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Title>Marca:</Title>
                            <Col span={24}>
                                <Form.Item
                                    name="brand"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingresar la marca',
                                        },
                                    ]}>
                                    <Input placeholder="Marca" type="text" disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Title>Precio:</Title>
                            <Col span={24}>
                                <Form.Item
                                    name="price"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingresar el precio',
                                        },
                                    ]}>
                                    <Input placeholder="Precio" type="text" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Title>Cantidad:</Title>
                            <Col span={24}>
                                <Form.Item
                                    name="stock"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingresar el stock',
                                        },
                                    ]}>
                                    <Input placeholder="Stock" type="text" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <ButtonStyle>
                            {loadingUpdate ? <p>Actualizando...</p> : <Button type="primary" htmlType="submit">Actualizar</Button>}
                        </ButtonStyle>
                    </Form>
                </Modal>
            </>
            <ModalNewProduct />
            <Table style={{padding: '10px '}} size="middle" dataSource={products} columns={columns} loading={isLoading} scroll={{ y: 450, x: 700 }}/>
        </>
    )
}