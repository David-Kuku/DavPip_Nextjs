import Navigation from '../components/Navigation'
import Content from '../components/content'
import Footer from '../components/footer'
import Mail from '../components/mail'
import Head from 'next/head'

class Index extends React.Component {
  render(){
    return (
      <div className="Index">
        <Head>
          <meta name="viewport" content="width = device-width, intial-scale= 1.0"></meta>
          <title>DavPip</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          
        </Head>
         <Navigation/>
        <Content className="content"/>
         <Mail/>
        <Footer/>



      <style jsx>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      .Index {
  
        height: 100%;
        width: 100%;
        background-color: #F5F5F5;
        margin-top: 0px;
       
      }
      @media only screen and (max-width: 767px){
        .Index{
          margin-left: 0%;
          margin-right: 0%;
        }
        input{
          width: 80%;
          border-radius: 5px;
        }
        .sub{
          text-align: center;
          margin-top: 150px;
        }
        
      }
      @media only screen and (min-width: 768px){
        input{
          width: 30%;
          border-radius: 5px;
        }
        .sub{
          text-align: center;
          margin-top: 150px;
        }
      }
      
      form{
        display: block;
        text-align: center;
      }
      
      button{
        border-radius: 15px;
       
      }
      .content{
        margin-bottom: 400px;
      }
      
      `}</style>
      </div>
    );
  }
}

export default Index;
