import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import useStyles from './styles';
import { Link } from 'react-router-dom'

const Paginate = () => {
    const classes = useStyles();

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <Pagination { ...item } component={ Link } to={`/post?page=${1}`}/>
            )}
        />
    );
};

export default Paginate;