import styled from "styled-components";

function HomePage() {
    const HomeHeading = styled.h1`
        text-align: center;
        margin: 0;
        padding: 0;
        color: black;
        font-size: 7rem;
        font-family: 'Josefin Sans', sans-serif;
        
    `
    const HomeSubHeading = styled(HomeHeading)`
        font-size: 3.5rem;
    `

    return (
        <header>
            <HomeHeading>Liwaa</HomeHeading>
            <HomeSubHeading>Welcome...</HomeSubHeading>
        </header>
    )
}

export default HomePage;