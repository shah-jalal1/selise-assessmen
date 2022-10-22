import React, {useState} from 'react';
import {Button, Col, Form, Input, Modal, Row, Select} from "antd";
import {Option} from "antd/es/mentions";
import {PlusSquareOutlined} from "@ant-design/icons";

const Home = () => {

    let catergory = ['javasript', 'angular', 'basic angular']

    const [categories, setCategories] = useState([]);
    const [catergoryTempValue, setCategoryTempValue] = useState('')


    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async values => {
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setCategoryTempValue(value);
    };

    const addCategory = () => {
        setCategories([...categories, catergoryTempValue]);
    }

    console.log('category', categories)

    return (
        <div style={{padding: '50px'}}>
           <div style={{display: 'flex', justifyContent: 'center'}}>
               <h2 style={{marginRight: '20px'}}>Bookmark Manager</h2>
               <Button type='primary' onClick={showModal}>Add Bookmark</Button>
           </div>


            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <Form
                    layout='vertical'
                    name="basic"
                    onFinish={onFinish}
                    className="form"
                    form={form}
                >

                    <Row gutter={24}>

                        <Col md={24} xs={24}>
                            <Form.Item
                                // label="Title"
                                name="title"
                                // rules={[{required: true, message: 'Please input full name'}]}
                            >
                                <Input placeholder='title'/>
                            </Form.Item>
                        </Col>

                        <Col md={24} xs={24}>
                            <Form.Item
                                // label="Title"
                                name="url"
                                // rules={[{required: true, message: 'Please input full name'}]}
                            >
                                <Input placeholder='Url'/>
                            </Form.Item>
                        </Col>
                        {/*{*/}
                        {/*    catergory.map(data => {*/}
                        {/*        h1*/}
                        {/*    })*/}
                        {/*}*/}
                        <Col md={24} xs={24}>
                           <div style={{display: 'flex'}}>
                               <Select style={{ width: 120 }} onChange={handleChange}>
                                   {
                                       catergory.map(data =>
                                           <Option key={data} value={data}>{data}</Option>

                                       )
                                   }
                               </Select>

                               <PlusSquareOutlined
                                   onClick={addCategory}
                                   style={{
                                       fontSize: "20px",
                                       marginLeft: "0px",
                                   }}
                               />
                           </div>
                        </Col>

                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default Home;