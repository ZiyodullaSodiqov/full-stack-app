import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";

    export default function Hisobot() {

        const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/todo/all").then((data) => {
            console.log(data);
            setPost(data?.data);
        });
    }, []);

    return(
        <React.Fragment>
            {post.map((item,  i) => {
                return(
                    <>
                       <div key={i}>
                            <h1>
                                Hisobot : <span>{item?.hisob}</span>
                            </h1>
                       </div>
                    </>
                )
            })}
        </React.Fragment>
    )}

