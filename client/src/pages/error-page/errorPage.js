import React from "react";
import ErrorPage from "../../components/error-page/ErrorPage";
import { Helmet } from 'react-helmet';

export default function errorPage(){
    console.log("ErrorPage component rendered");
    return(
        <>
        <Helmet>
        <title>Error 404 (Not Found)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.trafyai.com/error" />
        <meta name="robots" content="noindex" />
        </Helmet>
        <ErrorPage/>
        </>
    )
}