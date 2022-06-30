import React from "react"
import next from "next"


export default function Install() {

    function validateFormWithJS(event){
        event.preventDefault();

        const data = {
            stor_url: event.target.stor_url.value,
          }


let shop = event.target.stor_url.value;
let api_key  = '4896adec8987d25fe60ded70e471506b';
let scopes = 'read_orders,read_products,read_product_listings';
let redirect_url = 'https://4623-54-146-232-65.ngrok.io/token';

// Build install/approval URL to redirect to
let install_url = `https://${shop}/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect_url}`;

        console.log("hello i am here waiting you lolz! ", install_url);

        window.location.href=install_url;

        return false;
}


  return (
    <>

<style>{`
        #__next,
        body,
        html{
            margin:0;
            padding:0;
            min-height:100%;
            height:100%;
            width:100%;
        }
        .form-wrapper{
            height:100%;
            width:100%;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        .form-container{
            padding: 50px;
            border: 1px solid #eee;
        }
        .form-filed-inline{
            display: flex;
            width: 400px;
            align-items: center;
        }
        #stor_url{
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            border-width: 1px 0px 1px 1px;
            border-top-style: solid;
            border-bottom-style: solid;
            border-left-style: solid;
            border-top-color: rgb(221, 221, 221);
            border-bottom-color: rgb(221, 221, 221);
            border-left-color: rgb(221, 221, 221);
            border-image: initial;
            padding: 5px 10px;
            font-size: 15px;
            border-right-style: initial;
            border-right-color: initial;
            box-shadow: none;
            outline: none;
        }
        .submit-btn{
            border: 0;
            height: 40px;
            width: 120px;
            background: #a5a5b0;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            cursor:pointer;
        }
        
      `}</style>
    <div className="form-wrapper">
        <div className="form-container">
            <h1>Register Your Store</h1>
            <form id="register-stor" method="post" onSubmit={validateFormWithJS}>
                <div className="form-filed-inline">
                <input
                    className="stor_url"
                    id="stor_url"
                    name="stor_url"
                    type="text"
                    placeholder="storename.myshopify.com"
                    required
                />
                <button
                    type="submit"
                    className="submit-btn">
                    Submit
                </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}