import React, { useState } from 'react';
import { Modal, Button, Form, Input, Row, Col } from 'antd';
import { ProductsServices } from '../../services/products.services'

export const ModalNewProduct = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onFinish = (values) => {
        setLoading(true)
        const productServices = new ProductsServices()
        productServices.setProducts(values)
        setLoading(false);
        form.resetFields();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px 10px' }}>
            <Button type="primary" onClick={showModal}>
                Nuevo producto
            </Button>
            <Modal title="Registrar técnico" visible={isModalVisible} footer={null} onCancel={handleCancel} width="450px">
                <Form form={form} onFinish={onFinish}>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar nombre',
                                    },
                                ]}>
                                <Input placeholder="Nombres" type="text" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="register_date"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar la fecha',
                                    },
                                ]}>
                                <Input placeholder="Fecha de registro" type="date" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="brand"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar la marca',
                                    },
                                ]}>
                                <Input placeholder="Marca" type="text" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
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

                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        { loading ? <p>Registrando...</p> : <Button type="primary" htmlType="submit">Registrar</Button> }
                    </div>
                </Form>
            </Modal>
        </div>
    );
};