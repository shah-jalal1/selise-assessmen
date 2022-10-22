import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Modal, Row, Select} from "antd";
import {Option} from "antd/es/mentions";
import {PlusSquareOutlined} from "@ant-design/icons";
import CategoryList from "../../common/CategoryList";

const Home = () => {

    // const [bookmarksData, setBookmarkData] = useState([])
    let bookmarksData = JSON.parse(localStorage.getItem(('bookmarks-data')));


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
                        "title": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "angular",
                        "title": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "react",
                        "title": "Cake",
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
                        "title": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "angular",
                        "title": "Cake",
                        "url": 0.55,
                    },
                    {
                        'catName': "react",
                        "title": "danis",
                        "url": 0.55,
                    }
                ]
        }
    ]

    console.log('@@@@@@@', bookmarksData)
    console.log('###', categoryList)

    useEffect(() => {
        getAllBookmarks();
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

       // const _data = categoryList?.map(catData => {
       //      if (catData?.categoryListName === values?.categoryListName) {
       //          catData?.category?.push(values);
       //      }
       //     console.log('cat data', catData);
       //
       //     return catData;
       //  })

        const _data = bookmarksData[0]?.map(catData => {
            if (catData?.categoryListName === values?.categoryListName) {
                catData?.category?.push(values);
            }
            console.log('cat data', catData);

            return catData;
        })



        console.log('values', _data)

        let a = [];
        a = JSON.parse(localStorage.getItem('bookmarks-data')) || [];
        a.push(_data);

        localStorage.setItem('bookmarks-data', JSON.stringify(a));

        form.resetFields();

        alert("Successfully added into favourite");

        getAllBookmarks();

        setIsModalOpen(false);


    }

    const getAllBookmarks = () => {
        // bookmarksData = JSON.parse(localStorage.getItem(('bookmarks-data')));
         // setBookmarkData(JSON.parse(localStorage.getItem(('bookmarks-data'))));
         setIsAdd(false);
    }



    const addCategory = () => {
        setIsAdd(true);
    }


    return (
        <div style={{padding: '50px'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h2 style={{marginRight: '20px'}}>Bookmark Manager</h2>
                <Button type='primary' onClick={showModal}>Add Bookmark</Button>
            </div>

            <div>
                <CategoryList
                    // categoryList={categoryList}
                    categoryList={bookmarksData[0]}
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


                        <Col md={24}>
                            <div style={{display: 'flex'}}>
                                <Form.Item
                                    name="categoryListName"
                                    rules={[{required: true, message: 'Please input category'}]}
                                >
                                    <Select disabled={isAdd} style={{width: '400px'}}
                                    >
                                        {
                                            categoryList?.map(data =>
                                                <Option key={Math.random()}
                                                        value={data?.categoryListName}>{data?.categoryListName}</Option>
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
                            {
                                isAdd &&
                                <Form.Item
                                    // label="Title"
                                    name="catName"
                                    rules={[{required: true, message: 'Please input catName'}]}
                                >
                                    <Input placeholder='New Category Name'/>
                                </Form.Item>
                            }

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