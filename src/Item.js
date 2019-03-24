import React, { useState } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import './Item.css'

import { Button, Card } from 'evergreen-ui';

function Item(props) {
    const {item} = props;

    const unique_id = props.uid;
    item.uid = props.uid;

    return (
      
      <Card className = "wrapper"
        elevation={2}
        padding='20px'
        margin='20px'
        background="tint2"
      >
        <div className='name'>{item['Name']}</div>
            <div>{item['Timestamp']}</div>
            <div>{item['Year']}</div>
            <span className='btnlink'>
                <Link to={{
                  pathname: `/user/${unique_id}`,
                  // TODO: Pass the state fields dynamically (not specifically tailored to this app)
                  state: item
                }}>
                    <Button type='button'>
                        View Profile
                    </Button>
                </Link>
            </span>
      </Card>

    );
  }

  export default Item;