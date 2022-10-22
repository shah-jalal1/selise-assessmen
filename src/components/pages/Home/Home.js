import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Modal, Row, Select} from "antd";
import {Option} from "antd/es/mentions";
import {PlusSquareOutlined} from "@ant-design/icons";
import CategoryList from "../../common/CategoryList";

const Home = () => {

    let bookmarksData = JSON.parse(localStorage.getItem(('bookmarks-data')));

    const [isInitData, setIsInitData] = useState(true);


    const [isAdd, setIsAdd] = useState(false);

    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const categoryList = [
        {
            'categoryListName': 'category A',
            "category":
                [
                    {
                        'catName': "javascript",
                        "url": 'https://www.w3schools.com/',
                    },
                    {
                        'catName': "angular",
                        "url": 'https://www.w3schools.com/',
                    },
                ]
        },
        {
            'categoryListName': 'category B',
            "category":
                [
                    {
                        'catName': "python",
                        "url": 'https://www.w3schools.com/',
                    },
                    {
                        'catName': "c++",
                        "url": 'https://www.w3schools.com/',
                    },
                ]
        }
    ]

    useEffect(() => {
        const _data = categoryList?.map(catData => {


            return catData;
        })
        localStorage.setItem('bookmarks-data', JSON.stringify(_data));
        getAllBookmarks();
        setIsInitData(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const onFinish = async values => {

        // let _tempBData = bookmarksData;

        localStorage.removeItem("bookmarks-data");

        let _data;

        _data = bookmarksData?.map(catData => {
            if (catData?.categoryListName === values?.categoryListName) {
                catData?.category?.push(values);
            }
            return catData;
        })

        let a = [];
        a = JSON.parse(localStorage.getItem('bookmarks-data')) || [];
        a.push(_data);

        localStorage.setItem('bookmarks-data', JSON.stringify(a));

        form.resetFields();

        alert("Successfully added into favourite");

        getAllBookmarks();

        setIsModalOpen(false);
        setIsInitData(false);

    }

    const getAllBookmarks = () => {

        setIsAdd(false);
    }


    const addCategory = () => {
        setIsAdd(true);
    }

    const onCancel = () => {
        setIsModalOpen(false);
    }


    return (
        <div style={{padding: '50px'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h2 style={{marginRight: '20px'}}>Bookmark Manager</h2>
                <Button type='primary' onClick={showModal}>Add Bookmark</Button>
            </div>

            <div>
                {

                        <CategoryList
                    categoryList={isInitData ? bookmarksData : bookmarksData[0]}
                    />
                }

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
                                rules={[{required: true, message: 'Please input title'},
                                    { max: 30, message: 'Username must be minimum 30 characters.' }
                                ]}
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


                        <Row >
                            <div style={{display: 'flex', width: '100%'}}>
                                <Form.Item
                                    name="categoryListName"
                                    rules={[{required: true, message: 'Please input category'}]}
                                >
                                    <Select disabled={isAdd} style={{width: '420px', marginRight: '10px'}}
                                    >
                                        {
                                            categoryList?.map(data =>
                                                <Option key={Math.random()}
                                                        value={data?.categoryListName}>{data?.categoryListName}</Option>
                                            )
                                        }
                                    </Select>
                                </Form.Item>
                                <Button
                                    icon={<PlusSquareOutlined
                                        style={{
                                            fontSize: "30px",
                                            marginLeft: "0px",
                                            border: 'none'
                                        }}

                                    />}
                                    onClick={addCategory}
                                />

                            </div>
                        </Row>
                        <Col md={24} xs={24}>
                            {
                                isAdd &&
                                <Form.Item
                                    name="catName"
                                    rules={[
                                        {required: true, message: 'Please input catName'},
                                    ]}
                                >
                                    <Input placeholder='New Category Name'/>
                                </Form.Item>
                            }

                        </Col>


                        <Col md={24}>

                          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                              <Button type='primary' onClick={onCancel}>Cancel</Button>

                              <Form.Item>
                                  <Button
                                      type="primary"
                                      htmlType="submit"
                                      style={{width: "100%"}}
                                  >
                                      Submit
                                  </Button>
                              </Form.Item>
                          </div>

                        </Col>

                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default Home;