import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import Nav from './Nav';

export const Removes = () => {


    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/todo/all").then((data) => {
            console.log(data);
            setPost(data?.data);
        });
    }, []);



    const handleSubmit = event => {
        event.preventDefault();
        const id = new FormData(event.currentTarget).get("id");

        fetch(`http://localhost:5000/api/todo/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(console.log);
    };


    return(
        <React.Fragment>
            <Nav />
            {post.map((item,  i) => {
                return(
                    <>
                        <table className="table table-bordered border-black" style={{marginTop:"30px"}}>
                                <thead>
                                <tr>
                                    <th scope="col">исми</th>
                                    <th scope="col">Буюм номи</th>
                                    <th scope="col">Телефон раками</th>
                                    <th scope="col">тайёр болишь вакти </th>
                                    <th scope="col">нархи</th>
                                    <th scope="col">delete</th>
                                    <th scope="col">Hisobot</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr key={i}>
                                    <td>
                                    <p className="pl">{item?.name}</p>
                                    </td>
                                    <td>
                                        <p className={'pl'}>{item?.title}
                                        </p>
                                    </td>

                                    <td>
                                        <p className={'pl'}>{item?.number}
                                        </p>
                                    </td>

                                    <td>
                                        <p className={'pl'}>{item?.time}
                                        </p>
                                    </td>

                                    <td>
                                        <p className={'pl'}>{item?.cash}
                                        </p>
                                    </td>
                                    <td>
                                    <form onSubmit={handleSubmit}>
                                        <div key={i}>
                                            <input type="text" value={item?._id} style={{display:"none"}} name="id"/>
                                            <button className="btn btn-danger" type="submit">
                                                <i class="bi bi-trash3"></i>
                                                </button>
                                        </div>
                                    </form>
                                    </td>
                                    <td>
                                        <p className="pl">{item?.hisob}</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                    </>
                )
                
            }
            )}
        </React.Fragment>
    )}

