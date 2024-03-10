import { Global, css, connect, styled, Head,Helmet } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Contact from "./footers/contact";
import PrivacyPolicy from "./footers/privacy-policy";
import Nav from "./nav";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />  
      </Head>
      

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

    

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}


      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
            <Nav/>
          <Post when={data.isPostType} />
          <Contact when={data.link === '/contact/'} />
          <PrivacyPolicy when={data.link === '/privacy-policy/'} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <div style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#1f38c5",
        color: "#fff",
        textAlign: "center",
      
      }}>
      <a href="/privacy-policy/"
      style={{
        color: "#FFFFFF",
        textDecoration: "none",
        fontSize: "16px",
        marginBottom: "10px",
        display: "inline-block",
        marginRight: "50px"
      }}>Privacy-Policy</a>

<a href="/term-condition/"
      style={{
        color: "#FFFFFF",
        textDecoration: "none",
        fontSize: "16px",
        marginBottom: "10px",
        display: "inline-block",
        marginRight: "50px"
      }}>Term&Condition</a>
<a href="/contact/"
style={{
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "16px",
  marginBottom: "10px",
  display: "inline-block"
  
}}>Contact</a>
    </div>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  },
  background-color: gray;
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: "20px 0 0 0"
`;
