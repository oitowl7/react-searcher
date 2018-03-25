import React from "react";
import Banner from "./components/Banner/";
import Container from "./components/Container/Container";
import SearchForm from "./components/SearchForm/SearchForm";
import Header from "./components/Header/";

const App = () => {
    return(
        <div>
            <Header />
            <Container>
                <SearchForm />
            </Container>
        </div>
    )
}

export default App;
