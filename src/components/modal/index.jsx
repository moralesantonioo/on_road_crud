import React, { useState } from 'react';
import { Modal, Form, Input, Row, Col, Button } from 'antd';
import { ProductsServices } from '../../services/products.services'
import { Container, Tags, ButtonStyle, Title} from '../../styles/home.style'

export const ModalNewProduct = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [loadingRegister, setLoadingRegister] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onFinish = (values) => {
        setLoadingRegister(true)
        const productServices = new ProductsServices()
        productServices.setProducts(values)
        setLoadingRegister(false)
        form.resetFields()
        setIsModalVisible(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <Container>
            <Tags color="blue" onClick={showModal}>Nuevo producto</Tags>
            <Modal title="Registrar producto" visible={isModalVisible} footer={null} onCancel={handleCancel} width="450px">
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
                                <Input placeholder="Nombres" type="text" />
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
                                <Input placeholder="Fecha de registro" type="date" />
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
                                <Input placeholder="Marca" type="text" />
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
                        { loadingRegister ? <p>Registrando...</p> : <Button type="primary" htmlType="submit">Registrar</Button> }
                    </ButtonStyle>
                </Form>
            </Modal>
        </Container>
    );
};