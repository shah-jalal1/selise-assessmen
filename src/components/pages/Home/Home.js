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

        values.category = categories;

        console.log('values', values)

        setIsModalOpen(false);

        let a = [];
        a = JSON.parse(localStorage.getItem('bookmarks-data')) || [];
        a.push(values);

        localStorage.setItem('bookmarks-data', JSON.stringify(a));

        form.resetFields();
        setCategories([]);
        setCategoryTempValue('');

        alert("Successfully added into favourite");
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setCategoryTempValue(value);
    };

    const addCategory = () => {
        setCategories([...categories, catergoryTempValue]);
    }


    return (
        <div style={{padding: '50px'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h2 style={{marginRight: '20px'}}>Bookmark Manager</h2>
                <Button type='primary' onClick={showModal}>Add Bookmark</Button>
            </div>


            <Modal
                title="Basic Modal"
                open={isModalOpen}
                // onOk={handleOk}
                // onCancel={handleCancel}
                >

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
                            <div>

                               <div style={{display: 'flex'}}>
                                   <Form.Item
                                       rules={[{required: true, message: 'Please input category'}]}
                                   >
                                       <Select style={{width: '90%'}}
                                               onChange={handleChange} disabled={categories !== [] ? false : true}
                                       >
                                           {
                                               catergory.map(data =>

                                                   <Option key={Math.random()} value={data}>{data}</Option>
                                               )
                                           }
                                       </Select>
                                   </Form.Item>
                                   <PlusSquareOutlined
                                       onClick={addCategory}
                                       style={{
                                           fontSize: "20px",
                                           marginLeft: "0px",
                                       }}
                                   />
                               </div>

                                <div style={{display: 'flex'}}>

                                </div>
                                {
                                    categories?.map(data =>
                                        <div style={{display: 'flex'}}>
                                            <Select
                                                style={{width: '90%'}}
                                                onChange={handleChange}
                                            >
                                                {
                                                    catergory.map(data =>
                                                        <Option key={Math.random()} value={data}>{data}</Option>
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
                                    )
                                }


                            </div>
                        </Col>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{width: "100%"}}
                            >
                                Submit
                            </Button>
                        </Form.Item>

                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default Home;