import ImageContainer from './components/ImageContainer';


function App() {
    return (
        <div className='App'>
            <h1>Image Gallery</h1>
            <ImageContainer imgSrc="images/img-1.jpg" altText="Despription of first image" containerId="image1"/>
            <ImageContainer imgSrc="images/img-2.jpg" altText="Despription of first image" containerId="image2"/>
            <ImageContainer imgSrc="images/img-3.jpg" altText="Despription of first image" containerId="image3"/>
        </div>
    );
};

export default App;

