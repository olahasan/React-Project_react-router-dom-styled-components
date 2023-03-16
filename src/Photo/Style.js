import styled from "styled-components";

  /* photo */
export const TheMain = styled.div`
    background-image: url(https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MFw9My09NEJZNkgoLlI8MzglT1BSVlAgIAo%3D&w=1920);
    position: relative;
    background-size: cover;
    /* min-height: 100vh; */
    min-height: 124vh;

    background-color: #380101;
    position: relative;

    &:before{
        content: "Fresh, High Quality";
        position: absolute;
        font-size: 56px;
        background-color: #e8e0c770;
        left: 50%;
        top: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
    }
`


//   .main{
//     background-image: url(https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=MFw9My09NEJZNkgoLlI8MzglT1BSVlAgIAo%3D&w=1920);
//     position: relative;
//     background-size: cover;
//     /* min-height: 100vh; */
//     min-height: 124vh;

//     background-color: #380101;
//     position: relative;
//   }



//   .main::before{
//     content: "Fresh, high Quality";
//     position: absolute;
//     font-size: 56px;
//     background-color: #e8e0c770;
//     left: 50%;
//     top: 50%;
//     width: 100%;
//     text-align: center;
//     transform: translate(-50%, -50%);
//   }
  /* photo */