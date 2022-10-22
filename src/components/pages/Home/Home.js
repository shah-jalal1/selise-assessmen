import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Modal, Row, Select} from "antd";
import {Option} from "antd/es/mentions";
import {PlusSquareOutlined} from "@ant-design/icons";
import CategoryList from "../../common/CategoryList";

const Home = () => {

    let bookmarksData;

    const categoryList = [
        {
            'categoryListName': 'category A',
            "category":
                [
                    {
                        'catName': "javascript",
                        "name": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "angular",
                        "name": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "react",
                        "name": "Cake",
                        "url": 0.55,
                    }
                ]
        },
        {
            'categoryListName': 'category B',
            "category":
                [
                    {
                        'catName': "javascript",
                        "name": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "angular",
                        "name": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "react",
                        "name": "Cake",
                        "url": 0.55,
                    }
                ]
        }
    ]


    let catergory = ['javasript', 'angular', 'basic angular']

    const [categories, setCategories] = useState([]);
    const [catergoryTempValue, setCategoryTempValue] = useState('');

    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        getAllBookmarks();
    })

    const showModal = () => {
        setIsModalOpen(true);
    };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async values => {

        values.category = categories;

        setIsModalOpen(false);

        let a = [];
        a = JSON.parse(localStorage.getItem('bookmarks-data')) || [];
        a.push(values);

        localStorage.setItem('bookmarks-data', JSON.stringify(a));

        form.resetFields();
        setCategories([]);
        setCategoryTempValue('');

        alert("Successfully added into favourite");

        getAllBookmarks();
    }

    const getAllBookmarks = () => {
        bookmarksData = JSON.parse(localStorage.getItem(('bookmarks-data')));
    }

    const handleChange = (value) => {
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

            <div>
                <CategoryList
                    categoryList={categoryList}
                />
            </div>


            <Modal
                title="Basic Modal"
                open={isModalOpen}
                okButtonProps={{style: {display: 'none'}}}
                cancelButtonProps={{style: {display: 'none'}}}

                onCancel={handleCancel}
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
                                rules={[{required: true, message: 'Please input title'}]}
                            >
                                <Input placeholder='title'/>
                            </Form.Item>
                        </Col>

                        <Col md={24} xs={24}>
                            <Form.Item
                                // label="Title"
                                name="url"
                                rules={[{required: true, message: 'Please input url'}]}
                            >
                                <Input placeholder='Url'/>
                            </Form.Item>
                        </Col>
                        {/*{*/}
                        {/*    catergory.map(data => {*/}
                        {/*        h1*/}
                        {/*    })*/}
                        {/*}*/}


                        <Col md={24}>
                            <div style={{display: 'flex'}}>
                                <Form.Item
                                    rules={[{required: true, message: 'Please input category'}]}
                                >
                                    <Select style={{width: '400px'}}
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
                        </Col>
                        <Col md={24} xs={24}>
                            <div>

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

                        <Col md={24}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{width: "100%"}}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default Home;