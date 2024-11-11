import React from "react";
import styled from "styled-components";
import {
  HomeSection,
  Big,
  Big2,
  One,
  Image,
  Two,
  Title,
  Paragraph,
  Btn,
} from "./Style.js";

// import path from "../../public/imgs/download.png";
import hhomeleft from "../../src/images/hhome-left.webp";
import hhomeright from "../../src/images/hhome-right.webp";

const Imageeleft = styled.img`
  max-width: 100%;
  background-image: url(${hhomeleft});
  background-size: cover;
  background-position: center;
`;

const Imageeright = styled.img`
  max-width: 100%;
  background-image: url(${hhomeleft});
  background-size: cover;
  background-position: center;
`;

const Hhome1 = () => {
  return (
    <HomeSection>
      <div className="container">
        <Big>
          <One>
            <Imageeleft src={hhomeleft} alt="pic" />
            {/* <Image src="../../src/images/download.png" alt="pic" /> */}
            {/* <Image src="../../public/imgs/download.jpeg" alt="pic" /> */}
            {/* <Image src="imgs/hhome-left.webp" alt="pic" /> */}
            {/* <img src="../../public/imgs/download.png" alt="pic" /> */}
          </One>
          <Two>
            <Title>Name of Plate</Title>
            <Paragraph>
              This is a paragraph. You can write your own content here, and fill
              in the blanks. Tell the world about your business, and make this
              text yours. This is a paragraph. You can write your own content
              here, and fill in the blanks. Tell the world about your business,
              and make this text yours. This is a paragraph. You can write your
              own content here, and fill in the blanks.
            </Paragraph>
            <Btn>See Our Menu</Btn>
          </Two>
        </Big>

        <Big2>
          <Two>
            <Title>Name of Plate</Title>
            <Paragraph>
              This is a paragraph. You can write your own content here, and fill
              in the blanks. Tell the world about your business, and make this
              text yours. This is a paragraph. You can write your own content
              here, and fill in the blanks. Tell the world about your business,
              and make this text yours. This is a paragraph. You can write your
              own content here, and fill in the blanks.
            </Paragraph>
            <Btn>See Our Menu</Btn>
          </Two>
          <One>
            {/* <Image
              src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MCZFSzpSMjVGSDBVRUYiK0I2OT9VKVAgIAo%3D&w=480"
              alt="pic"
            /> */}
            <Imageeright src={hhomeright} alt="pic" />
            {/* <Image src="imgs/hhome-right.webp" alt="pic" /> */}
          </One>
        </Big2>
      </div>
    </HomeSection>
  );
};
export default Hhome1;
