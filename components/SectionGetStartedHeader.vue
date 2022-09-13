<template>
    <div class="section-header">

        <div class="__description">
            <div class="__outside-box">
                <br/>
                <div class="__inside-box">
                <p>If you want to chat with us, let’s do exactly that. Fill out your basic information and choose by what app we are going to message each other. Hope to text you soon!</p>
                </div>
            </div>
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    name: 'GetStartedHeader',
  }
  </script>
  
  <style scoped lang="scss">
    .section-header{
        background-image: url('/get-started/header-image.gif');
        background-position: top center;
        padding-top: 20rem;
        .__description{
            display:flex;
            flex-direction: column-reverse;
            width: 100%;
            margin: 0;

            .__outside-box{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: fit-content;
                background-color: #FFAC06;
                border: 1px solid #000000;

                .title{
                    margin-top: 6rem;
                    padding: 0 1rem;
                    text-align: center;
                    font-size: 20px;
                    line-height: 20px;
                    color: #000000;
                }

                .__inside-box{
                    background-color: #CC8800;
                    width: 80%;
                    height: 100%;
                    border: 2px solid #000000;
                    box-shadow: inset 0px 4px 7px 2px rgba(0, 0, 0, 0.25);
                    border-radius: 15px;
                    margin-bottom: 1rem;
                    p{
                        padding: 1px .5rem;
                        font-family: 'Lucida Console', sans-serif;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 1.5rem;
                        text-align: center;
                        color: #FFFFFF;
                    }
                }
            }

            
        }
    }

    
    /* Breakpoints begin here  */
    @media(min-width: 768px) {
        .section-header{
            padding-top: 4.5rem;
            background-size: 100% calc(100vw/1.7);
            .__description{
                width: 15rem;
                margin-left:1.3rem ;
                
                .__outside-box{
                    gap: 2.5rem;
                    .__inside-box{
                        border-bottom: 0;
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                        padding-bottom: 4rem;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
  </style>
  