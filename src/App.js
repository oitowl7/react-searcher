import React from "react";
import Banner from "./components/Banner/"
import Container from "./components/Container/Container";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
    return(
        <div>
            <Banner />
            <Container>
                <SearchForm />
            </Container>
        </div>
    )
}

export default App;
