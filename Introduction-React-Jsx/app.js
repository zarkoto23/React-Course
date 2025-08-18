
const rootDomEl=document.getElementById('root')

const reactRoot=ReactDOM.createRoot(rootDomEl)


const headingReactEl=React.createElement('h1',{},'hello from jsx')
const subHeadingReactEl=React.createElement('h2',{id:'sub-header'}, 'react best framework')
const headerSectionReactEl=React.createElement('header',{},headingReactEl,subHeadingReactEl)


reactRoot.render(headerSectionReactEl)