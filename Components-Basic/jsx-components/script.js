const rootDomEl=document.getElementById('root')

const rootReactEl=ReactDOM.createRoot(rootDomEl)

// const headerReactEl=React.createElement('h1',null,'react components')


//functional component is function that returns react element!
function Header(){
const headerReactEl=React.createElement('h1',null,'react components!')
const subHeaderReactEl=React.createElement('h2',{className:'sub-header'}, 'components awesome')

const divReactEl=React.createElement('div',null, headerReactEl, subHeaderReactEl)

return divReactEl
}



rootReactEl.render(React.createElement(Header))