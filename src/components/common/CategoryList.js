import React from 'react';
import {Button, Col, Row} from "antd";
import './CategoryList.scss'

const CategoryList = ({categoryList}) => {

    console.log('category list', categoryList)
    return (
        <div className='category-wrapper'>
            <Row>
                <Col md={12}>


                    {
                        categoryList?.map(data =>
                            <div key={Math.random()}>
                                <h3>{data?.categoryListName}</h3>
                                <div  className='category-card'>
                                    <div className='card-item'>
                                        <div>
                                            <h3>Javascript tutorial</h3>
                                        </div>
                                        <div>
                                            <Button>Details</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </Col>

                <Col md={12}>
                    <h1>javascript</h1>
                </Col>
            </Row>
        </div>
    );
};

export default CategoryList;