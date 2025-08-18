
const rootDomEl=document.getElementById('root')

const reactRoot=ReactDOM.createRoot(rootDomEl)

//withoutJSX
const headingReactEl=React.createElement('h1',{},'hello from jsx')
const subHeadingReactEl=React.createElement('h2',{id:'sub-header'}, 'react best framework')
const headerSectionReactEl=React.createElement('header',{},headingReactEl,subHeadingReactEl)

//withJSX
const headerSectionJsxtEl=(<header>
    <h1>hello from jsssx</h1>
    <h2 id="sub-header">the best jsssx</h2>
    <p>lorem10  asdfasfas</p>
</header>)

reactRoot.render(headerSectionJsxtEl)