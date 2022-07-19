import React from "react";
import next from "next"
import FormData from 'form-data';


export default function Token(props) {

  console.log(props);

  return (
    <>

    </>
  )
}


export async function getServerSideProps(ctx) {

  const code = '223423eaesdafs'; //ctx.query.code;

   // let params = context.json();
    let api_key = '104d3bcd73339f135205587b9f9ec6e1';
    let seret_key = '9a17f1ba9296d8545f6a55b598441fd0';


    var myHeaders = new Headers();
myHeaders.append("Cookie", "_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxqTlRnMk1UY3pNeTA1TW1aakxUUTJZemN0WVRNME55MWhOR0UzTXpGak16WTBNV1lHT2daRlJnPT0iLCJleHAiOiIyMDI0LTA2LTI0VDIwOjMwOjAxLjIzMloiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--2e1fed506e81a926fc7109cda4a8cf01283c5d1e; _secure_admin_session_id=f46a5ed93fe41bc9eaa481854a51a703; _secure_admin_session_id_csrf=f46a5ed93fe41bc9eaa481854a51a703; request_method=POST");

var formdata = new FormData();
formdata.append("client_id", api_key);
formdata.append("client_secret", seret_key);
formdata.append("code", code);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

let result = await fetch("https://boxbuilder-dev.myshopify.com/admin/oauth/access_token", requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => error);
  


    //let json = JSON.stringify(context);
  // Pass data to the page via props
  return { props: { result } }
}
