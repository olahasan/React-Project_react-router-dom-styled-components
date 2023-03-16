import React from "react";
import {HomeSection , Big , Big2 , One , Image, Two , Title , Paragraph , Btn} from './Style.js'

const Hhome1 = () => {
    return(
        <HomeSection>
        <div className="container">
           <Big>
             <One>
                 <Image src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MEErUlE5LDNZPU41SEY4REdJMFZXUFAgIAo%3D&w=480" alt="pic" />
             </One>
             <Two>
                 <Title>Name of Plate</Title>
                 <Paragraph>This is a paragraph. You can write your own content here, and fill in the blanks. Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks.</Paragraph>
                 <Btn>See Our Menu</Btn>
             </Two>
           </Big>

           <Big2>
            <Two>
                <Title>Name of Plate</Title>
                <Paragraph>This is a paragraph. You can write your own content here, and fill in the blanks. Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks.</Paragraph>
                <Btn>See Our Menu</Btn>
            </Two>
            <One>
                <Image src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MCZFSzpSMjVGSDBVRUYiK0I2OT9VKVAgIAo%3D&w=480" alt="pic" />
            </One>
          </Big2>
        </div>
      </HomeSection>
    )
}
export default Hhome1;