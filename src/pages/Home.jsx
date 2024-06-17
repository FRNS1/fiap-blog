import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';

import Card from "../components/Card";
import Layout from "../components/Layout";

import { contentfulClient } from "../utils/createContentfulClient";

function Home(){

    const[categorias, setCategorias] = useState([]);
    const[posts, setPosts] = useState([]);

    const limit = 3;

    const getCategorias = async () => {
        const response = await contentfulClient.getEntries({
            content_type: 'blogCategory', //qual a tabela?
        });

        setCategorias(response.items);
    };

    const getPosts = async () => {
        try {
            //--se a promise for resolvida
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost',
                limit: limit,
                order: '-sys.createdAt',
            });
            
            setPosts(response.items);
            //console.log(response.items)
        } catch (error) {
            //se a promise for rejeitada
            console.log("Erro ao obter posts", error);
        }
    };


    useEffect(()=>{
        getCategorias();
        getPosts();
    }, []);//disparada no onload do componente home

    return (
        <Layout>
            <div className="container my-4">
                <div className="row">
                    <main className="col-md-8">
                        <h2 className="mb-3">{limit} Últimos posts</h2>

                        {/* {posts.map((item) => (
                            <Card 
                                key={item.sys.id}
                                title={item.fields.blogPostTitle}
                                text={item.fields.blogPostDescription}
                                link={'/post/' + item.fields.blogTextSlug}
                            />

                        )) } */}

                        <Link to="postlist/" className="btn btn-dark">Ver todos posts</Link>
                        
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

export default Home;