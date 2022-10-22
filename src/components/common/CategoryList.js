import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import './CategoryList.scss'

const CategoryList = ({categoryList}) => {

    const [detailsData, setDetailsData] = useState();

    const handleDetails = (data) => {
        console.log('data', data)
        setDetailsData(data);
    }

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

                                        {
                                            data?.category?.map(value =>
                                                <div key={Math.random()} className='card-item'>
                                                    <div>
                                                        <h3>{value?.catName}</h3>
                                                    </div>
                                                    <div>
                                                        <Button onClick={() => handleDetails({value, categoryListName: data?.categoryListName})}>Details</Button>
                                                    </div>
                                                </div>
                                            )
                                        }

                                </div>
                            </div>
                        )
                    }

                </Col>

                <Col md={12}>
                    {
                        detailsData ?
                        <div className='category-card'>
                            <h3>Title: {detailsData?.value?.title}</h3>
                            <h3>url: {detailsData?.value?.url}</h3>
                            <h3>Category: {detailsData?.categoryListName}</h3>
                        </div>
                            :
                            <div></div>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default CategoryList;