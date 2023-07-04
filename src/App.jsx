import React from "react";
import "./App.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "./product";

const App = () => {
  const firstName = "Jousef"; // Replace "YourFirstName" with your actual first name

  return (
    <div className="App">
      <h1>Hello, {firstName ? firstName : "there"}!</h1>
      {firstName && (
        <img src="src/assets/images/Smokey.jpg" alt="Profile" />
      )}{" "}
      {/* Replace "your_image_url" with the URL of your image */}
      <Card style={{ width: "18rem" }}>
        <Image imageUrl={product.imageUrl} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
