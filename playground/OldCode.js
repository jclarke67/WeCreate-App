<h1><Link to="/"> LetsCreate! </Link></h1>
{(this.state.isSignedIn || this.state.isSignedIn === undefined) ?
<Route exact path = "/app" render = {() => (
    <Photogram posts {...this.props}/>
)}/> : 

<Route exact path = "/" render = {() => (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
)}/>}