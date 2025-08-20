const rootDomEl = document.getElementById("root");

const rootReactEl = ReactDOM.createRoot(rootDomEl);

// const headerReactEl=React.createElement('h1',null,'react components')

//functional component is function that returns react element!
function Header() {
  const headerReactEl = React.createElement("h1", null, "react components!");
  const subHeaderReactEl = React.createElement(
    "h2",
    { className: "sub-header" },
    "components awesome"
  );

  // const divReactEl=React.createElement('div',null, headerReactEl, subHeaderReactEl)

  const fragmentEl = React.createElement(
    React.Fragment,
    null,
    headerReactEl,
    subHeaderReactEl
  );

  return fragmentEl;
}

function Body() {
  return React.createElement(
    "main",
    null,
    React.createElement("p", null, "lorem10")
  );
}

function Main() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(Body)
  );
}

rootReactEl.render(React.createElement(Main));
