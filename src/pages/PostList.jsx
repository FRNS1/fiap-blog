import { Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import Card from "../components/Card";
import Layout from "../components/Layout";

import { contentfulClient } from "../utils/createContentfulClient";

function PostList(){

    const[categorias, setCategorias] = useState([]);
    const[posts, setPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getCategorias = async () => {
        const response = await contentfulClient.getEntries({
            content_type: 'blogCategory',
        });

        setCategorias(response.items);
    };

    const getPosts = async (page = 1) => {
        try {
            const limit = 2;
            const skip = (page - 1) * limit;

            //--se a promise for resolvida
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost',
                limit: limit,
                skip: skip,
                order: '-sys.createdAt',
            });

            console.log('responseeeee: ', response)
            
            setPosts(response.items);
            setTotalPages(Math.ceil(response.total / limit));

            //console.log(response.items)
        } catch (error) {
            //se a promise for rejeitada
            console.log("Erro ao obter posts", error);
        }
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };
    

    useEffect(()=>{
        getCategorias();
        getPosts(currentPage);
    }, [currentPage]);//disparada no onload do componente home

    return (
        <Layout>
            <div className="container my-4">
                <div className="row">
                    <main className="col-md-8">
                        <h2 className="mb-3">Listagem dos posts</h2>

                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                        <span aria-hidden="true">&lt;</span>
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                        <span aria-hidden="true">&gt;</span>
                                    </button>
                                </li>
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(totalPages)}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        {posts.map((item) => (
                            <Card 
                                key={item.sys.id}
                                titulo={item.fields.blogPostTitle}
                                texto={item.fields.blogPostDescription}
                                linktexto={'/post/' + item.fields.blogTextSlug}
                            />
                        ))}
                        
                        <Link to="/" className="btn btn-dark mt-4">Voltar para home</Link>
                    </main>

                    <aside className="col-md-4">
                        <h2>Categorias</h2>
                        <ul>
                            {categorias.map( (item) => <li key={item.sys.id}>{item.fields.blogCategoryTitle}</li> )}
                        </ul>
                    </aside>
                </div>   
            </div>

            

        </Layout>
    );
}

export default PostList;