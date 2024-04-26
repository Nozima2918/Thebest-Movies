import React from 'react';
import {Stack} from "@mui/material";
import {category} from "./constants";
import {colors} from "./constants/colors";

const Category = ({selectCategoryHandler, selectCategory}) => {
    return (
        <Stack direction={'row'} style={{overflowX: 'scroll'}}>
            {category.map(item =>
                <button
                    type='button' className='category-btn' key={item.name}
                    onClick={() => selectCategoryHandler(item.name)}
                    style={{
                        backgroundColor: selectCategory === item.name && '#7D01AB',
                        color: selectCategory === item.name && "white"
                    }}

                >
                    <span style={{color: selectCategory === item.name ? 'white' : colors.purple}}>{item.icon}</span>
                    <span style={{marginLeft: '10px', color: selectCategory === item.name ? 'white' : colors.purple}}>{item.name}</span>
                </button>
            )}
        </Stack>
    );
}

export default Category;